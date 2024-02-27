import Typewriter from "typewriter-effect";

import { Button } from "@/components/ui/button";

const typewriter = (
  <Typewriter
    options={{
      strings: [
        "خیاط باشید",
        "نوازنده باشید",
        "برنامه نویس باشید",
        "نقاش باشید",
        "عکاس باشید",
        "گرافیست باشید",
      ],
      autoStart: true,
      loop: true,
      cursorClassName: "cursor",
    }}
  />
);

export const Header = () => {
  return (
    <div className="mx-auto bg-[#212326] px-8 pt-12 ">
      <header className=" grid place-items-center gap-4 md:flex md:items-center  md:justify-center md:gap-16">
        <div className="mb-12 bg-secondary-color p-4 shadow-2xl sm:p-7">
          <div className="relative bg-primary-color p-4 sm:p-7">
            <img
              className="cursor-pointer object-fill opacity-15 shadow-md grayscale "
              src="/images/money.png"
              alt="home-header"
            />
            <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
              <img
                className="size-14 cursor-pointer"
                src="/icons/play icon.png"
                alt="play"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-8">
          <div className="solid dashed flex items-center">
            <img
              className="absolute left-[-2.7%] top-[50%] hidden translate-x-[-50%] translate-y-[-50%] -rotate-90 md:block"
              src="/Group 41.png"
              alt=""
            />
            <div className="d-rtl p-4 text-xl text-white sm:p-8 sm:text-2xl ">
              پاترئون محلی برای کسب درآمد افراد مستعد؛ شما چه {typewriter}
              <br />
              <span className="font-bold text-button-color">شایسته‌ی</span> کسب
              درآمد هستید
            </div>
          </div>
          <div className="mb-8  md:mb-0">
            <Button variant="primary" size="lg">
              شروع کن
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
};
