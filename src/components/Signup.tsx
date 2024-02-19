import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

export const Signup = () => {
  return (
    <>
      <Card className="flex flex-col border-none bg-bgSecondary shadow-md">
        <CardHeader>
          <img
            src="/Group 43.png"
            alt="form-img"
            className="mx-auto w-[3rem]"
          />
        </CardHeader>
        <CardContent className="flex flex-col  md:mx-[4rem]">
          <form className="flex flex-col gap-2">
            <label className="text-end text-lg text-textMuted" htmlFor="name">
              نام
            </label>
            <input
              className="mb-8 bg-bgCard p-2 text-white"
              id="name"
              type="text"
            />

            <label
              className="text-end text-lg  text-textMuted"
              htmlFor="address"
            >
              آدرس پستی
            </label>
            <input
              className="mb-8 bg-bgCard p-2 text-white"
              id="address"
              type="text"
            />
            <div className="flex flex-row-reverse items-center justify-between">
              <label className="text-lg text-textMuted" htmlFor="enter-pass">
                رمز عبور
              </label>
              <label className=" text-sm text-textMuted" htmlFor="enter-pass">
                لطفا اعداد فارسی وارد نکنید
              </label>
            </div>
            <input
              className="mb-8 bg-bgCard p-2 text-white"
              id="enter-pass"
              type="password"
            />
            <div className="flex flex-row-reverse items-center justify-between">
              <label className="text-lg text-textMuted" htmlFor="re-enter-pass">
                رمز عبور مجدد
              </label>
              <label className=" text-sm text-textMuted" htmlFor="enter-pass">
                لطفا اعداد فارسی وارد نکنید
              </label>
            </div>
            <input
              className="mb-8 bg-bgCard p-2 text-white"
              id="re-enter-pass"
              type="password"
            />
          </form>
        </CardContent>
        <CardFooter>
          <Button
            variant="ghost"
            size="sm"
            className="mx-auto my-4 rounded-none bg-button px-8 shadow-lg hover:bg-button hover:drop-shadow-glow"
          >
            ثبت نام
          </Button>
        </CardFooter>
      </Card>
      <Card className="mb-10 mt-8 flex cursor-pointer items-center justify-between border-none bg-bgSecondary p-4 shadow-md transition-all ease-in-out hover:scale-[1.03] hover:shadow-xl">
        <img
          className="w-[6rem]  object-cover opacity-20"
          src="/7123025_logo_google_g_icon.png"
          alt="google-logo"
        />
        <div className=" text-2xl text-textMuted">ثبت نام با گوگل</div>
      </Card>
      <div className=" flex flex-row-reverse items-center gap-4 pb-12 ">
        <div className=" text-2xl text-textMuted">از قبل اکانت دارید؟</div>
        <span className="cursor-pointer text-lg text-button drop-shadow-glow  hover:scale-[1.1] hover:shadow-sm">
          ورود
        </span>
      </div>
    </>
  );
};
