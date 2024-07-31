"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<string | null>();

  const handleToggle = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) {
      setTheme("coffee");
    } else {
      setTheme("retro");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme ? theme : "coffee");
    const localTheme = localStorage.getItem("theme");

    if (localTheme) {
      document.querySelector("html")?.setAttribute("data-theme", localTheme);
    }
  }, [theme]);
  return (
    <>
      <form>
        <label className="swap swap-rotate relative">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            className="theme-controller"
            value="coffee"
            id="theme-controller"
            onChange={handleToggle}
          />

          {/* moon icon */}

          <Image
            className="swap-off h-10 w-10 fill-current"
            src={"/preference-tab-icons/lm-sun.png"}
            alt="sun icon for dark mode"
            width={30}
            height={30}
          />

          {/* sun icon */}
          <Image
            className="swap-on h-10 w-10 fill-current"
            src={"/preference-tab-icons/dm-moon.png"}
            alt="moon icon for light mode"
            width={30}
            height={30}
          />
        </label>
      </form>
    </>
  );
};

export default ThemeToggle;
