import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const HeaderSearch = () => {
  return (
    <>
      <div className="my-12 text-center text-3xl font-bold text-textMuted">
        میان <span className="text-white">یک میلیون</span> نفر پاترئونی جستجو
        کنید
      </div>

      <div className="container flex flex-col-reverse gap-4 sm:flex-row ">
        <Button
          variant="ghost"
          size="lg"
          className=" relative w-36 self-center rounded-none bg-button p-5  font-semibold transition-all hover:bg-button hover:drop-shadow-glow hover:duration-500"
        >
          <img
            src="/Group 47.png"
            alt="btn-img"
            className=" absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
          />
          <span className="z-20 text-lg font-bold text-black">جستجو</span>
        </Button>
        <div className="relative flex-1">
          <Input
            type="search"
            className=" rounded-sm bg-transparent py-8 text-white outline  outline-4 outline-outlineColor"
          />
          <img
            className="absolute right-16 top-3 h-10"
            src="/Line 14.png"
            alt="srch"
          />
          <img
            className="absolute right-2 top-3 size-10  "
            src="/search.png"
            alt="search"
          />
        </div>
      </div>
    </>
  );
};
