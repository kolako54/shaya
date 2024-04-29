import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";

import { Sheet, SheetContent } from "@/components/ui/sheet";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Menu
        size="2rem"
        onClick={() => setIsOpen(true)}
        className={twMerge(
          "w-8 cursor-pointer text-primary-text hover:scale-110 sm:hidden",
          isOpen ? "hidden" : "",
        )}
      />
      <X
        size="2rem"
        onClick={() => setIsOpen(false)}
        className={twMerge(
          "cursor-pointer text-primary-text hover:scale-110 sm:hidden",
          !isOpen ? "hidden" : "",
        )}
      />
      <span className="sr-only">Toggle Menu</span>
      <Sheet open={isOpen} onOpenChange={() => setIsOpen(false)}>
        <SheetContent
          className=" mt-[4.5rem] w-full bg-secondary-color"
          side="right"
        >
          <nav className="container grid place-items-end gap-8 text-lg text-primary-text  hover:*:text-white hover:*:transition hover:*:ease-out ">
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
