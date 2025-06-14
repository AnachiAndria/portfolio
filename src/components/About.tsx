const About = () => {
  return (
    <div className="w-full">
      <section id="about" className="py-16 ">
        <div className="container mx-auto px-6 lg:px-20">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white">
              About Me
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Image Section */}
            <div className="lg:w-2/5 w-full">
              <img
                src="/public/img/about.jpg"
                alt="Profile"
                className="rounded-lg shadow-lg w-full"
              />
            </div>

            {/* Content Section */}
            <div className="lg:w-3/5 w-full text-gray-800 dark:text-gray-300">
              <h3 className="text-2xl font-semibold">
                Welcome to <span className="text-red-500">My Profile</span>
              </h3>
              <h3 className="text-xl mt-2">
                - It's my pleasure to introduce myself.
              </h3>
              <p className="mt-4">
                Hello, I'm{" "}
                <strong className="text-red-500">
                  Achina Mamy ANDRIANANTENAINA from Madagascar
                </strong>
                . I'm a versatile developer specializing in web, mobile, and
                desktop applications, with expertise in full-stack development
                and system & network administration. Passionate about technology
                and innovation, I thrive on solving complex problems and
                crafting high-performance, scalable solutions. Always eager to
                learn and explore new technologies, I ensure that every project
                I work on is optimized, efficient, and built for success from
                start to finish.
              </p>

              <h3 className="text-xl font-semibold mt-6">
                What are my values?
              </h3>
              <p className="mt-2">
                I transform business objectives into tangible solutions,
                ensuring every project I develop delivers real-world value that
                resonates with clients and exceeds their expectations.
              </p>

              {/* Contact Info */}
              <p className="mt-6">
                <b>Phone:</b> +261 34 16 484 18
                <br />
                <b>E-mail:</b> mamyachina@gmail.com
                <br />
                <b>Linkedin:</b> Mamy Achina ANDRIANANTENAINA
              </p>

              {/* Download CV Button */}
              <a
                href="#0"
                className="inline-block mt-6 px-6 py-3 text-white bg-red-500 border-1 border-red-500 hover:bg-transparent hover:border-1 hover:border-white rounded-full shadow-md transition duration-500"
              >
                Download my CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Experience */}
      <section className="py-10 w-full bg-[#181818]">

        {/* Skills */}
        <div className=" flex flex-col md:flex-row">
          {/* First part - SVG */}
          <div className="w-full md:w-3/10 p-4 flex justify-center items-center">
            <img
              src="/public/img/coding-bro.svg"
              alt="My SVG"
              className="w-70 h-auto"
            />
          </div>

          {/* Second part - Skills List */}
          <div className="w-full md:w-7/10  flex flex-col md:flex-col">
            <h2 className="tracking-widest mb-1 whitespace-nowrap text-5xl font-bold text-gray-900 dark:text-white">
              My Skills
            </h2>

            <div className="w-full flex flex-col md:flex-row">

              <div className="w-full md:w-5/10 flex py-2 m-2">
                <ul className="max-w-md space-y-4  list-inside w-full">
                  <div className="flex flex-col">
                    <div className="p-4">
                      <li className="flex items-center">
                        <svg
                          className="w-3.5 h-3.5 me-2 shrink-0"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <h3 className="text-2xl font-bold">Languages</h3>
                      </li>
                    </div>

                    <div className="px-4 pb-4 -mt-2">
                      <div className="flex flex-wrap gap-4">
                        <a className="border border-gray-300 rounded-full py-1 px-3 inline-block text-sm hover:border-red-500 transition-colors">
                          JavaScript
                        </a>
                        <a className="border border-gray-300 rounded-full py-1 px-3 inline-block text-sm hover:border-red-500 transition-colors">
                          Java
                        </a>
                        <a className="border border-gray-300 rounded-full py-1 px-3 inline-block text-sm hover:border-red-500 transition-colors">
                          TypeScript
                        </a>
                        <a className="border border-gray-300 rounded-full py-1 px-3 inline-block text-sm hover:border-red-500 transition-colors">
                          PHP
                        </a>
                        <a className="border border-gray-300 rounded-full py-1 px-3 inline-block text-sm hover:border-red-500 transition-colors">
                          Python
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="p-4">
                      <li className="flex items-center">
                        <svg
                          className="w-3.5 h-3.5 me-2 shrink-0"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <h3 className="text-2xl font-bold">Back-end</h3>
                      </li>
                    </div>

                    <div className="px-4 pb-4 -mt-2">
                      <div className="flex flex-wrap gap-4">
                        <a className="border border-gray-300 rounded-full py-1 px-3 inline-block text-sm hover:border-red-500 transition-colors">
                          Node
                        </a>
                        <a className="border border-gray-300 rounded-full py-1 px-3 inline-block text-sm hover:border-red-500 transition-colors">
                          Express
                        </a>
                        <a className="border border-gray-300 rounded-full py-1 px-3 inline-block text-sm hover:border-red-500 transition-colors">
                          CodeIgniter
                        </a>
                        <a className="border border-gray-300 rounded-full py-1 px-3 inline-block text-sm hover:border-red-500 transition-colors">
                          Hibernate
                        </a>
                        <a className="border border-gray-300 rounded-full py-1 px-3 inline-block text-sm hover:border-red-500 transition-colors">
                          JSP
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-rows-2 ">
                    <div className="row-start-1   p-4">
                      <li className="flex items-center">
                        <svg
                          className="w-3.5 h-3.5 me-2 shrink-0"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <h3 className="text-2xl bold">Databases</h3>
                      </li>
                    </div>

                    <div className="px-4 pb-4 -mt-2">
                      <div className="flex flex-wrap gap-4">
                        <a className="border border-gray-300 rounded-full py-1 px-3 inline-block text-sm hover:border-red-500 transition-colors">
                          MySQL
                        </a>
                        <a className="border border-gray-300 rounded-full py-1 px-3 inline-block text-sm hover:border-red-500 transition-colors">
                          PostgreSQL
                        </a>
                        <a className="border border-gray-300 rounded-full py-1 px-3 inline-block text-sm hover:border-red-500 transition-colors">
                          SQLite
                        </a>
                        <a className="border border-gray-300 rounded-full py-1 px-3 inline-block text-sm hover:border-red-500 transition-colors">
                          MongoDB
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-rows-2 ">
                    <div className="row-start-1 -mt-4  p-4">
                      <li className="flex items-center">
                        <svg
                          className="w-3.5 h-3.5 me-2 shrink-0"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <h3 className="text-2xl bold">Methodology</h3>
                      </li>
                    </div>

                    <div className="px-4 pb-4 -mt-2">
                      <div className="flex flex-wrap gap-4">
                        <a className="border border-gray-300 rounded-full py-1 px-3 inline-block text-sm hover:border-red-500 transition-colors">
                          Agile
                        </a>
                        <a className="border border-gray-300 rounded-full py-1 px-3 inline-block text-sm hover:border-red-500 transition-colors">
                          Merise
                        </a>
                        <a className="border border-gray-300 rounded-full py-1 px-3 inline-block text-sm hover:border-red-500 transition-colors">
                          2TUP
                        </a>
                      </div>
                    </div>
                  </div>
                </ul>
              </div>

              <div className="w-full md:w-5/10 flex py-2 m-2">
                <ul className="max-w-md space-y-4  list-inside w-full">
                  <div className="flex flex-col">
                    <div className="p-4">
                      <li className="flex items-center">
                        <svg
                          className="w-3.5 h-3.5 me-2 shrink-0"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <h3 className="text-2xl font-bold">Front-end</h3>
                      </li>
                    </div>

                    <div className="px-4 pb-4 -mt-2">
                      <div className="flex flex-wrap gap-4">
                        <a className="border border-gray-300 rounded-full py-1 px-3 inline-block text-sm hover:border-red-500 transition-colors">
                          Vue
                        </a>
                        <a className="border border-gray-300 rounded-full py-1 px-3 inline-block text-sm hover:border-red-500 transition-colors">
                          React
                        </a>
                        <a className="border border-gray-300 rounded-full py-1 px-3 inline-block text-sm hover:border-red-500 transition-colors">
                          Bootstrap
                        </a>
                        <a className="border border-gray-300 rounded-full py-1 px-3 inline-block text-sm hover:border-red-500 transition-colors">
                          Tailwind CSS
                        </a>
                        <a className="border border-gray-300 rounded-full py-1 px-3 inline-block text-sm hover:border-red-500 transition-colors">
                          JQuery
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="p-4">
                      <li className="flex items-center">
                        <svg
                          className="w-3.5 h-3.5 me-2 shrink-0"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <h3 className="text-2xl font-bold">Design et UX/UI</h3>
                      </li>
                    </div>

                    <div className="px-4 pb-4 -mt-2">
                      <div className="flex flex-wrap gap-4">
                        <a className="border border-gray-300 rounded-full py-1 px-3 inline-block text-sm hover:border-red-500 transition-colors">
                          Canva
                        </a>
                        <a className="border border-gray-300 rounded-full py-1 px-3 inline-block text-sm hover:border-red-500 transition-colors">
                          Figma
                        </a>
                        <a className="border border-gray-300 rounded-full py-1 px-3 inline-block text-sm hover:border-red-500 transition-colors">
                          Adobe XD
                        </a>
                        <a className="border border-gray-300 rounded-full py-1 px-3 inline-block text-sm hover:border-red-500 transition-colors">
                          Adobe Photoshop
                        </a>
                        <a className=" py-1 px-3 inline-block text-sm ">
                          
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="p-4">
                      <li className="flex items-center">
                        <svg
                          className="w-3.5 h-3.5 me-2 shrink-0"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <h3 className="text-2xl font-bold">Tools</h3>
                      </li>
                    </div>

                    <div className="px-4 pb-4 -mt-2">
                      <div className="flex flex-wrap gap-4">
                        <a className="border border-gray-300 rounded-full py-1 px-3 inline-block text-sm hover:border-red-500 transition-colors">
                          Trello
                        </a>
                        <a className="border border-gray-300 rounded-full py-1 px-3 inline-block text-sm hover:border-red-500 transition-colors">
                          Git
                        </a>
                        <a className="border border-gray-300 rounded-full py-1 px-3 inline-block text-sm hover:border-red-500 transition-colors">
                          Jira
                        </a>
                      </div>
                    </div>
                  </div>
                </ul>
              </div>

            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="pt-15 pl-10">
            <h2 className="tracking-widest mb-1 whitespace-nowrap text-5xl font-bold text-gray-900 dark:text-white">
              Experience
            </h2>
          {/* Second part - Skills List */}
          <div className="w-full md:w-10/10  flex flex-col md:flex-row">
            <div className="w-full md:w-5/10 flex py-2 m-2">{/* Left */}
              <ul className="max-w-md space-y-4  list-inside w-full">
                <div className="flex flex-col">
                  <div className="p-4">
                    <li className="flex items-center mb-4">
<svg
  className="w-5 h-5 me-2 shrink-0 text-white"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 64 64"
  fill="currentColor"
>
  <path d="M44 4H20a2 2 0 0 0 0 4h2v16.1l-13 28A6 6 0 0 0 14 60h36a6 6 0 0 0 5-8.9l-13-28V8h2a2 2 0 0 0 0-4Zm-6 24.1 13 28a2 2 0 0 1-1.8 2.9H14a2 2 0 0 1-1.8-2.9l13-28V8h12Z" />
  <circle cx="32" cy="36" r="2.5" fill="white" />
  <circle cx="32" cy="44" r="2" fill="white" />
  <circle cx="32" cy="52" r="1.5" fill="white" />
</svg>

  <span>Stage en laboratoire - Université de Fianarantsoa</span>
</li>

                  </div>

                  <div className="px-4 pb-4 -mt-2">
                    <div className="flex flex-wrap gap-4">
                      <a className="border border-gray-300 rounded-full py-1 px-3 inline-block text-sm hover:border-red-500 transition-colors">
                        JavaScript
                      </a>
                      <a className="border border-gray-300 rounded-full py-1 px-3 inline-block text-sm hover:border-red-500 transition-colors">
                        Java
                      </a>
                      <a className="border border-gray-300 rounded-full py-1 px-3 inline-block text-sm hover:border-red-500 transition-colors">
                        TypeScript
                      </a>
                      <a className="border border-gray-300 rounded-full py-1 px-3 inline-block text-sm hover:border-red-500 transition-colors">
                        PHP
                      </a>
                      <a className="border border-gray-300 rounded-full py-1 px-3 inline-block text-sm hover:border-red-500 transition-colors">
                        Python
                      </a>
                    </div>
                  </div>
                </div>
              </ul>
            </div>

            <div className="w-full md:w-5/10 flex py-2 m-2">{/* Right */}
              <ul className="max-w-md space-y-4  list-inside w-full">
                <div className="flex flex-col">
                  <div className="p-4">
                    <li className="flex items-center">
                      <svg
  className="w-5 h-5 me-2 shrink-0 text-white"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 64 64"
  fill="currentColor"
>
  <path d="M44 4H20a2 2 0 0 0 0 4h2v16.1l-13 28A6 6 0 0 0 14 60h36a6 6 0 0 0 5-8.9l-13-28V8h2a2 2 0 0 0 0-4Zm-6 24.1 13 28a2 2 0 0 1-1.8 2.9H14a2 2 0 0 1-1.8-2.9l13-28V8h12Z" />
  <circle cx="32" cy="36" r="2.5" fill="white" />
  <circle cx="32" cy="44" r="2" fill="white" />
  <circle cx="32" cy="52" r="1.5" fill="white" />
</svg>

                      <h3 className="text-2xl font-bold">Front-end</h3>
                    </li>
                  </div>

                  <div className="px-4 pb-4 -mt-2">
                    <div className="flex flex-wrap gap-4">
                      <a className="border border-gray-300 rounded-full py-1 px-3 inline-block text-sm hover:border-red-500 transition-colors">
                        Vue
                      </a>
                      <a className="border border-gray-300 rounded-full py-1 px-3 inline-block text-sm hover:border-red-500 transition-colors">
                        React
                      </a>
                      <a className="border border-gray-300 rounded-full py-1 px-3 inline-block text-sm hover:border-red-500 transition-colors">
                        Bootstrap
                      </a>
                      <a className="border border-gray-300 rounded-full py-1 px-3 inline-block text-sm hover:border-red-500 transition-colors">
                        Tailwind CSS
                      </a>
                      <a className="border border-gray-300 rounded-full py-1 px-3 inline-block text-sm hover:border-red-500 transition-colors">
                        JQuery
                      </a>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export { About };
