import { NavLink, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";

import { creatorHeaderLinks } from "../constants";

export const CreatorHeader = () => {
  const { pathname } = useLocation();
  return (
    <>
      <div className="relative z-10 bg-secondary-color p-4 shadow-md shadow-black/40 ">
        <div className=" border-gradient-l absolute bottom-0 left-1/4 w-1/3 sm:left-1/4  sm:w-1/4  " />
        <div className=" border-gradient-r  absolute bottom-0 right-1/4 w-1/3 sm:right-1/4  sm:w-1/4  " />
        <div className=" border-gradient-t absolute right-0 top-1/2  hidden h-1/2 w-[1px] translate-y-[-50%] bg-primary-text sm:block " />
        <div className=" border-gradient-b absolute right-0 top-full hidden h-1/2 w-[1px] translate-y-[-50%] bg-primary-text  sm:block" />
        <img
          className="w-full object-cover  opacity-40  grayscale lg:max-h-[25rem]"
          src="/images/profile-background.png"
          alt="bg-creator-header"
        />
      </div>
      <div className="relative flex min-h-[10rem]  items-end justify-center bg-secondary-color shadow-md shadow-black/30 ">
        <img
          className="absolute left-1/2 top-0 z-10 w-1/5 translate-x-[-50%] translate-y-[-50%] shadow-black/70 outline outline-[1rem] !outline-secondary-color drop-shadow-lg  grayscale md:left-[15rem] md:top-0 md:w-auto"
          src="/images/profile-image.png"
          alt="profile-img"
        />
        <nav className="custom-scroll">
          <ul className="d-rtl flex justify-center gap-8 pb-2 md:gap-16 ">
            {creatorHeaderLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <li key={link.label} className="group relative">
                  <NavLink
                    className={twMerge(
                      "text-lg text-white  transition duration-500 hover:text-button-color ",
                      isActive && "text-button-color",
                    )}
                    to={link.path}
                  >
                    {link.label}
                  </NavLink>
                  <div
                    className={twMerge(
                      "absolute bottom-0 right-1/2 translate-y-full size-[.4rem] hidden rounded-full transition-all duration-500 bg-button-color",
                      "group-hover:bg-button-color group-hover:block",
                      isActive && "block",
                    )}
                  />
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};
