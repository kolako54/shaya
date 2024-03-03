import { NavLink } from "react-router-dom";

import { MobileCreatorSidebar } from "./MobileCreatorSidebar";

export const CreatorSidebar = () => {
  return (
    <div className="flex justify-end">
      <div className="fixed hidden h-full w-[21rem] flex-col items-end bg-secondary-color px-20 sm:flex">
        <img
          className="w-14 self-center py-8"
          src="/icons/main logo.png"
          alt="sidebar-img"
        />
        <ul>
          <nav className="d-rtl flex list-disc flex-col gap-6 text-lg text-white/75 transition-all duration-500 hover:*:drop-shadow-shine ">
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
