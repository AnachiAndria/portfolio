
const About = () =>{
    return (
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
                            Welcome to <span className="text-blue-500">My Profile</span>
                        </h3>
                        <h3 className="text-xl mt-2">- It's my pleasure to introduce myself.</h3>
                        <p className="mt-4">
                            Hello, I'm <strong className="text-blue-500">Achina Mamy ANDRIANANTENAINA from Madagascar</strong>. I'm a front-end
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
                        className="inline-block mt-6 px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md transition duration-300"
                        >
                            Download my CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export {About};