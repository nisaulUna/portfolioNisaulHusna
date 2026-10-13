import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  const menuItems = [
    { nama: "Home", link: "#home" },
    { nama: "About", link: "#about" },
    { nama: "Experience", link: "#experience" },
    { nama: "Projects", link: "#projects" },
    { nama: "Skills", link: "#skills" },
    { nama: "Contact", link: "#contact" },
  ];

  const menuRef = useRef(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScroll, setCanScroll] = useState(false);

  const handleMenuScroll = () => {
    const menu = menuRef.current;
    if (!menu) return;

    const maxScroll = menu.scrollWidth - menu.clientWidth;

    setScrollProgress(
      maxScroll > 0 ? menu.scrollLeft / maxScroll : 0
    );
  };

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;

    const checkMenuWidth = () => {
      const isOverflowing = menu.scrollWidth > menu.clientWidth + 1;

      setCanScroll(isOverflowing);

      if (!isOverflowing) {
        setScrollProgress(0);
      } else {
        handleMenuScroll();
      }
    };

    checkMenuWidth();

    const observer = new ResizeObserver(checkMenuWidth);
    observer.observe(menu);

    window.addEventListener("resize", checkMenuWidth);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", checkMenuWidth);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;

      let currentSection = "home";

      menuItems.forEach((item) => {
        const section = document.querySelector(item.link);

        if (section && section.offsetTop <= scrollPosition) {
          currentSection = item.link.substring(1);
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b-[3px] border-zinc-900 shadow-[0px_5px_0px_#18181b]">

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 py-4">

        <div className="flex items-center justify-between gap-4">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-zinc-900 bg-yellow-300 text-zinc-900">
              <i className="ri-code-s-slash-line text-xl"></i>
            </div>

            <h1 className="text-xl font-extrabold tracking-tight text-zinc-900">
              Portofolio.
            </h1>
          </a>

          {/* Menu Desktop */}
          <ul className="hidden items-center gap-6 md:flex">
            {menuItems.map((item) => {
              const isActive = activeSection === item.link.substring(1);

              return (
                <li key={item.nama}>
                  <a
                    href={item.link}
                    onClick={() => setActiveSection(item.link.substring(1))}
                    aria-current={isActive ? "location" : undefined}
                    className={`group relative py-2 text-sm font-semibold transition-colors duration-300 ${
                      isActive
                        ? "text-[#4CAF50]"
                        : "text-zinc-800 hover:text-[#4CAF50]"
                    }`}
                  >
                    {item.nama}

                    <span
                      className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-[#4CAF50] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

       {/* MENU MOBILE */}
        <div className="mt-3 border-t border-zinc-200 pt-3 md:hidden">

          {/* SCROLLABLE MENU */}
          <ul
            ref={menuRef}
            onScroll={handleMenuScroll}
            className={`
              flex items-center gap-6
              overflow-x-auto flex-nowrap
              whitespace-nowrap scroll-smooth
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
              ${canScroll ? "justify-start" : "justify-center"}
            `}
          >
            {menuItems.map((item) => {
              const isActive =
                activeSection === item.link.substring(1);

              return (
                <li key={item.nama} className="shrink-0">
                  <a
                    href={item.link}
                    onClick={() =>
                      setActiveSection(item.link.substring(1))
                    }
                    className={`text-sm font-semibold transition-colors ${
                      isActive
                        ? "text-green-600"
                        : "text-zinc-800 hover:text-green-600"
                    }`}
                  >
                    {item.nama}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* SMALL SCROLL INDICATOR */}
          {canScroll && (
            <div className="mt-4 flex items-center justify-center gap-2">

              <div
                className={`h-1 rounded-full transition-all duration-300 ${
                  scrollProgress < 0.5
                    ? "w-9 bg-[#3F956C]"
                    : "w-2 bg-zinc-300"
                }`}
              ></div>

              <div
                className={`h-1 rounded-full transition-all duration-300 ${
                  scrollProgress >= 0.5
                    ? "w-9 bg-[#3F956C]"
                    : "w-2 bg-zinc-300"
                }`}
              ></div>

            </div>
          )}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;