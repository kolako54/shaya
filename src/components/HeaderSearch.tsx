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
          className=" relative w-36 self-center rounded-none bg-button p-5  font-semibold drop-shadow-glow transition-all duration-500 hover:bg-button"
        >
          <span className="z-20 text-lg font-bold text-black">جستجو</span>
        </Button>
        <div className="relative flex-1">
          <Input
            type="search"
            className=" rounded-sm bg-transparent py-8 text-white outline  outline-4 outline-outlineColor"
          />
          <div className="absolute right-[4rem] top-[.7rem] h-10 border border-outlineColor" />
          <img
            className="absolute right-2 top-3 size-10  "
            src="/icons/search.png"
            alt="search"
          />
        </div>
      </div>
    </>
  );
};
