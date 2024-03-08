import { NavLink, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";

import { MobileCreatorSidebar } from "./MobileCreatorSidebar";

export const CreatorSidebar = () => {
  const { pathname } = useLocation();

  return (
    <>
      <div className="hidden min-h-full basis-[18rem] flex-col items-end bg-secondary-color pl-4  pr-10 shadow-lg shadow-black/60 sm:flex lg:px-20 ">
        <img
          className="w-14 self-center py-8"
          src="/icons/main logo.png"
          alt="sidebar-img"
        />
        <ul>
          <nav className="d-rtl flex list-disc flex-col gap-6 text-lg text-white/75 transition-all duration-500 *:first:*:text-nowrap hover:*:drop-shadow-shine ">
            <NavLink
              className={({ isActive }) =>
                twMerge(
                  isActive && pathname.startsWith("/creator")
                    ? "drop-shadow-shine"
                    : "",
                )
              }
              to="/creator"
            >
              <li>صفحه‌ی من</li>
            </NavLink>
            <NavLink to="#">
              <li>مشتری ها</li>
            </NavLink>
            <NavLink to="#">
              <li>آمار</li>
            </NavLink>
            <NavLink to="#">
              <li>پرداختی ها</li>
            </NavLink>
            <NavLink to="#">
              <li>جامعه</li>
            </NavLink>
            <NavLink to="#">
              <li>اعلانیه ها</li>
            </NavLink>
            <NavLink to="#">
              <li>تنظیمات</li>
            </NavLink>
          </nav>
        </ul>
      </div>
      <MobileCreatorSidebar />
    </>
  );
};
