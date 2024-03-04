import { NavLink, Outlet } from "react-router-dom";

export const CreatorHeader = () => {
  return (
    <div className="flex-1">
      <div className="relative max-w-full bg-[#1e1e21] p-4 ">
        <div className=" absolute bottom-0 left-1/2 h-[1px] w-3/4 translate-x-[-50%] bg-[#3f3f3f]" />
        <div className=" absolute right-0 top-1/2 hidden h-3/4 w-[1px] translate-y-[-50%] bg-[#3f3f3f] sm:block" />
        <img
          className="w-full object-cover opacity-40 grayscale lg:max-h-[25rem]"
          src="/images/profile-background.png"
          alt="bg-creator-header"
        />
      </div>
      <div className="flex min-h-[10rem]  items-end justify-center bg-secondary-color ">
        <ul className="custom-scroll">
          <nav className="d-rtl flex justify-center gap-8 pb-2 text-lg  text-white *:transition-all *:duration-500 hover:*:text-button-color sm:*:text-xl md:gap-16">
            <NavLink className="group relative" to="">
              <li className="mb-1 text-nowrap">درباره‌ی من</li>
              <div className="absolute bottom-0 right-1/2 hidden size-[.4rem] rounded-full bg-white group-hover:block group-hover:bg-button-color " />
            </NavLink>
            <NavLink className="group relative" to="">
              <li className="mb-1">عضویت</li>
              <div className="absolute bottom-0 right-1/2 hidden size-[.4rem] rounded-full bg-white group-hover:block group-hover:bg-button-color" />
            </NavLink>
            <NavLink className="group relative " to="">
              <li className="mb-1">خرید</li>
              <div className="absolute bottom-0 right-1/2 hidden size-[.4rem] rounded-full bg-white group-hover:block group-hover:bg-button-color" />
            </NavLink>
            <NavLink className="group relative " to="">
              <li className="mb-1">کالکشن</li>
              <div className="absolute bottom-0 right-1/2 hidden  size-[.4rem] rounded-full bg-white group-hover:block group-hover:bg-button-color" />
            </NavLink>
            <NavLink className="group relative" to="/creator/home">
              <li className="mb-1">خانه</li>
              <div className="absolute bottom-0 right-1/2 hidden  size-[.4rem] rounded-full bg-white group-hover:block group-hover:bg-button-color" />
            </NavLink>
          </nav>
        </ul>
      </div>
      <img
        className="relative bottom-[10rem] left-1/2 isolate z-10  w-1/5 translate-x-[-50%] translate-y-[-50%] shadow-md outline outline-[#21242a] grayscale sm:w-1/4 sm:outline-[1rem] md:left-[15rem] md:top-[-11rem] md:w-auto"
        src="/images/profile-image.png"
        alt="profile-img"
      />
      <Outlet />
    </div>
  );
};
