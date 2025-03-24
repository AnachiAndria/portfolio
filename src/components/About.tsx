
const About = () =>{
    return (
        <div className="w-full">
            <section id="about" className="py-16 ">
                <div className="container mx-auto px-6 lg:px-20">

                    {/* Section Title */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">About Me</h2>
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
                            <h3 className="text-xl mt-2">- It's my pleasure to introduce myself.</h3>
                            <p className="mt-4">
                                Hello, I'm <strong className="text-red-500">Achina Mamy ANDRIANANTENAINA from Madagascar</strong>. I'm a front-end
                                developer & UI/UX designer with 5+ years of experience. With more than 5 years of experience in web design
                                and front-end development, I have a deep understanding of the technologies and the processes required for
                                realizing a successful web project from A to Z.
                            </p>
                            
                            <h3 className="text-xl font-semibold mt-6">What are my values?</h3>
                            <p className="mt-2">
                                When developing a web project, I focus on understanding the business goals and delivering a final product
                                that will really work for the client.
                            </p>

                            {/* Contact Info */}
                            <p className="mt-6">
                            <b>Phone:</b> +105 773 321 7771
                            <br />
                            <b>E-mail:</b> demo@maslin.com
                            <br />
                            <b>Skype:</b> jackmaslin
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
            

            {/* Skills Section with SVG */}
            <section className="pt-16 w-full bg-[#181818] flex flex-col md:flex-row">
  {/* First part - SVG */}
  <div className="w-full md:w-3/10 p-4 flex justify-center items-center">
    <img 
      src="/public/img/coding-bro.svg" 
      alt="My SVG" 
      className="w-70 h-auto"
    />
  </div>

    <div className="w-full md:w-1/10 p-0 flex justify-center items-center">
        <h2 className="left-0 tracking-widest mb-1 rotate-270 origin-top  whitespace-nowrap text-4xl font-bold text-gray-900 dark:text-white">My Skills</h2>
    </div>

  {/* Second part - Skills List */}
  <div className="w-full md:w-6/10 p-4">
    <ul className="max-w-md space-y-1  list-inside ">
        <li className="flex items-center">
            <svg className="w-3.5 h-3.5 me-2 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
                Languages
                
        </li>
        <li className="flex items-center">
            <svg className="w-3.5 h-3.5 me-2 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
                Stacks & libraries
        </li>
        <li className="flex items-center">
            <svg className="w-3.5 h-3.5 me-2 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
                Databases
        </li>
        <li className="flex items-center">
            <svg className="w-3.5 h-3.5 me-2 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
                Tools
        </li>
        <li className="flex items-center">
            <svg className="w-3.5 h-3.5 me-2 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
                Other
        </li>
    </ul>
  </div>
</section>


        </div>
    );
};

export {About};