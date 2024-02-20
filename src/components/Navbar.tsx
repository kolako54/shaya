import { NavLink } from "react-router-dom";

import { MobileNav } from "./MobileNav";

export const Navbar = () => {
  return (
    <div className="sticky top-0 z-[999] bg-bgSecondary p-5 px-10 ">
      <header className="flex items-center justify-between">
        <img
          src="/Group 41.png"
          alt="header-img"
          className="w-[2rem] cursor-pointer"
        />
        <nav className=" hidden flex-row-reverse flex-wrap gap-10 text-textMuted  hover:*:text-white hover:*:transition hover:*:ease-out sm:flex">
          <NavLink to="/">سازندگان</NavLink>
          <NavLink to="/">منابع</NavLink>
          <NavLink to="/">قیمت گزاری</NavLink>
          <NavLink to="/">محصول</NavLink>
        </nav>
        <MobileNav />
      </header>
    </div>
  );
};
