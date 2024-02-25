import React from "react";

import Stars from "/icons/stars.svg";

import { Button } from "./ui/button";

const Cardbox = () => {
  return (
    <div className="flex shrink flex-wrap  items-center justify-around gap-7">
      <div className="flex max-w-[18rem] flex-col">
        <div className="border-2 border-button bg-bgSecondary px-[7rem] py-[0.6rem]">
          <img src={Stars} alt="star1" className="mx-auto size-[32px]" />
        </div>
        <div className="bg-bgCard py-2 text-center">
          <p className="text-lg font-bold">پنج تومان</p>
        </div>
        <div className="overflow-hidden bg-bgSecondary">
          <ul
            className="space-y-3 p-5 text-[15px]"
            style={{ direction: "rtl" }}
          >
            <li>- دسترسی زودهنگام به نت‌های موسیقی</li>
            <li>- ارتباط مستقیم بین من و شما</li>
            <li>
              - گذاشتن یکی از ویدیوهای نوازندگی شما به انتخاب خود روی استوری پیج
              اینستاگرام
            </li>
          </ul>
          <div className="my-10 px-10 text-center">
            <Button
              variant="ghost"
              size="lg"
              className="relative w-full self-center rounded-none bg-button p-2  font-semibold drop-shadow-glow transition-all duration-500 hover:bg-button"
            >
              <span className="z-20 text-lg font-bold text-black">شروع کن</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="flex max-w-[18rem] flex-col">
        <div className="flex items-center justify-center gap-3 border-2 border-button bg-bgSecondary px-[7rem] py-[0.6rem]">
          <img src={Stars} alt="star1" className="size-[32px]" />
          <img src={Stars} alt="star2" className="size-[32px]" />
        </div>
        <div className="bg-bgCard py-2 text-center">
          <p className="text-lg font-bold">پنج تومان</p>
        </div>
        <div className="overflow-hidden bg-bgSecondary">
          <ul
            className="space-y-3 p-5 text-[15px]"
            style={{ direction: "rtl" }}
          >
            <li>- دسترسی زودهنگام به نت‌های موسیقی</li>
            <li>- ارتباط مستقیم بین من و شما</li>
            <li>
              - گذاشتن یکی از ویدیوهای نوازندگی شما به انتخاب خود روی استوری پیج
              اینستاگرام
            </li>
          </ul>
          <div className="my-10 px-10 text-center">
            <Button
              variant="ghost"
              size="lg"
              className="relative w-full self-center rounded-none bg-button p-2  font-semibold drop-shadow-glow transition-all duration-500 hover:bg-button"
            >
              <span className="z-20 text-lg font-bold text-black">شروع کن</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="flex max-w-[18rem] flex-col">
        <div className="flex items-center justify-center gap-3 border-2 border-button bg-bgSecondary px-[7rem] py-[0.6rem]">
          <img src={Stars} alt="star1" className="size-8" />
          <img src={Stars} alt="star2" className="size-8" />
          <img src={Stars} alt="star3" className="size-8" />
        </div>
        <div className="bg-bgCard py-2 text-center">
          <p className="text-lg font-bold">پنج تومان</p>
        </div>
        <div className="overflow-hidden bg-bgSecondary">
          <ul
            className="space-y-3 p-5 text-[15px]"
            style={{ direction: "rtl" }}
          >
            <li>- دسترسی زودهنگام به نت‌های موسیقی</li>
            <li>- ارتباط مستقیم بین من و شما</li>
            <li>
              - گذاشتن یکی از ویدیوهای نوازندگی شما به انتخاب خود روی استوری پیج
              اینستاگرام
            </li>
          </ul>
          <div className="my-10 px-10 text-center">
            <Button
              variant="ghost"
              size="lg"
              className="w-full self-center rounded-none bg-button p-2  font-semibold drop-shadow-glow transition-all duration-500 hover:bg-button"
            >
              <span className="z-20 text-lg font-bold text-black">شروع کن</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardbox;
