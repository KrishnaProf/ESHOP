import React, { useState } from "react";
import LightButton from "../assets/website/light-mode-button.png";
import DarkButton from "../assets/website/dark-mode-button.png";

const Darkmode = () => {
  const [Theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;
  console.log(element);

  React.useEffect(() => {
    localStorage.setItem("theme", Theme);
    if (Theme === "dark") element.classList.add("dark");
    else element.classList.remove("dark");
  });

  return (
    <div className="relative">
      <img
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        src={LightButton}
        alt="/"
        className={
          "w-12 cursor-pointer absolute right-0 z-10 transition-all duration-300"
        }
      />
      <img
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        src={DarkButton}
        alt="/"
        className={
          "w-12 cursor-pointer absolute right-0 z-10 transition-all duration-300"
        }
      />
    </div>
  );
};

export default Darkmode;
