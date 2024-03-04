import { NavLink } from "react-router-dom";

import { MobileCreatorSidebar } from "./MobileCreatorSidebar";

export const CreatorSidebar = () => {
  return (
    <div className="basis-[15rem]">
      <div className=" hidden min-h-full flex-col items-end bg-secondary-color pl-4 pr-12 sm:flex  lg:px-20 ">
        <img
          className="w-14 self-center py-8"
          src="/icons/main logo.png"
          alt="sidebar-img"
        />
        <ul>
          <nav className="d-rtl flex list-disc flex-col gap-6 text-lg text-white/75 transition-all duration-500 *:first:*:text-nowrap hover:*:drop-shadow-shine ">
            <NavLink to="#">
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
    </div>
  );
};
