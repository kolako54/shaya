import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription } from "@/components/ui/card";

import { CreatorPosts } from "../components/CreatorPosts";

const Home = () => {
  return (
    <div className="d-rtl mx-auto w-5/6  sm:w-2/3">
      <Card className="custom-gradient  mb-12  rounded-sm shadow-lg shadow-button-color/15 ">
        <h1 className="mb-4 text-xl font-bold text-button-color">
          پاترئون شما آماده‌ست
        </h1>
        <CardDescription className=" mb-6 text-justify text-xl text-white">
          با اضافه کردن جزئیات, به بازدید کننده‌های پیجت کمک کن که بهتر تورو
          بشناسن؛ پلن‌هات رو باهاشون به اشتراک بذار.
        </CardDescription>
        <div className="relative">
          <div className="border-gradient-l absolute right-1/2 w-1/2 sm:w-1/2" />
          <div className="border-gradient-r absolute left-1/2 w-1/2 sm:w-1/2" />
        </div>
        <CardContent className="d-rtl mx-0 mt-10 flex flex-col gap-8 p-0 text-lg font-bold text-white">
          <div className="flex justify-between gap-4">
            <p className="text-primary-text line-through">عکس پروفایل بذار</p>
            <div className="grid size-8 shrink-0 place-items-center rounded-full bg-button-color outline  outline-button-color">
              <div className="size-6 rounded-full outline outline-ring" />
            </div>
          </div>
          <div className="flex justify-between gap-4">
            <div>
              صفحه‌ات رو توصیف کن
              <p className="text-sm font-normal text-primary-text md:text-base">
                بذار مردم بدونن که تو کی هستی و برای چی از پاترئون استفاده
                می‌کنی؟
              </p>
              <span className="border-b border-destructive text-sm font-normal text-destructive">
                نکاتی برای یک توصیف خوب
              </span>
            </div>
            <div className="grid size-8 shrink-0 place-items-center rounded-full bg-transparent outline outline-2">
              <div className="text-2xl">&gt;</div>
            </div>
          </div>
          <div className="flex justify-between gap-4">
            <p>اولین پستت رو پابلیک کن!</p>
            <div className="grid size-8 shrink-0 place-items-center rounded-full bg-transparent outline outline-2">
              <div className="text-2xl">&gt;</div>
            </div>
          </div>
          <div className="flex justify-between gap-4">
            <p>صفحه‌ات رو عمومی کن!</p>
            <div className="grid size-8 shrink-0 place-items-center rounded-full bg-transparent outline outline-2">
              <div className="text-2xl">&gt;</div>
            </div>
          </div>
          <div className="flex justify-between gap-4">
            <div>
              صفحه‌ات رو عمومی کن!
              <p className="text-sm font-normal text-primary-text md:text-base">
                صفحه‌ات رو با حضار یه اشتراک بذار تا بتونن ملحق شن.
              </p>
            </div>
            <div className="grid size-8 shrink-0 place-items-center rounded-full bg-transparent outline outline-2">
              <div className="text-2xl">&gt;</div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="custom-gradient   mb-12  rounded-sm shadow-lg shadow-button-color/15 ">
        <h1 className="mb-4 text-xl font-bold text-button-color">
          راه‌هایی برای کسب درآمد
        </h1>
        <CardDescription className=" mb-6 text-justify text-xl text-white">
          پاترئون. فضایی رایگان برای تو و طرفدارانت. برای رشد کسب و کارت به
          راحتی به آثارت رو به دیگران ارائه بده.
        </CardDescription>
        <div className="relative">
          <div className="border-gradient-l absolute right-1/2 w-1/2 sm:w-1/2 " />
          <div className="border-gradient-r absolute left-1/2 w-1/2 sm:w-1/2 " />
        </div>
        <p className="mt-10 text-justify text-xl text-primary-text">
          محصولات دیجیتالیت رو, مثل ویدیوها و عکس‌ها, مستقیما روی پاترئون به
          دیگران بفروش. عضویت لازم نیست.
        </p>
        <div className="mt-6 text-center sm:text-end">
          <Button variant="secondary" size="lg">
            شروع کن
          </Button>
        </div>
      </Card>
      <CreatorPosts />
    </div>
  );
};

export default Home;
