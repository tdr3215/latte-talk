"use client";
import Image from "next/image";
import React from "react";
const VolumeOnButton = () => {
  return (
    <>
      <button
        className="btn btn-square btn-sm btn-ghost relative"
        onClick={() => {
          console.log("change to button off");
        }}
      >
        <Image src={"/volume-btns/dm-vol-on.png"} alt="" fill />
      </button>
    </>
  );
};

export default VolumeOnButton;
