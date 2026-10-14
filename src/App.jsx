import Image from "./data";
import ScrollReveal from "./components/ScrollReveal";
import { listExperience, listPublication, listProject, listSkills} from "./data";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import { createPortal } from "react-dom";

function App() {
  const [selectedPhotos, setSelectedPhotos] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const [projectPhotoIndex, setProjectPhotoIndex] = useState({});
  const [selectedProjectPhotos, setSelectedProjectPhotos] = useState([]);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

  return (
    <>
    <ScrollReveal>
      <div className="home animate__animated animate__fadeInUp" id="home">
        <div className="grid grid-cols-1 lg:grid-cols-[2.3fr_1fr] gap-7 md:gap-10 mt-7 lg:mt-20">

          <div className="relative block h-50 md:h-75 lg:hidden">
            <div className="absolute inset-x-0 bottom-0 h-[85%] matcha-gradient rounded-2xl border-[3px] border-zinc-900 shadow-[4px_5px_0px_#18181b]"></div>
              <a
                href="#start"
                className="absolute left-7 md:left-12 top-1/2 z-20 flex -translate-y-1/2 flex-col items-start gap-2"
              >
                <span className="text-2xl md:text-4xl font-extrabold leading-tight text-[#285943]">
                  Get to <br />
                  Know Me
                </span>

                <span className="flex items-center gap-1 rounded-xl border-2 border-zinc-900 bg-[#FFE89A] px-3 py-1 text-sm md:text-lg font-bold text-zinc-900 shadow-[2px_2px_0px_#18181b] transition-transform hover:-translate-y-1 hover:bg-[#FACC15] bounce-interval">
                  Explore More
                  <i className="ri-arrow-down-line"></i>
                </span>
              </a>

              <img
                src={Image.Foto}
                alt="Profile"
                className="pointer-events-none absolute bottom-0 right-0 z-10 h-[110%] w-auto max-w-none object-contain object-bottom"
              />
          </div>

          <div className="rounded-2xl border-[3px] border-zinc-900 bg-white p-7 md:p-10 shadow-[4px_5px_0px_#18181b]" id="start">

            <span className="font-mono text-sm md:text-base font-semibold tracking-widest uppercase text-zinc-500">
              Tangerang Selatan, Banten
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-zinc-900 md:mb-2 mt-3 md:mt-4">
              Nisaul Husna
            </h1>

            <div>
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  2000,
                  "AI Engineer",
                  2000,
                  "Software Engineer",
                  2000,
                ]}
                wrapper="Span"
                speed={50}
                deletionSpeed={65}
                cursor={true}
                repeat={Infinity}
                className="text-2xl md:text-3xl font-bold text-[#4CAF50]"
              />
            </div>

            <p className=" text-zinc-600 text-sm md:text-base mt-4">
              Informatics graduate passionate about web development and building innovative digital solutions. Experienced in software development, API integration, and database management.
            </p>

            
            <hr className="border-t border-gray-400 my-5 md:my-6" />
  
            <div className="md:flex items-center gap-2 mt-5 justify-between">
              <div className="grid grid-cols-2 items-center gap-2 md:gap-3">
                <a
                    href="/cv.pdf"
                    download
                    aria-label="CV"
                    className="
                    flex h-11 w-full gap-2 md:px-2 lg:gap-4 items-center justify-center font-bold
                    rounded-xl border-2 border-zinc-900 text-zinc-900
                    bg-pink-200 text-2xl
                    shadow-[3px_3px_0px_#18181b]
                    transition-transform hover:-translate-y-1 hover:bg-[#F472B6]
                    "
                >
                    <span className="text-sm md:text-base">Download CV</span>
                    <i className="ri-download-line text-sm md:text-lg "></i>
                </a>

                <a
                    href="#contact"
                    aria-label="CV"
                    className="
                    flex h-11 w-full gap-2 lg:gap-4 items-center justify-center font-bold
                    rounded-xl border-2 border-zinc-900 text-zinc-900
                    bg-yellow-100 text-2xl
                    shadow-[3px_3px_0px_#18181b]
                    transition-transform hover:-translate-y-1 hover:bg-[#FACC15]
                    "
                >
                    <span className="text-sm md:text-base">Contact Me</span>
                    <i className="ri-arrow-right-up-line text-sm md:text-lg"></i>
                </a>
              </div>

              <div className="flex flex-wrap items-center mt-5 md:mt-0 gap-2 md:gap-3">
                  <a
                    href="https://wa.me/6281315225350"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="What's App"
                    className="
                    flex h-11 w-11 items-center justify-center
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
                    flex h-11 w-11 items-center justify-center
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
                    flex h-11 w-11 items-center justify-center
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

          </div>

          <div className="hidden lg:block relative h-105">

            <div className="absolute inset-x-0 bottom-0 h-[85%] matcha-gradient rounded-2xl border-[3px] border-zinc-900 shadow-[4px_5px_0px_#18181b]"></div>
            <img
              src={Image.Foto}
              alt="Profile"
              className="absolute -bottom-1.25 -left-8 z-10 h-[110%] w-auto max-w-none object-contain object-bottom"
            />
          </div>
        </div>

        <a className="hidden lg:flex mt-15 justify-center items-center gap-5 cursor-pointer bounce-interval" href="#about">
          <span className="font-mono text-sm font-semibold tracking-widest uppercase text-zinc-600 border-b border-zinc-400 hover:text-zinc-900">
            Scroll to explore
          </span>
          <i className="ri-arrow-down-long-line text-base text-zinc-600 hover:text-zinc-900"></i>
        </a>
      </div>
      </ScrollReveal>

      <ScrollReveal>
      {/* About */}
      <div className="about mt-15" id="about">
        <div className="flex md:mb-6 gap-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-zinc-900">
            About
          </h1>
          <hr className="flex-1 border-t border-zinc-900 my-6" />
        </div>

        <div className="rounded-2xl border-[3px] border-zinc-900 bg-white shadow-[4px_5px_0px_#18181b] grid lg:grid-cols-[2fr_1fr]">
          <div className="p-7 md:p-10">
            <div className="flow-root">
              <a
                href="https://pddikti.kemdiktisaintek.go.id/detail-mahasiswa/CCcDJC2DndWKrMZhSJwGZeuERJxrQLdQxyIzWmXFs3oI-pAROHeIlLfGT_kOtvqF5xcVWA=="
                target="_blank"
                rel="noopener noreferrer"
                className="
                    float-right flex h-11 w-11 md:w-auto md:p-3 gap-2 items-center justify-center
                    rounded-xl border-2 border-zinc-900
                    bg-zinc-100 text-2xl text-zinc-900 font-semibold
                    shadow-[3px_3px_0px_#18181b]
                    transition-transform hover:-translate-y-1 hover:bg-[#E4E4E7]
                    "
              >
                <span className="hidden md:inline text-sm font-bold">PDDIKTI</span>
                <i className="ri-arrow-right-up-line"></i>
              </a>

              <h1 className="text-xl md:text-2xl font-extrabold text-zinc-900">
                Bachelor's Degree in Computer Science
              </h1>

              <p className="mb-1 text-zinc-600 md:text-base">
                Universitas Pembangunan Nasional Veteran Jakarta.
              </p>

              <span className="font-mono text-sm font-semibold tracking-widest text-zinc-500 uppercase">
                August 2022 - September 2026
              </span>

            </div>

            <div className="flex flex-wrap gap-3 lg:gap-5 w-full my-6">
              <div className="flex flex-1 items-center rounded-2xl border-[3px] border-zinc-900 bg-[#FFFFF0] p-3 lg:px-5 gap-3 lg:gap-5">
                <div>
                  <i className="ri-graduation-cap-fill text-2xl rounded-md border-2 border-zinc-900 text-zinc-900 p-1"></i>
                </div>
                <div className="grid grid-cols">
                  <span className="font-mono text-sm font-semibold tracking-widest  text-zinc-500">
                    GPA
                  </span>
                  <span className="text-sm md:text-base font-semibold tracking-widest  text-zinc-900">
                    3.84/4.0
                  </span>
                </div>
              </div>

              <div className="flex flex-1 items-center rounded-2xl border-[3px] border-zinc-900 bg-[#FFFFF0] p-3 lg:px-5 gap-3 lg:gap-5">
                <div>
                  <i className="ri-book-open-line text-2xl p-1 rounded-md border-2 border-zinc-900 text-zinc-900"></i>
                </div>
                <div className="grid grid-cols">
                  <span className="font-mono text-sm font-semibold tracking-widest  text-zinc-500">
                      CREDITS
                  </span>
                  <span className="text-sm md:text-base font-semibold tracking-widest  text-zinc-900">
                    154
                  </span>
                </div>
              </div>

              <div className="flex flex-1 items-center rounded-2xl border-[3px] border-zinc-900 bg-[#FFFFF0] p-3 lg:px-5 gap-3 lg:gap-5">
                <div>
                  <i className="ri-medal-fill text-2xl p-1 rounded-md border-2 border-zinc-900 text-zinc-900"></i>
                </div>
                <div className="grid grid-cols">
                  <span className="font-mono text-sm font-semibold tracking-widest  text-zinc-500">
                    HONORS
                  </span>
                  <span className="text-sm md:text-base font-semibold tracking-widest  text-zinc-900">
                    Cum Laude
                  </span>
                </div>
              </div>
            </div>

            <hr className="border-t border-gray-400 my-6" />

            <div className="flex flex-wrap gap-5 justify-between">
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

          <div className="grid md:grid-cols-3 lg:grid-cols-1 lg:grid-rows-3 bg-[#FFE89A] rounded-b-2xl  lg:rounded-r-2xl lg:rounded-l-none p-7 lg:p-10 gap-3 lg:gap-5">
            <div className="flex rounded-2xl border-[3px] border-zinc-900 matcha-gradient p-3 lg:px-5 gap-3 lg:gap-5">
              <div>
                <i className="ri-briefcase-4-fill text-2xl p-1 rounded-md border-2 border-zinc-900 text-zinc-900"></i>
              </div>
              <div className="grid grid-cols-1 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-sm font-semibold tracking-widest text-zinc-500">
                    EXPERIENCE
                  </span>
                  <a href="#experience" className="text-sm font-semibold text-zinc-500 underline hover:text-blue-400">
                    <span className="hidden lg:inline">View detail</span>
                    <i className="ri-arrow-right-up-line text-base"></i>
                  </a>
                </div>
                <span className="text-sm font-semibold tracking-widest text-zinc-900">
                  2 Internship
                </span>
              </div>
            </div>

            <div className="flex rounded-2xl border-[3px] border-zinc-900 matcha-gradient p-3 lg:px-5 gap-3 lg:gap-5">
              <div>
                <i className="ri-article-fill text-2xl p-1 rounded-md border-2 border-zinc-900 text-zinc-900"></i>
              </div>
              <div className="grid grid-cols-1 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-sm font-semibold tracking-widest text-zinc-500">
                    PUBLICATIONS
                  </span>
                  <a href="#publication" className="text-sm font-semibold text-zinc-500 underline hover:text-blue-400">
                    <span className="hidden lg:inline">View detail</span>
                    <i className="ri-arrow-right-up-line text-base"></i>
                  </a>
                </div>
                <span className="text-sm font-semibold tracking-widest text-zinc-900">
                  1 publication
                </span>
              </div>
            </div>

            <div className="flex rounded-2xl border-[3px] border-zinc-900 matcha-gradient p-3 lg:px-5 gap-3 lg:gap-5">
              <div>
                <i className="ri-apps-2-fill text-2xl p-1 rounded-md border-2 border-zinc-900 text-zinc-900"></i>
              </div>
              <div className="grid grid-cols-1 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-sm font-semibold tracking-widest text-zinc-500">
                    PROJECTS
                  </span>
                  <a href="#projects" className="text-sm font-semibold text-zinc-500 underline hover:text-blue-400">
                    <span className="hidden lg:inline">View detail</span>
                    <i className="ri-arrow-right-up-line text-base"></i>
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
      </ScrollReveal>

      <ScrollReveal>
      <div className="experience mt-15" id="experience">
        <div className="flex md:mb-6 gap-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-zinc-900">
            Experience
          </h1>
          <hr className="flex-1 border-t border-zinc-900 my-6" />
        </div>
        
         <div className="inline-flex items-center gap-2 rounded-xl border-3 border-zinc-900 matcha-gradient px-4 py-2 text-sm font-bold text-zinc-900 shadow-[2px_3px_0px_#18181b]">
            <i className="ri-briefcase-fill text-2xl"></i> WORK EXPERIENCE       
         </div>

        <div className="relative pt-5">
          {/* GARIS TIMELINE */}
          <div className="absolute left-[20px] md:left-[31px] top-0 bottom-0 w-[2px] bg-zinc-900"></div>

          {listExperience.map((experience, index) => (
            <div
              key={experience.id}
              className={`relative flex ml-2 md:ml-5 gap-3 md:gap-5 lg:gap-10 ${
                index !== listExperience.length - 1 ? "mb-7 md:mb-10" : ""
              }`}
            >

              {/* BULLET */}
              <div className="relative z-10 flex w-6 shrink-0 items-center justify-center">

                {/* TUTUP GARIS SETELAH TITIK TERAKHIR */}
                {index === listExperience.length - 1 && (
                  <div className="absolute top-1/2 bottom-0 w-[4px] bg-[#FFF6DC]"></div>
                )}

                {/* TITIK */}
                <div
                  className={`relative z-10 h-6 w-6 rounded-full border-2 border-zinc-900 ${experience.color}`}
                ></div>

              </div>

              {/* CARD */}
              <div className="grid min-w-0 flex-1 rounded-2xl border-[3px] border-zinc-900 bg-white p-5 shadow-[4px_5px_0px_#18181b] lg:grid-cols-[1fr_1fr_1fr] gap-7">

                {/* COMPANY INFO */}
                <div className="border-b-2 lg:border-b-0 lg:border-r-2 border-gray-300 pb-5">
                  <div className="flex flex-col h-full">

                    <span className="font-mono text-sm font-semibold tracking-widest text-zinc-500">
                      {experience.date}
                    </span>

                    <span className="text-base font-bold tracking-widest text-zinc-900 mt-3">
                      {experience.company}
                    </span>

                    <span className="text-sm tracking-widest text-zinc-900">
                      {experience.position}
                    </span>

                    {/* TAGS */}
                    <div className="flex flex-wrap gap-2 mt-5 lg:mt-auto">
                      {experience.tags.map((tag) => (
                        <div
                          key={tag}
                          className={`inline-flex items-center rounded-lg border border-zinc-900 ${experience.color} px-3 py-1 text-sm font-semibold text-zinc-900`}
                        >
                          <span>{tag}</span>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>

                {/* DESCRIPTION */}
                <div className="flex items-center">
                  <ul className="list-disc pl-5 space-y-2 text-sm text-zinc-900 mx-3">
                    {experience.description.map((item, index) => (
                      <li key={index}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* PHOTOS */}
                <div className="grid grid-cols-3 gap-2">

                  {/* FOTO UTAMA */}
                  <img
                    src={experience.photos[0]}
                    alt={`${experience.company} 1`}
                    onClick={() => {
                      setSelectedPhotos(experience.photos);
                      setSelectedIndex(0);
                    }}
                    className="col-span-3 w-full h-32 object-cover rounded-xl border-2 border-zinc-900 cursor-pointer hover:scale-[1.02] transition"
                  />

                  {/* 3 FOTO BAWAH */}
                  {experience.photos.slice(1).map((photo, index) => (
                    <img
                      key={index}
                      src={photo}
                      alt={`${experience.company} ${index + 2}`}
                      onClick={() => {
                        setSelectedPhotos(experience.photos);
                        setSelectedIndex(index + 1);
                      }}
                      className="w-full h-20 object-cover rounded-lg border-2 border-zinc-900 cursor-pointer hover:scale-105 transition"
                    />
                  ))}

                </div>

              </div>
            </div>
          ))}
          {selectedIndex !== null &&
            createPortal(
              <div
                className="fixed inset-0 z-[9999] flex h-dvh w-screen items-center justify-center bg-black/90 p-3 md:p-5"
                onClick={() => setSelectedIndex(null)}
              >
                {/* CLOSE */}
                <button
                  onClick={() => setSelectedIndex(null)}
                  className="absolute right-5 top-5 z-20 text-4xl text-white cursor-pointer"
                >
                  ×
                </button>

                {/* PREVIOUS */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIndex((prev) =>
                      prev === 0 ? selectedPhotos.length - 1 : prev - 1
                    );
                  }}
                  className="absolute left-2 md:left-10 z-20 text-5xl text-white cursor-pointer"
                >
                  ‹
                </button>

                {/* IMAGE */}
                <img
                  src={selectedPhotos[selectedIndex]}
                  alt="Experience Preview"
                  onClick={(e) => e.stopPropagation()}
                  className="max-h-[85dvh] max-w-[90vw] object-contain rounded-lg"
                />

                {/* NEXT */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIndex((prev) =>
                      prev === selectedPhotos.length - 1 ? 0 : prev + 1
                    );
                  }}
                  className="absolute right-2 md:right-10 z-20 text-5xl text-white cursor-pointer"
                >
                  ›
                </button>
              </div>,
              document.body
            )}
        </div>

        <div className="inline-flex items-center gap-2 rounded-xl border-3 border-zinc-900 matcha-gradient px-4 py-2 text-sm font-bold text-zinc-900 shadow-[2px_3px_0px_#18181b] mt-10" id="publication">
            <i className="ri-article-fill text-2xl"></i>PUBLICATIONS     
        </div>

        <div className="relative">

          {/* GARIS TIMELINE */}
          <div className="absolute left-[20px] md:left-[31px] top-0 bottom-0 w-[2px] bg-zinc-900"></div>

          {listPublication.map((publication, index) => (
            <div
              key={publication.id}
              className={`relative flex ml-2 md:ml-5 gap-3 md:gap-5 lg:gap-10 ${
                index !== listPublication.length - 1 ? "mb-7 md:mb-10" : ""
              }`}
            >

              {/* BULLET */}
              <div className="relative z-10 flex w-6 shrink-0 items-center justify-center">

                {/* TUTUP GARIS SETELAH TITIK TERAKHIR */}
                {index === listPublication.length - 1 && (
                  <div className="absolute top-1/2 bottom-0 w-[4px] bg-[#FFF6DC]"></div>
                )}

                {/* TITIK */}
                <div
                  className={`relative z-10 h-6 w-6 rounded-full border-2 border-zinc-900 ${publication.color}`}
                ></div>

              </div>

              {/* CARD */}
              <div className="relative grid min-w-0 flex-1 rounded-2xl border-[3px] border-zinc-900 bg-white p-5 shadow-[4px_5px_0px_#18181b] lg:grid-cols-[1.2fr_1.5fr] gap-5 lg:gap-0 mt-5">
                {/* BUTTON READ */}
                <a
                  href={publication.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    absolute right-5 top-5 z-20 flex h-11 w-11 md:w-auto md:px-3 gap-2 items-center justify-center
                    rounded-xl border-2 border-zinc-900
                    bg-zinc-100 text-zinc-900 font-semibold
                    shadow-[3px_3px_0px_#18181b]
                    transition-transform hover:-translate-y-1 hover:bg-[#E4E4E7]
                    "
                >
                  <span className="hidden md:inline text-sm font-bold">READ</span>
                  <i className="ri-arrow-right-up-line text-2xl"></i>
                </a>

                {/* PUBLICATION INFO */}
                <div className="min-w-0 border-b-2 lg:border-b-0 lg:border-r-2 border-gray-300 mr-3">
                  <div className="flex flex-col h-full pb-5 lg:pb-0">
                    <span className="font-mono text-sm font-semibold tracking-widest text-zinc-500">
                      {publication.date}
                    </span>

                    <span className="text-base font-bold tracking-widest text-zinc-900 mt-3">
                      {publication.journal}
                    </span>
                    <span className="text-base font-bold tracking-widest text-zinc-900">
                      {publication.journal1} - {publication.desc}
                    </span>

                    <span className="text-sm tracking-widest text-zinc-900 mb-5 mt-3">
                      "{publication.title}"
                    </span>

                    {/* TAGS */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {publication.tags.map((tag) => (
                        <div
                          key={tag}
                          className={`inline-flex items-center rounded-lg border border-zinc-900 ${publication.color} px-3 py-1 text-sm font-semibold text-zinc-900`}
                        >
                          <span>{tag}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* DESCRIPTION */}
                <div className="flex">
                  <div className="flex items-center">
                    <ul className="list-disc pl-5 space-y-2 text-sm text-zinc-900 mx-3">
                    {publication.description.map((item, index) => (
                      <li key={index}>
                        {item}
                      </li>
                    ))}
                  </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </ScrollReveal>

      <ScrollReveal>
      <div className="projects mt-15" id="projects">
        <div className="flex md:mb-6 gap-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-zinc-900">
            Projects
          </h1>
          <hr className="flex-1 border-t border-zinc-900 my-6" />
        </div>


        <div className="flex flex-wrap justify-center gap-5">

          {listProject.map((project) => {
            const currentIndex = projectPhotoIndex[project.id] || 0;

            const prevPhoto = () => {
              setProjectPhotoIndex((prev) => ({
                ...prev,
                [project.id]:
                  currentIndex === 0
                    ? project.photos.length - 1
                    : currentIndex - 1,
              }));
            };

            const nextPhoto = () => {
              setProjectPhotoIndex((prev) => ({
                ...prev,
                [project.id]:
                  currentIndex === project.photos.length - 1
                    ? 0
                    : currentIndex + 1,
              }));
            };

            return (
              <div key={project.id} className=" w-full md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] overflow-hidden rounded-2xl border-[3px]  border-zinc-900 bg-white shadow-[4px_5px_0px_#18181b] ">
                <div className="relative h-55 border-b-2 border-zinc-900 overflow-hidden group">

                  <img
                    src={project.photos[currentIndex]}
                    alt={`${project.title} ${currentIndex + 1}`}
                    onClick={() => {
                      setSelectedProjectPhotos(project.photos);
                      setSelectedProjectIndex(currentIndex);
                    }}
                    className=" w-full h-full object-cover cursor-pointer transition duration-300 group-hover:scale-[1.02] purple-yellow-gradient"
                  />

                  {project.photos.length > 1 && (
                    <button
                      onClick={prevPhoto}
                      className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border-2 border-zinc-900 bg-white opacity-0 transition group-hover:opacity-100 cursor-pointer
                      "
                    >
                      <i className="ri-arrow-left-s-line text-xl text-zinc-900"></i>
                    </button>
                  )}

                  {project.photos.length > 1 && (
                    <button
                      onClick={nextPhoto}
                      className=" absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border-2 border-zinc-900 bg-white opacity-0  transition  group-hover:opacity-100  cursor-pointer"
                    >
                      <i className="ri-arrow-right-s-line text-xl text-zinc-900"></i>
                    </button>
                  )}

                  <div className=" absolute bottom-3 right-3 rounded-lg bg-zinc-900 px-3 py-1 text-sm font-bold text-white">
                    {currentIndex + 1} / {project.photos.length}
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex justify-between">
                    {/* TYPE */}
                    <p className="font-mono text-sm font-semibold tracking-widest text-zinc-500 ">
                      {project.type}
                    </p>

                    <p className="font-mono text-sm font-semibold tracking-widest text-zinc-500 ">
                      {project.year}
                    </p>
                  </div>
                  

                  {/* TITLE */}
                  <h2 className="mt-3 text-base font-extrabold text-zinc-900">
                    {project.title}
                  </h2>


                  {/* DESCRIPTION */}
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                    {project.desc}
                  </p>

                  {/* VIEW PROJECT */}
                  {project.link && (
                    <div className="mt-2 flex justify-end">

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-[#A78BFA] underline hover:text-blue-400"
                      >
                        View code
                        <i className="ri-arrow-right-up-line"></i>
                      </a>

                    </div>
                  )}


                  {/* TAGS */}
                  <div className="mt-5 flex flex-wrap gap-2">

                    {project.tags.map((tag) => (
                      <span key={tag}
                        className="rounded-lg border border-zinc-900 bg-[#D9C5FF] px-3 py-1 text-sm font-semibold text-zinc-900"
                      >
                        {tag}
                      </span>
                    ))}

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedProjectIndex !== null &&
      createPortal(
        <div
          className="fixed inset-0 z-[9999] flex h-dvh w-screen items-center justify-center bg-black/90 p-3 md:p-5"
          onClick={() => setSelectedProjectIndex(null)}
        >
          {/* CLOSE */}
          <button
            onClick={() => setSelectedProjectIndex(null)}
            className="absolute right-5 top-5 z-20 text-4xl text-white cursor-pointer"
          >
            ×
          </button>

          {/* PREVIOUS */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedProjectIndex((prev) =>
                prev === 0
                  ? selectedProjectPhotos.length - 1
                  : prev - 1
              );
            }}
            className="absolute left-2 md:left-10 z-20 text-5xl text-white cursor-pointer"
          >
            ‹
          </button>

          {/* IMAGE */}
          <img
            src={selectedProjectPhotos[selectedProjectIndex]}
            alt="Project Preview"
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85dvh] max-w-[90vw] object-contain rounded-lg"
          />

          {/* NEXT */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedProjectIndex((prev) =>
                prev === selectedProjectPhotos.length - 1
                  ? 0
                  : prev + 1
              );
            }}
            className="absolute right-2 md:right-10 z-20 text-5xl text-white cursor-pointer"
          >
            ›
          </button>

          {/* COUNTER */}
          <div className="absolute bottom-5 rounded-lg bg-white px-4 py-2 text-sm font-bold text-zinc-900">
            {selectedProjectIndex + 1} / {selectedProjectPhotos.length}
          </div>
        </div>,
        document.body
      )}
      </ScrollReveal>

      <ScrollReveal>
      <div className="skills mt-15" id="skills">
        <div className="flex md:mb-6 gap-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-zinc-900">
            Skills
          </h1>
          <hr className="flex-1 border-t border-zinc-900 my-6" />
        </div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {listSkills.map((skill) => (
            <div
              key={skill.id}
              className="rounded-2xl border-2 border-zinc-900 p-5 shadow-[4px_4px_0px_#18181b] bg-zinc-100"
            >

              {/* CATEGORY */}
              <h1 className="text-center text-base font-semibold text-zinc-900 mb-6">
                {skill.category}
              </h1>

              {/* ICONS */}
              <div className="flex flex-wrap justify-center gap-3">

                {skill.items.map((item) => (
                  <div
                    key={item.name}
                    title={item.name}
                    className={`flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-900 ${skill.color} transition-all duration-200
                      hover:-translate-y-1 hover:shadow-[3px_3px_0px_#18181b]`}
                  >
                    <i className={`${item.icon} text-3xl`}></i>
                  </div>
                ))}

              </div>

              {/* SKILL NAMES */}
              <p className="mt-2 text-center text-sm leading-7 text-zinc-900">
                {skill.items.map((item) => item.name).join(" · ")}
              </p>

            </div>
          ))}

        </div>
      </div>
       </ScrollReveal>
    </>
  );
}

export default App;