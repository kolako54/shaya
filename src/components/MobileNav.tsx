import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import { Sheet, SheetContent } from "./ui/sheet";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Menu
        size="2rem"
        onClick={() => setIsOpen(true)}
        className={`${isOpen ? "hidden" : ""} w-8 cursor-pointer text-textMuted hover:scale-110 sm:hidden`}
      />
      <X
        size="2rem"
        onClick={() => setIsOpen(false)}
        className={` cursor-pointer text-textMuted hover:scale-110 sm:hidden ${!isOpen ? "hidden" : ""}`}
      />
      <span className="sr-only">Toggle Menu</span>
      <Sheet open={isOpen} onOpenChange={() => setIsOpen(false)}>
        <SheetContent
          className="absolute top-[4.5rem] w-full bg-bgSecondary"
          side="right"
        >
          <nav className="container grid place-items-end gap-8 text-lg text-textMuted ">
            <NavLink to="/">سازندگان</NavLink>
            <NavLink to="/">منابع</NavLink>
            <NavLink to="/">قیمت گزاری</NavLink>
            <NavLink to="/">محصول</NavLink>
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
};
