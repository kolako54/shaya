import { Signup } from "@/features/signup/components/Signup";

export const SignupPage = () => {
  return (
    <div className="mx-auto w-3/4 sm:w-2/4 ">
      <div className="mb-8 flex items-center justify-between gap-4 pt-12">
        <div className="relative h-[1rem] flex-1 self-baseline border-b-2 border-[#33363A]">
          <div className="absolute right-[-1px] top-2 size-3 rounded-full bg-outline-color" />
        </div>
        <h1 className="text-2xl text-primary-text">ثبت نام</h1>
      </div>
      <Signup />
    </div>
  );
};
