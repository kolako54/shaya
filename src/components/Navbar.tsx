import { NavLink } from "react-router-dom";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { MobileNav } from "./MobileNav";

export const Navbar = () => {
  return (
    <div className="sticky top-0 z-[999] bg-bgSecondary py-5 ">
      <header className=" container flex items-center justify-between">
        <img
          src="/icons/Group 41.png"
          alt="header-img"
          className="w-[2rem] cursor-pointer"
        />
        <nav className=" hidden flex-row-reverse gap-10 text-textMuted  transition-all hover:*:text-white hover:*:ease-out sm:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>سازندگان</NavigationMenuTrigger>
                <NavigationMenuContent className="flex flex-col gap-4 bg-bgCard text-xs text-textMuted  hover:*:brightness-0  hover:*:invert hover:*:transition hover:*:ease-out">
                  <div className="flex items-center justify-between ">
                    <img className="size-8" src="/web-development.png" alt="" />
                    <NavLink to="/">پادکسترها</NavLink>
                  </div>
                  <div className="flex items-center justify-between">
                    <img className="size-8" src="/web-development.png" alt="" />
                    <NavLink to="/">سازندگان ویدئو</NavLink>
                  </div>
                  <div className="flex items-center justify-between">
                    <img className="size-8" src="/web-development.png" alt="" />
                    <NavLink to="/">موزیسین ها</NavLink>
                  </div>
                  <div className="flex items-center justify-between">
                    <img className="size-8" src="/web-development.png" alt="" />
                    <NavLink to="/">نقاشی دیجیتال</NavLink>
                  </div>
                  <div className="flex items-center justify-between">
                    <img className="size-8" src="/web-development.png" alt="" />
                    <NavLink to="/">جوامع</NavLink>
                  </div>
                  <div className="flex items-center justify-between">
                    <img className="size-8" src="/web-development.png" alt="" />
                    <NavLink to="/">نویسندگان</NavLink>
                  </div>
                  <div className="flex items-center justify-between">
                    <img className="size-8" src="/web-development.png" alt="" />
                    <NavLink to="/">سازندهای بازی</NavLink>
                  </div>
                  <div className="flex items-center justify-between">
                    <img className="size-8" src="/web-development.png" alt="" />
                    <NavLink to="/">موسسات خیریه</NavLink>
                  </div>
                  <div className="flex items-center justify-between">
                    <img className="size-8" src="/web-development.png" alt="" />
                    <NavLink to="/">آموزشی ها</NavLink>
                  </div>
                  <div className="flex items-center justify-between">
                    <img className="size-8" src="/web-development.png" alt="" />
                    <NavLink to="/">کارهای محلی</NavLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavLink to="/">منابع</NavLink>
          <NavLink to="/">قیمت گزاری</NavLink>
          <NavLink to="/">محصول</NavLink>
        </nav>
        <MobileNav />
      </header>
    </div>
  );
};
