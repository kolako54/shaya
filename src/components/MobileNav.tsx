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
          className=" mt-[4.5rem] w-full bg-bgSecondary"
          side="right"
        >
          <nav className="container grid place-items-end gap-8 text-lg text-textMuted  hover:*:text-white hover:*:transition hover:*:ease-out ">
            <NavLink to="/" onClick={() => setIsOpen(false)}>
              سازندگان
            </NavLink>
            <NavLink to="/" onClick={() => setIsOpen(false)}>
              منابع
            </NavLink>
            <NavLink to="/" onClick={() => setIsOpen(false)}>
              قیمت گزاری
            </NavLink>

            <NavLink to="/" onClick={() => setIsOpen(false)}>
              محصول
            </NavLink>
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
};
