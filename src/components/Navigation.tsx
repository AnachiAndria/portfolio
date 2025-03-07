import { useState, useEffect } from "react";

const Navigation = () => {
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed  top-0 left-0 w-full p-6 transition-all duration-300  ${
        navbar ? "bg-white shadow-md" : "bg-transparent backdrop-blur-[1.5px]"
      } z-50 `}
    >
        <div className="max-w-6xl  mx-auto flex justify-between items-center">
            <a
            href="#"
            className={`font-[Montserrat] text-lg ${
                navbar ? "text-black" : "text-white"
            }`}
            >
            Achina Andrianantenaina
            </a>
            <ul className="font-[Josefin] font-bold flex space-x-6">
            <li className={`cursor-pointer ${navbar ? "text-black" : "text-white"}`}>About</li>
            <li className={`cursor-pointer ${navbar ? "text-black" : "text-white"}`}>Service</li>
            <li className={`cursor-pointer ${navbar ? "text-black" : "text-white"}`}>Project</li>
            <li className={`cursor-pointer ${navbar ? "text-black" : "text-white"}`}>Contact</li>
            </ul>
        </div>
    </nav>
  );
};

export { Navigation };
