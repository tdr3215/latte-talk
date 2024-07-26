"use client";
import React from "react";
import Image from "next/image";
const ThemeToggle = () => {
  return (
    <>
      <label className="swap swap-rotate relative">
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" className="theme-controller" value="retro" />

        {/* sun icon */}
        <Image
          className="swap-off h-10 w-10 fill-current"
          src={"/preference-tab-icons/dm-moon.png"}
          alt=""
          width={30}
          height={30}
        />

        {/* moon icon */}

        <Image
          className="swap-on h-10 w-10 fill-current"
          src={"/preference-tab-icons/lm-sun.png"}
          alt=""
          width={30}
          height={30}
        />
      </label>
    </>
  );
};

export default ThemeToggle;
