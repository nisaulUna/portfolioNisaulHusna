import ScrollReveal from "./ScrollReveal";

const Footer = () => {
  return (
    <ScrollReveal>
    <footer
      id="contact"
      className="mt-25 w-full border-t-3 border-zinc-900 bg-[#FFE89A]"
    >
      <div className="mx-auto max-w-7xl py-12">
        <div className="container mx-auto px-5 lg:px-10">

            {/* CONTACT TITLE */}
            <div className="flex items-center gap-6 mb-8">
            <h1 className="text-4xl font-extrabold text-zinc-900">
                Contact
            </h1>

            <hr className="flex-1 border-t border-zinc-900" />
            </div>

            {/* CONTACT CONTENT */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* LEFT: CONTACT INFO */}
            <div className="flex flex-col justify-between gap-8">

                <div>
                <h2 className="text-5xl md:text-6xl font-extrabold text-pink-500 mb-4">
                    Let's Work Together!
                    <span className="ml-2">✦</span>
                </h2>

                <p className="text-zinc-700 leading-relaxed max-w-md">
                    Have a project in mind, a job opportunity, or just
                    want to say hello? Feel free to reach out.
                    I'd love to hear from you!
                </p>

                {/* EMAIL */}
                <a
                    href="mailto:nisaulhusnaaa@gmail.com"
                    className="
                    mt-7 flex w-fit items-center gap-3
                    rounded-xl border-2 border-zinc-900
                    bg-yellow-100 px-4 py-3
                    font-semibold text-zinc-900
                    shadow-[4px_4px_0px_#18181b]
                    transition-all duration-200
                    hover:-translate-y-1 hover:bg-yellow-300
                    "
                >
                    <i className="ri-mail-line text-2xl"></i>

                    <span className="text-sm sm:text-base break-all">
                    nisaulhusnaaa@gmail.com
                    </span>

                    <i className="ri-arrow-up-right-line text-xl"></i>
                </a>
                </div>

                {/* SOCIAL MEDIA */}
                <div className="flex gap-3">

                <a
                    href="https://wa.me/6281315225350"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="What's App"
                    className="
                    flex h-12 w-12 items-center justify-center
                    rounded-xl border-2 border-zinc-900
                    bg-[#A8F0C6] text-2xl
                    shadow-[3px_3px_0px_#18181b]
                    transition-transform hover:-translate-y-1 hover:bg-[#25D366]
                    "
                >
                    <i className="ri-whatsapp-fill text-zinc-900"></i>
                </a>

                <a
                    href="https://www.linkedin.com/in/nisaul-husna"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="
                    flex h-12 w-12 items-center justify-center
                    rounded-xl border-2 border-zinc-900
                    bg-[#B9E0FF] text-2xl
                    shadow-[3px_3px_0px_#18181b]
                    transition-transform hover:-translate-y-1 hover:bg-[#60A5FA]
                    "
                >
                    <i className="ri-linkedin-fill text-zinc-900"></i>
                </a>

                <a
                    href="https://github.com/nisaulUna"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="
                    flex h-12 w-12 items-center justify-center
                    rounded-xl border-2 border-zinc-900
                    bg-[#D9C5FF] text-2xl
                    shadow-[3px_3px_0px_#18181b]
                    transition-transform hover:-translate-y-1 hover:bg-[#A78BFA]
                    "
                >
                    <i className="ri-github-fill text-zinc-900"></i>
                </a>

                </div>
            </div>

            {/* RIGHT: CONTACT FORM */}
            <div
                className="
                rounded-2xl border-2 border-zinc-900
                bg-white p-6
                shadow-[5px_5px_0px_#18181b]
                "
            >
                <h3 className="text-xl font-extrabold text-zinc-900 mb-5">
                Send Me a Message ✉
                </h3>

                <form
                action="https://formsubmit.co/nisaulhusnaaa@gmail.com"
                method="POST"
                className="flex flex-col gap-4"
                >

                {/* FORMSUBMIT SETTINGS */}
                <input
                    type="hidden"
                    name="_subject"
                    value="New Message from Portfolio!"
                />

                <input
                    type="hidden"
                    name="_captcha"
                    value="true"
                />

                <input
                    type="text"
                    name="_honey"
                    className="hidden"
                    tabIndex="-1"
                    autoComplete="off"
                />

                {/* NAME */}
                <div>
                    <label className="mb-2 block text-sm font-bold text-zinc-900">
                    Your Name
                    </label>

                    <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your name"
                    className="
                        w-full rounded-lg border-2 border-zinc-900
                        bg-zinc-100 px-4 py-3 text-sm
                        outline-none text-zinc-900
                        focus:bg-white focus:ring-2 focus:ring-[#D9C5FF]
                    "
                    />
                </div>

                {/* EMAIL */}
                <div>
                    <label className="mb-2 block text-sm font-bold text-zinc-900">
                    Your Email
                    </label>

                    <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    className="
                        w-full rounded-lg border-2 border-zinc-900
                        bg-zinc-100 px-4 py-3 text-sm
                        outline-none text-zinc-900
                        focus:bg-white focus:ring-2 focus:ring-[#D9C5FF]
                    "
                    />
                </div>

                {/* MESSAGE */}
                <div>
                    <label className="mb-2 block text-sm font-bold text-zinc-900">
                    Your Message
                    </label>

                    <textarea
                    name="message"
                    required
                    rows="4"
                    placeholder="Write your message here..."
                    className="
                        w-full resize-none rounded-lg
                        border-2 border-zinc-900
                        bg-zinc-100 px-4 py-3 text-sm
                        outline-none text-zinc-900
                        focus:bg-white focus:ring-2 focus:ring-[#D9C5FF]
                    "
                    ></textarea>
                </div>

                {/* SUBMIT */}
                <button
                    type="submit"
                    className="
                    flex items-center justify-center gap-2
                    rounded-xl border-2 border-zinc-900
                    bg-[#25D366] px-5 py-3
                    font-extrabold text-zinc-900
                    shadow-[4px_4px_0px_#18181b]
                    transition-all duration-200
                    hover:-translate-y-1
                    hover:bg-[#A8F0C6]
                    active:translate-x-1 active:translate-y-1
                    active:shadow-none
                    cursor-pointer
                    "
                >
                    Send Message
                    <i className="ri-send-plane-fill text-lg"></i>
                </button>

                </form>
            </div>

            </div>

            {/* FOOTER BOTTOM */}
            <div className="mt-14 border-t-2 border-zinc-900 pt-6">

            <div className="flex flex-col gap-5 md:gap-3 lg:gap-1">

                {/* BRAND */}

                {/* NAVIGATION */}
                <div className="flex flex-wrap justify-center gap-5 text-sm font-semibold text-zinc-900">
                    <a href="#beranda" className="underline hover:text-zinc-600">
                        Home
                    </a>

                    <a href="#about" className="underline hover:text-zinc-600">
                        About
                    </a>

                    <a href="#experience" className="underline hover:text-zinc-600">
                        Experience
                    </a>

                    <a href="#projects" className="underline hover:text-zinc-600">
                        Projects
                    </a>

                    <a href="#skill" className="underline hover:text-zinc-600">
                        Skills
                    </a>
                </div>

                <div className="grid grid-cols-[1.5fr_1.5fr] justify-between">
                    <div>
                        <h3 className="text-xl font-extrabold text-zinc-900">
                            Portfolio<span className="text-pink-500">.</span>
                        </h3>

                        <p className="mt-1 text-xs text-zinc-700">
                            © @nisaulhusna 2026. All Rights Reserved.
                        </p>
                    </div>
                    <div className="flex items-end justify-end">
                        <a
                        href="#beranda"
                        aria-label="Back to top"
                        className="
                            flex items-center gap-2
                            rounded-xl border-2 border-zinc-900
                            bg-zinc-100 px-4 py-2
                            text-sm font-bold text-zinc-900
                            shadow-[3px_3px_0px_#18181b]
                            transition-all hover:-translate-y-1 hover:bg-[#E4E4E7]
                        "
                        >
                        Back to Top
                        <i className="ri-arrow-up-line text-lg"></i>
                        </a>
                    </div>
                </div>

            </div>

            </div>

        </div>
      </div>
    </footer>
    </ScrollReveal>
  )
}

export default Footer