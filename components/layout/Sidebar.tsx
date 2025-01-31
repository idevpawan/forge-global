"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "@/assets/images/logo.svg";
import { sidebarItems } from "@/constants/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PanelRightClose, PanelRightOpen } from "lucide-react";

function Sidebar() {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isActive, setIsActive] = useState(pathname);

  useEffect(() => {
    setIsActive(pathname);
  }, [pathname]);

  const handleToggleSidebarOpen = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav
      className={`sm:max-w-[230px] sm:min-w-[230px] border-b max-sm:bg-white dark:bg-card z-40 transition-all duration-200 ease-in-out sticky top-0 sm:border-r sm:h-screen w-full ${
        !isSidebarOpen && "!max-w-[50px] !min-w-[50px]"
      }`}
    >
      <div className=" hidden sm:flex items-center justify-between mx-4">
        {isSidebarOpen && (
          <Image className="py-5 " src={logo} priority alt="logo" />
        )}
        {/* collapse button */}
        <div onClick={handleToggleSidebarOpen}>
          {isSidebarOpen ? (
            <PanelRightOpen className=" cursor-pointer w-5 text-gray-500 dark:text-white" />
          ) : (
            <PanelRightClose className=" cursor-pointer my-6 w-5 text-gray-500 dark:text-white" />
          )}
        </div>
      </div>
      {/* sidebar items */}
      <div
        data-sidebar="content"
        className="min-h-0 flex-col gap-2 hide-scroll overflow-auto"
      >
        <ul data-sidebar="menu" className="flex w-full min-w-0 sm:flex-col">
          {sidebarItems.map((item, i) => {
            return (
              <Link
                key={i}
                data-sidebar="menu-item"
                href={item.href}
                className={`group/menu-item relative ${
                  isActive === item.href && "!bg-orange-500 text-white"
                } hover:bg-orange-500/50 transition-all py-2 duration-200 ease-in-out `}
              >
                <li
                  data-sidebar="menu-button"
                  data-size="default"
                  data-active="false"
                  className='peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-4 text-left outline-none ring-sidebar-ring transition-[width,height,padding] focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&amp;>span:last-child]:truncate [&amp;>svg]:size-4 [&amp;>svg]:shrink-0 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground h-8 text-sm ({isActive:t})=>q("w-full",t&amp;&amp;"bg-sidebar-accent text-sidebar-accent-foreground") active'
                  aria-current="page"
                >
                  {
                    <item.icon className="lucide lucide-layout-dashboard h-4 w-4" />
                  }
                  {isSidebarOpen && <span>{item.name}</span>}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
