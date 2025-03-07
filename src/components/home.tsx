import { useState, useEffect } from "react";

const socialLinks = [
    { icon: "fab fa-facebook-f", url: "https://facebook.com" },
    { icon: "fab fa-twitter", url: "https://twitter.com" },
    { icon: "fab fa-instagram", url: "https://instagram.com" },
    { icon: "fab fa-behance", url: "https://www.behance.net" },
    { icon: "fab fa-dribbble", url: "https://dribbble.com" }
];

const rotatingTexts = ["exemple1", "exemple2", "exemple3"];

const Home = () => {
    const [currentText, setCurrentText] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
        }, 2000); // Change every 2 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full h-165 flex items-center justify-center">
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('/public/img/home.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundBlendMode: "darken",
                    filter: "brightness(45%)"
                }}
            ></div>

            {/* Dark Overlay to improve contrast */}
            <div className="absolute inset-0 bg-opacity-50"></div>

            {/* Social Links */}
            <div className="absolute right-10 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-10">
                {socialLinks.map((link, index) => (
                    <a 
                        key={index} 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white text-xl hover:text-gray-300 transition"
                    >
                        <i className={link.icon}></i>
                    </a>
                ))}
            </div>

            {/* Content */}
            <div className="text-center px-6 z-10 text-white">
                <h1 className="font-[Montserrat] text-6xl font-bold">ACHINA ANDRIANANTENAINA</h1>
                <p className="text-lg mt-4">
                    I'm a web designer and front-end developer with a passion for learning.
                    <br />
                    I help your business and individuals by developing websites. I build websites 
                    to make you successful in the long term.
                    <br />
                    We are Professional <span className="text-red-500 font-bold">{rotatingTexts[currentText]}</span>
                </p>

                <button className="mt-6 px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-full text-lg">
                    Get In Touch
                </button>
            </div>
        </section>
    );
};

export { Home };
