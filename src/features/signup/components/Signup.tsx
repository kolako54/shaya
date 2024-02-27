import { useNavigate } from "react-router-dom";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { MainForm } from "./MainForm";

export const Signup = () => {
  const navigate = useNavigate();

  return (
    <>
      <Card className="flex flex-col border-none bg-secondary-color shadow-md">
        <CardHeader>
          <img
            src="/icons/form logo.png"
            alt="form-img"
            className="mx-auto w-[3rem]"
          />
        </CardHeader>
        <CardContent className="flex flex-col gap-8 md:mx-[4rem]">
          <MainForm />
        </CardContent>
      </Card>
      <Card className="mb-10 mt-8 flex cursor-pointer items-center justify-between border-none bg-secondary-color p-4 shadow-md transition-all ease-in-out hover:scale-[1.03] hover:shadow-xl">
        <img
          className="w-[6rem]  object-cover opacity-20"
          src="/icons/google logo.png"
          alt="google-logo"
        />
        <div className=" text-xl text-primary-text">ثبت نام با گوگل</div>
      </Card>
      <div className=" flex-row-reverse items-center gap-4 pb-12 text-center sm:flex ">
        <div className=" text-2xl text-primary-text">از قبل اکانت دارید؟</div>
        <button
          onClick={() => navigate("/login")}
          className="text-lg text-button-color drop-shadow-glow transition-all   hover:scale-[1.1] hover:shadow-sm"
        >
          ورود
        </button>
      </div>
    </>
  );
};
