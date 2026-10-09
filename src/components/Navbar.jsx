
import { useState, useEffect } from "react";

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
          <ul className="hidden items-center gap-6 lg:flex">
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

        {/* Menu Mobile */}
        <ul className="mt-3 flex flex-wrap justify-center gap-x-5 gap-y-2 border-t border-zinc-200 pt-3 lg:hidden">
          {menuItems.map((item) => {
            const isActive = activeSection === item.link.substring(1);

            return (
              <li key={item.nama}>
                <a
                  href={item.link}
                  onClick={() => setActiveSection(item.link.substring(1))}
                  aria-current={isActive ? "location" : undefined}
                  className={`text-xs font-semibold underline-offset-4 transition-colors sm:text-sm ${
                    isActive
                      ? "text-green-600 underline"
                      : "text-zinc-800 hover:text-green-600 hover:underline"
                  }`}
                >
                  {item.nama}
                </a>
              </li>
            );
          })}
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;