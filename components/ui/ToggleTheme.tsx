import React, { useEffect, useState } from "react";
import { flushSync } from "react-dom";

function ToggleTheme() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = async (isDarkMode: boolean) => {
    await document.startViewTransition(() => {
      flushSync(() => {
        setIsDarkMode(isDarkMode);
      });
    }).ready;

    document.documentElement.animate(
      {
        clipPath: [
          `circle(50px at ${window.innerWidth}px 0px)`,
          `circle(${
            window.innerWidth + window.innerWidth / 2
          }px at 50px 500px)`,
        ],
      },
      {
        duration: 500,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  };

  useEffect(() => {
    if (isDarkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [isDarkMode]);

  return (
    <label className="inline-flex items-center cursor-pointer">
      <span className="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        {isDarkMode ? "Dark" : "Light"}
      </span>
      <input
        checked={isDarkMode}
        onChange={() => toggleDarkMode(!isDarkMode)}
        type="checkbox"
        value=""
        className="sr-only peer"
      />
      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-orange-500"></div>
    </label>
  );
}

export default ToggleTheme;
