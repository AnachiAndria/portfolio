import { useState, useEffect } from "react";

const socialLinks = [
    { icon: "fab fa-facebook-f", url: "https://facebook.com" },
    { icon: "fab fa-linkedin", url: "https://www.linkedin.com/in/achina-andrianantenaina" },
    { icon: "fab fa-x-twitter", url: "https://x.com/AchinaMamy" },
    // { icon: "fab fa-codeur", url: "https://www.behance.net" },
    // { icon: "fab fa-dribbble", url: "https://dribbble.com" }
];

const rotatingTexts = [" exemple1", " exemple2", " exemple3"];

const Home = () => {
    const [text, setText] = useState(""); // Holds the displayed text
    const [currentTextIndex, setCurrentTextIndex] = useState(0); // Which word we are on
    const [isDeleting, setIsDeleting] = useState(false); // Track if we are deleting
    const typingSpeed = 100; // Speed of typing
    const deletingSpeed = 50; // Speed of deleting
    const pauseTime = 2000; // Pause before deleting

    useEffect(() => {
        const fullText = rotatingTexts[currentTextIndex];

        if (isDeleting) {
            // If deleting, remove one letter
            if (text.length > 0) {
                setTimeout(() => setText(text.slice(0, -1)), deletingSpeed);
            } else {
                // When done deleting, move to the next word
                setIsDeleting(false);
                setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
            }
        } else {
            // If typing, add one letter
            if (text.length < fullText.length) {
                setTimeout(() => setText(fullText.slice(0, text.length + 1)), typingSpeed);
            } else {
                // Pause before deleting
                setTimeout(() => setIsDeleting(true), pauseTime);
            }
        }
    }, [text, isDeleting, currentTextIndex]);

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
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col  z-50 size-30">
                <p className="text-white tracking-widest mb-1 rotate-90 origin-bottom  whitespace-nowrap social">
                <a >Social Links -----</a>
                {socialLinks.map((link, index) => (
                    <a 
                        key={index} 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="pl-3"
                    >
                        <i className={link.icon}></i>
                    </a>
                ))}
                </p>
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
                    We are Professional <span className="text-red-500 font-bold">{text}|</span>
                </p>

                <button className="mt-6 px-6 py-3 bg-red-500 text-white border-1 border-red-500 hover:bg-transparent hover:border-1 hover:border-white rounded-full text-lg transition duration-500">
                    Get In Touch
                </button>
            </div>
        </section>
    );
};

export { Home };
