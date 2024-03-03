import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";

import { Sheet, SheetContent } from "@/components/ui/sheet";

export const MobileCreatorSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Menu
        size="2rem"
        onClick={() => setIsOpen(true)}
        className={twMerge(
          "w-8 mt-4 mr-4 cursor-pointer text-primary-text transition-all duration-500 hover:scale-110 sm:hidden",
          isOpen ? "hidden" : "",
        )}
      />

      <span className="sr-only">Toggle Menu</span>
      <Sheet open={isOpen} onOpenChange={() => setIsOpen(false)}>
        <SheetContent className="w-full bg-secondary-color">
          <div className="flex flex-col ">
            <div className="flex items-center justify-between">
              <X
                size="2rem"
                onClick={() => setIsOpen(false)}
                className={twMerge(
                  "cursor-pointer text-primary-text transition-all duration-500 hover:scale-110 sm:hidden",
                  !isOpen ? "hidden" : "",
                )}
              />
              <img
                className="w-14 self-end "
                src="/icons/main logo.png"
                alt="sidebar-img"
              />
            </div>
            <ul>
              <nav className="d-rtl flex list-disc flex-col gap-6 px-6 pt-8 text-lg text-white/75 transition-all duration-500 hover:*:drop-shadow-shine ">
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
        </SheetContent>
      </Sheet>
    </>
  );
};
