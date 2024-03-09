import { NavLink, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export const CreatorHeader = () => {
  const { pathname } = useLocation();
  return (
    <>
      <div className="relative z-10 bg-secondary-color p-4 shadow-md shadow-black/40 ">
        <div className=" border-gradient-l absolute bottom-0 left-1/4 w-1/3 sm:left-1/4  sm:w-1/3  " />
        <div className=" border-gradient-r  absolute bottom-0 right-1/4 w-1/3 sm:right-[8.4rem]  sm:w-1/3  " />
        <div className=" border-gradient-t absolute right-0 top-[12rem]  hidden h-[18rem] w-[1px] translate-y-[-50%] bg-white sm:block" />
        <div className=" border-gradient-b absolute right-0 top-[26rem]  hidden h-[15rem] w-[1px] translate-y-[-50%] bg-white sm:block" />
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

        <ul className="custom-scroll">
          <nav className="d-rtl flex justify-center gap-8 pb-2 text-lg  text-white *:transition-all *:duration-500 hover:*:text-button-color  sm:*:text-xl md:gap-16">
            <NavLink className="group relative" to="">
              <li className="mb-1 text-nowrap">درباره‌ی من</li>
              <div
                className={twMerge(
                  "absolute bottom-0 right-1/2 size-[.4rem] hidden rounded-full transition-all duration-500 bg-button-color",
                  "group-hover:bg-button-color group-hover:block",
                  pathname === "/creator/about" ? "block" : "",
                )}
              />
            </NavLink>
            <NavLink className="group relative" to="">
              <li className="mb-1">عضویت</li>
              <div
                className={twMerge(
                  "absolute bottom-0 right-1/2 size-[.4rem] hidden rounded-full transition-all duration-500 bg-button-color",
                  "group-hover:bg-button-color group-hover:block",
                  pathname === "/creator/membership" ? "block" : "",
                )}
              />
            </NavLink>
            <NavLink className="group relative " to="">
              <li className="mb-1">خرید</li>
              <div
                className={twMerge(
                  "absolute bottom-0 right-1/2 size-[.4rem] hidden rounded-full transition-all duration-500 bg-button-color",
                  "group-hover:bg-button-color group-hover:block",
                  pathname === "/creator/shop" ? "block" : "",
                )}
              />
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                twMerge("group relative", isActive ? "text-button-color" : "")
              }
              to="/creator/collection"
            >
              <li className="mb-1">کالکشن</li>
              <div
                className={twMerge(
                  "absolute bottom-0 right-1/2 size-[.4rem] hidden rounded-full transition-all duration-500 bg-button-color",
                  "group-hover:bg-button-color group-hover:block",
                  pathname === "/creator/collection" ? "block" : "",
                )}
              />
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                twMerge(
                  "group relative",
                  isActive || pathname === "/creator"
                    ? " text-button-color"
                    : "",
                )
              }
              to="/creator/home"
            >
              <li className="mb-1">خانه</li>
              <div
                className={twMerge(
                  "absolute bottom-0 right-1/2   size-[.4rem] rounded-full  bg-button-color",
                  "group-hover:bg-button-color group-hover:block",
                  pathname === "/creator" || pathname === "/creator/home"
                    ? "block"
                    : "hidden",
                )}
              />
            </NavLink>
          </nav>
        </ul>
      </div>
    </>
  );
};
