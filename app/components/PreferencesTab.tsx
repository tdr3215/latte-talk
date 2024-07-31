import React from "react";
import VolumeOnButton from "./buttons/VolumeButton";
import ThemeToggle from "./buttons/ThemeToggle";

const PreferencesTab = () => {
  return (
    <div className="flex flex-wrap gap-2 mb-5 px-1 md:px-2">
      {/* Implment this later */}
      {/* <VolumeOnButton /> */}
      <ThemeToggle />

      {/* Persist the theme in localStorage to save on refresh */}
    </div>
  );
};

export default PreferencesTab;
