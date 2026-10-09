import Image from "./data";
import { TypeAnimation } from "react-type-animation";


function App() {
  return (
    <>
      <div className="home" id="home">
        <div className="grid grid-cols-1 md:grid-cols-[2.5fr_1fr] gap-10 mt-15">

          {/* Bagian kiri */}
          <div className="min-h-80 rounded-2xl border-[3px] border-zinc-900 bg-white p-10 lg:p-12 shadow-[4px_5px_0px_#18181b]">

            <span className="font-mono text-md font-semibold tracking-widest uppercase text-zinc-500">
              Tangerang Selatan, Banten
            </span>

            <h1 className="text-6xl md:text-6xl font-extrabold text-zinc-900 mb-2 mt-4">
              Nisaul Husna
            </h1>

            <div>
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  2000,
                  "AI Engineer",
                  2000,
                ]}
                wrapper="Span"
                speed={50}
                deletionSpeed={65}
                cursor={true}
                repeat={Infinity}
                className="text-2xl md:text-4xl font-bold text-[#4CAF50]"
              />
            </div>

            <p className=" text-zinc-600 md:text-md mt-6">
              Informatics graduate passionate about web development and building innovative digital solutions. Experienced in software development, API integration, and database management.
            </p>

            
            <hr className="border-t border-gray-400 my-6" />
  
            <div className="grid grid-cols-2 gap-2 mt-4">
              <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="/cv.pdf"
                    download
                    className="flex items-center gap-2 rounded-xl border-2 border-zinc-900 bg-pink-300 px-4 py-2 text-sm font-bold text-zinc-900 transition-all duration-200 hover:-translate-y-1 hover:bg-pink-400 hover:shadow-[3px_3px_0px_#18181b]"
                  >
                    <span className="hidden sm:inline">Download CV</span>
                    <i className="ri-download-line text-lg"></i>
                  </a>

                  <a
                    href="/cv.pdf"
                    download
                    className="flex items-center gap-2 rounded-xl border-2 border-zinc-900 bg-[#FFE89A] px-4 py-2 text-sm font-bold text-zinc-900 transition-all duration-200 hover:-translate-y-1 hover:bg-[#FACC15] hover:shadow-[3px_3px_0px_#18181b]"
                  >
                    <span className="hidden sm:inline">Contact Me</span>
                    <i className="ri-arrow-right-up-line text-2xl"></i>
                  </a>
              </div>

              <div className="flex flex-wrap items-center gap-3 justify-end">
                  <a
                    href="https://wa.me/6281315225350"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex rounded-xl border-2 border-zinc-900 bg-[#A8F0C6] text-zinc-900 px-4 py-2 transition-all duration-200 hover:-translate-y-1 hover:bg-[#25D366] hover:shadow-[3px_3px_0px_#18181b]"
                  >
                    <i className="ri-whatsapp-fill text-2xl"></i>
                  </a>

                  <a
                    href="/cv.pdf"
                    download
                    className="flex rounded-xl border-2 border-zinc-900 bg-[#B9E2FF] text-zinc-900 px-4 py-2 transition-all duration-200 hover:-translate-y-1 hover:bg-[#60A5FA] hover:shadow-[3px_3px_0px_#18181b]"
                  >
                    <i className="ri-linkedin-fill text-2xl"></i>
                  </a>

                  <a
                    href="/cv.pdf"
                    download
                    className="flex rounded-xl border-2 border-zinc-900 bg-[#D9C5FF] text-zinc-900 px-4 py-2 transition-all duration-200 hover:-translate-y-1 hover:bg-[#A78BFA] hover:shadow-[3px_3px_0px_#18181b]"
                  >
                    <i className="ri-github-fill text-2xl"></i>
                  </a>
              </div>
            </div>

          </div>

          {/* Bagian kanan */}
          <div className="relative h-105">

            <div className="absolute inset-x-0 bottom-0 h-[85%] matcha-gradient rounded-2xl border-[3px] border-zinc-900 shadow-[4px_5px_0px_#18181b]"></div>
            <img
              src={Image.Foto}
              alt="Profile"
              className="absolute -bottom-1.25 -left-8 z-10 h-[110%] w-auto max-w-none object-contain object-bottom"
            />
          </div>
        </div>

        <a className="flex mt-15 justify-center items-center gap-5 cursor-pointer bounce-interval" href="#about">
          <span className="font-mono text-sm font-semibold tracking-widest uppercase text-zinc-400 border-b border-zinc-400 hover:text-zinc-600">
            Scroll to explore
          </span>
          <i className="ri-arrow-down-long-line text-md text-zinc-400 hover:text-zinc-600"></i>
        </a>
      </div>

      <div className="about mt-15" id="about">
        <div className="grid grid-cols-[1fr_6fr] mb-6 sm:gap-6">
          <h1 className="text-4xl md:text-4xl font-extrabold text-zinc-900">
            About
          </h1>
          <hr className="border-t border-zinc-900 my-6" />
        </div>

        <div className="rounded-2xl border-[3px] border-zinc-900 bg-white shadow-[4px_5px_0px_#18181b] grid grid-cols-[2fr_1fr]">
          <div className="p-10 lg:p-12">
            <div className="flex justify-between">
              <div>
                <span className="text-2xl font-extrabold text-zinc-900 mt-4">
                  Bachelor's Degree in Computer Science
                </span>

                <p className=" text-zinc-600 md:text-md -mt-1">
                  Universitas Pembangunan Nasional Veteran Jakarta.
                </p>

                <span className="font-mono text-xs font-semibold tracking-widest  text-zinc-400 uppercase">
                  August 2022 - september 2026
                </span>
              </div>

              <div>
                <a
                  href="/cv.pdf"
                      download
                      className="flex items-center gap-2 rounded-xl border-2 border-zinc-900 bg-zinc-100 px-4 py-2 text-sm font-bold text-zinc-900 transition-all duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-[3px_3px_0px_#18181b]"
                    >
                    <span className="hidden sm:inline">PDDIKTI</span>
                    <i className="ri-arrow-right-up-line text-2xl"></i>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full my-6">
              <div className="flex rounded-2xl border-[3px] border-zinc-900 bg-[#FFFFF0] shadow-[2px_3px_0px_#18181b] p-3 px-5 gap-5">
                <div>
                  <i className="ri-graduation-cap-fill text-2xl rounded-md border-2 border-zinc-900 text-zinc-900 p-1"></i>
                </div>
                <div className="grid grid-cols">
                  <span className="font-mono text-sm font-semibold tracking-widest  text-zinc-500">
                    GPA
                  </span>
                  <span className="text-md font-semibold tracking-widest  text-zinc-900">
                    3.84/4.0
                  </span>
                </div>
              </div>

              <div className="flex rounded-2xl border-[3px] border-zinc-900 bg-[#FFFFF0] shadow-[2px_3px_0px_#18181b] p-3 px-5 gap-5">
                <div>
                  <i className="ri-book-open-line text-2xl p-1 rounded-md border-2 border-zinc-900 text-zinc-900"></i>
                </div>
                <div className="grid grid-cols">
                  <span className="font-mono text-sm font-semibold tracking-widest  text-zinc-500">
                      CREDITS
                  </span>
                  <span className="text-md font-semibold tracking-widest  text-zinc-900">
                    154
                  </span>
                </div>
              </div>

              <div className="flex rounded-2xl border-[3px] border-zinc-900 bg-[#FFFFF0] shadow-[2px_3px_0px_#18181b] p-3 px-5 gap-5">
                <div>
                  <i className="ri-medal-fill text-2xl p-1 rounded-md border-2 border-zinc-900 text-zinc-900"></i>
                </div>
                <div className="grid grid-cols">
                  <span className="font-mono text-sm font-semibold tracking-widest  text-zinc-500">
                    HONORS
                  </span>
                  <span className="text-md font-semibold tracking-widest  text-zinc-900">
                    Cum Laude
                  </span>
                </div>
              </div>
            </div>

            <hr className="border-t border-gray-400 my-6" />

            <div className="flex justify-between">
              <div className="grid grid-cols">
                <span className="font-mono text-sm font-semibold tracking-widest  text-zinc-500">
                    BIRTH
                </span>
                <span className="text-sm font-semibold tracking-widest  text-zinc-900">
                  Palembang, 11 September 2004
                </span>
              </div>

              <div className="grid grid-cols">
                <span className="font-mono text-sm font-semibold tracking-widest text-zinc-500">
                  CURRENT LOCATION
                </span>
                <span className="text-sm font-semibold tracking-widest  text-zinc-900">
                  Tangerang Selatan
                </span>
              </div>

              <div className="grid grid-cols">
                <span className="font-mono text-sm font-semibold tracking-widest text-zinc-500">
                  LANGUAGES
                </span>
                <span className="text-sm font-semibold tracking-widest  text-zinc-900">
                  Indonesia, English
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-rows-2 bg-[#FFE89A] rounded-r-2xl p-10 lg:p-12 gap-5">
            <div className="flex rounded-2xl border-[3px] border-zinc-900 matcha-gradient shadow-[2px_3px_0px_#18181b] p-3 px-5 gap-5">
              <div>
                <i className="ri-briefcase-4-fill text-2xl p-1 rounded-md border-2 border-zinc-900 text-zinc-900"></i>
              </div>
              <div className="grid grid-cols-1 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-sm font-semibold tracking-widest text-zinc-500 uppercase">
                    experience
                  </span>
                  <a href="#experience" className="text-xs font-semibold text-zinc-500 hover:underline">
                    View detail ↗
                  </a>
                </div>
                <span className="text-sm font-semibold tracking-widest text-zinc-900">
                  2 Internship
                </span>
              </div>
            </div>

            <div className="flex rounded-2xl border-[3px] border-zinc-900 matcha-gradient shadow-[2px_3px_0px_#18181b] p-3 px-5 gap-5">
              <div>
                <i className="ri-article-fill text-2xl p-1 rounded-md border-2 border-zinc-900 text-zinc-900"></i>
              </div>
              <div className="grid grid-cols-1 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-sm font-semibold tracking-widest text-zinc-500 uppercase">
                    publication
                  </span>
                  <a href="#publication" className="text-xs font-semibold text-zinc-500 hover:underline">
                    View detail ↗
                  </a>
                </div>
                <span className="text-sm font-semibold tracking-widest text-zinc-900">
                  1 publication
                </span>
              </div>
            </div>

            <div className="flex rounded-2xl border-[3px] border-zinc-900 matcha-gradient shadow-[2px_3px_0px_#18181b] p-3 px-5 gap-5">
              <div>
                <i className="ri-apps-2-fill text-2xl p-1 rounded-md border-2 border-zinc-900 text-zinc-900"></i>
              </div>
              <div className="grid grid-cols-1 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-sm font-semibold tracking-widest text-zinc-500 uppercase">
                    Total projects
                  </span>
                  <a href="#projects" className="text-xs font-semibold text-zinc-500 hover:underline">
                    View detail ↗
                  </a>
                </div>
                <span className="text-sm font-semibold tracking-widest text-zinc-900">
                  6 Projects
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="experience mt-15" id="experience">
        <div className="grid grid-cols-[1fr_6fr] mb-6 sm:gap-6">
          <h1 className="text-4xl md:text-4xl font-extrabold text-zinc-900">
            Experience
          </h1>
          <hr className="border-t border-zinc-900 my-6" />
        </div>
        
         <div className="inline-flex items-center gap-2 rounded-xl border-3 border-zinc-900 bg-zinc-100 px-4 py-2 text-sm font-bold text-zinc-900">
            <i className="ri-briefcase-fill text-2xl"></i> 
            <span className="hidden sm:inline">WORK EXPERIENCE</span>         
         </div>

          <div>
            <div className="mt-10 ml-5">
              <div className="flex bg-pink-300 w-5 h-5 border-2 border-zinc-900 rounded-full">
                
              </div>

              <div>

              </div>
            </div>
          </div>
      </div>

      
    </>
  );
}

export default App;