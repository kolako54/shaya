import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="container sticky top-0 z-10 bg-bgSecondary p-5 px-10 ">
      <header className="flex items-center justify-between">
        <img src="/Group 41.png" alt="header-img" className="w-[2rem]" />
        <nav className="flex flex-row-reverse flex-wrap gap-10  text-textMuted hover:*:text-white hover:*:transition hover:*:ease-out">
          <NavLink to="/">سازندگان</NavLink>
          <NavLink to="/">منابع</NavLink>
          <NavLink to="/">قیمت گزاری</NavLink>
          <NavLink to="/">محصول</NavLink>
        </nav>
      </header>
    </div>
  );
};
