import { useEffect } from "react";

const Loader = () => {
  useEffect(() => {
    const preLoader = () => {
      setTimeout(() => {
        document.querySelector("#preloader-wapper .loader-middle")?.classList.add("loaded");
        setTimeout(() => {
          document.querySelector("#preloader-wapper")?.classList.add("loaded");
          setTimeout(() => {
            document.querySelector("#preloader-wapper")?.remove();
          }, 400);
        }, 600);
      }, 1000);
    };
    preLoader();
  }, []);

  return (
    <div id="preloader-wapper">
      <div className="loader-middle"></div>
    </div>
  );
};

export { Loader };
