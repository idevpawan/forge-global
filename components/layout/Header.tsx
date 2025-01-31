"use client";

import { Search } from "lucide-react";
import React from "react";
import ToggleTheme from "../ui/ToggleTheme";

function Header() {
  return (
    <nav className="border-b w-full">
      <div className="flex justify-between items-center w-full gap-4 p-4">
        <div className="relative w-full flex-1 max-w-xl">
          <Search className="lucide lucide-search absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="search"
            className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm w-full transition-all duration-200 ease-in-out focus:w-[120%] pl-10"
            placeholder="Search..."
          />
        </div>
        <ToggleTheme />
      </div>
    </nav>
  );
}

export default Header;
