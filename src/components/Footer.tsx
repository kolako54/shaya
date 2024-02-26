import React from "react";

const Footer = () => {
  return (
    <div className="mt-16 grid w-full flex-col bg-secondary-color  p-5 text-center text-primary-text sm:grid-cols-3">
      <div className="relative">
        <div className="space-y-5 py-5 sm:py-0">
          <p>لورم ایپسوم</p>
          <p>لورم ایپسوم</p>
          <p>لورم ایپسوم</p>
        </div>
        <span className="absolute left-0 block h-[2px] w-full bg-primary-text before:content-normal sm:inset-y-0 sm:right-0 sm:hidden sm:h-[100%] sm:w-[1px]" />
      </div>
      <div className="relative">
        <div className="space-y-5 py-5 sm:py-0">
          <p>لورم ایپسوم</p>
          <p>لورم ایپسوم</p>
          <p>لورم ایپسوم</p>
        </div>
        {/* <span className="absolute inset-y-0 right-0 h-[100%] w-[1px] bg-primary-text before:content-normal" /> */}
        <span className="absolute left-0 h-[2px] w-full bg-primary-text before:content-normal sm:inset-y-0 sm:right-0 sm:h-[100%] sm:w-[1px]" />
      </div>
      <div className="relative">
        <div className="space-y-5 py-5 sm:py-0">
          <p>لورم ایپسوم</p>
          <p>لورم ایپسوم</p>
          <p>لورم ایپسوم</p>
        </div>
        {/* <span className="absolute inset-y-0 right-0 h-[100%] w-[1px] bg-primary-text before:content-normal" /> */}
        <span className="absolute left-0 hidden h-[2px] w-full bg-primary-text before:content-normal sm:inset-y-0 sm:right-0 sm:block sm:h-[100%] sm:w-[1px]" />
      </div>
    </div>
  );
};

export default Footer;
