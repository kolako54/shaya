import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Cardbox from "./Cardbox";
import { Button } from "./ui/button";

const CarouselPic = () => {
  const imgs = [
    "/carousel/guitar.jpg",
    "/carousel/tailoring.jpg",
    "/carousel/painter.png",
  ];

  return (
    <div className=" mt-10 flex w-full flex-col items-center gap-7 px-5 text-textMuted">
      <p className="d-rtl text-center text-2xl font-bold text-white">
        چه کسانی از پاترئون استفاده کنن؟
      </p>
      <p className="d-rtl text-center text-xl leading-10">
        اگر میخای بدونی این سایت برای کیا مناسبه فقط کافیه به آیکون های حاشیه ی
        <br />
        سایت نگاه کنی.
        <br />
        درسته! فرقی نمیکنه از چه صنفی وارد پاترئون میشی یا شغل و کسب و کارت چیه،
        تو
        <br />
        میتونی با شغلی که داری، کاربرهارو جذب کنی و بهشون چیزی یاد بدی و درآمد
        کسب کنی. به همین راحتی!
      </p>
      <Carousel
        className="overflow-hidden border-[10px] border-bgSecondary shadow-2xl md:w-2/3 lg:w-[50rem]"
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {imgs.map((item, index) => (
            <CarouselItem key={index}>
              <div className="shadow-2xl">
                <div className="flex  items-center justify-center">
                  <img
                    src={item}
                    alt={item.split("/")[2].split(".")[0]}
                    className="bg-cover"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <p className="d-rtl mt-10 text-center text-2xl font-bold text-white">
        آسون تر از چیزیه که فکرشو میکنی
      </p>
      <p className="d-rtl text-center text-xl leading-10">
        روش های مختلفی برای امتیاز گرفتن از طرفدارات وجود داره <br />
        تو میتونی امتیاز خودتو همونطور که میخای دریافت کنی
        <br />
        مثال زیر رو مثلا برای یک گیتاریست میزنیم:
      </p>
      <Cardbox />

      <p className="mt-7 text-center text-2xl font-bold text-white">
        آماده‌ای برای این که عضو بشی؟؟
      </p>
      <Button
        variant="ghost"
        size="lg"
        className="my-3 self-center rounded-none bg-button p-2  font-semibold drop-shadow-glow transition-all duration-500 hover:bg-button"
      >
        <span className="px-6 text-lg font-bold text-black">شروع کن</span>
      </Button>
    </div>
  );
};

export default CarouselPic;
