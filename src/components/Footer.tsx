import React from "react";

const Footer = () => {
  return (
    <div className="grid w-full grid-cols-3 bg-bgSecondary py-5 text-center text-textMuted">
      <div className="relative">
        <div className="space-y-5">
          <p>لورم ایپسوم</p>
          <p>لورم ایپسوم</p>
          <p>لورم ایپسوم</p>
        </div>
        <span className="absolute inset-y-0 right-0 h-[100%] w-[1px] bg-textMuted before:content-normal" />
      </div>
      <div className="relative">
        <div className="space-y-5">
          <p>لورم ایپسوم</p>
          <p>لورم ایپسوم</p>
          <p>لورم ایپسوم</p>
        </div>
        <span className="absolute inset-y-0 right-0 h-[100%] w-[1px] bg-textMuted before:content-normal" />
      </div>
      <div className="relative">
        <div className="space-y-5">
          <p>لورم ایپسوم</p>
          <p>لورم ایپسوم</p>
          <p>لورم ایپسوم</p>
        </div>
        <span className="absolute inset-y-0 right-0 h-[100%] w-[1px] bg-textMuted before:content-normal" />
      </div>
    </div>
  );
};

export default Footer;
