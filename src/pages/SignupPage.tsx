import { Signup } from "@/components/Signup";

export const SignupPage = () => {
  return (
    <div className="mx-auto sm:w-3/5 ">
      <div className="mb-8 flex items-center justify-between gap-4 pt-12">
        <div className="relative h-[1rem] flex-1 border-b-2 border-[#33363A]">
          <div className="absolute right-[-1px] top-2 size-3 rounded-full bg-[#33363A]" />
        </div>
        <h1 className="text-2xl text-textMuted">ثبت نام</h1>
      </div>
      <Signup />
    </div>
  );
};
