import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import { PostIcons } from "./PostIcons";

export const CreatorPosts = () => {
  return (
    <>
      <section className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="text-xl text-white">آخرین پست‌‌ها</span>
          <div className="flex items-center gap-2">
            <span className="text-lg text-white">مدیریت</span>
            <button className="text-button-color">...</button>
          </div>
        </div>
        <div className="d-rtl flex flex-wrap items-center gap-8 md:flex-nowrap">
          <Input
            id="search"
            className="shrink-0 border-none bg-outline-color/80 text-white placeholder-shown:placeholder:text-primary-text md:shrink"
            type="search"
            placeholder="جستجوی پست‌ها..."
          />
          <div className="flex items-center gap-8">
            <Select>
              <SelectTrigger className="w-[110px]">
                <SelectValue placeholder="ماه‌ها" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="لورم">لورم</SelectItem>
                <SelectItem value="لورم">لورم</SelectItem>
                <SelectItem value="لورم">لورم</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[110px]">
                <SelectValue placeholder="نوع رسانه" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="لورم">لورم</SelectItem>
                <SelectItem value="لورم">لورم</SelectItem>
                <SelectItem value="لورم">لورم</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>
      <Card className="my-8 rounded-sm border-none bg-card-color p-7 shadow-md shadow-black/25">
        <h3 className="text-lg font-bold text-white">عنوان</h3>
        <span className="text-sm text-primary-text">23، آبان</span>
        <p className="mt-4 text-justify text-white">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 md:justify-between">
          <div className="flex gap-2">
            <img className="w-5" src="/icons/post-icons/lock.png" alt="lock" />
            <span className="self-end text-sm text-primary-text">
              خریداری توسط اعضا
            </span>
          </div>
          <PostIcons />
        </div>
        <div className="relative py-6">
          <div className="border-gradient-l absolute right-1/2 w-1/2 sm:w-1/2 " />
          <div className="border-gradient-r absolute left-1/2 w-1/2 sm:w-1/2 " />
        </div>
        <div className=" flex items-center gap-4">
          <img
            className="size-[3.2rem] rounded-sm border border-gray-500/25 grayscale"
            src="images/profile-image.png"
            alt="profile"
          />
          <Textarea
            id="comment"
            placeholder="گفتگو رو شروع کن..."
            className=" bg-[#2E2F31] text-white"
          />
        </div>
      </Card>
      <Card className="my-8 rounded-sm border-none bg-card-color shadow-md shadow-black/25">
        <img
          className="mb-4 max-h-[30rem] w-full object-cover p-[6px]"
          src="carousel/tailoring.jpg"
          alt="postimage"
        />
        <CardContent>
          <h3 className="text-lg font-bold text-white">عنوان</h3>
          <span className="text-sm text-primary-text">23، آبان</span>
          <p className="mt-4 text-justify text-white">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 md:justify-between">
            <div className="flex gap-2">
              <img
                className="w-5"
                src="/icons/post-icons/lock.png"
                alt="lock"
              />
              <span className="self-end text-sm text-primary-text">
                خریداری توسط اعضا
              </span>
            </div>
            <PostIcons />
          </div>
          <div className="relative py-6">
            <div className="border-gradient-l absolute right-1/2 w-1/2 sm:w-1/2 " />
            <div className="border-gradient-r absolute left-1/2 w-1/2 sm:w-1/2 " />
          </div>
          <div className=" flex items-center gap-4">
            <img
              className="size-[3.2rem] rounded-sm border border-gray-500/25 grayscale"
              src="images/profile-image.png"
              alt="profile"
            />
            <Textarea
              id="comment2"
              placeholder="گفتگو رو شروع کن..."
              className=" bg-[#2E2F31] text-white"
            />
          </div>
        </CardContent>
      </Card>
    </>
  );
};
