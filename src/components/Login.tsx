import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

const formSchema = z
  .object({
    emailAddress: z.string().email({
      message: "! ایمیل نامعتبر",
    }),
    password: z.string().min(4, {
      message: "! رمز عبور الزامی است . رمز عبور باید حداقل چهار کاراکتر باشد",
    }),
    passwordConfirm: z.string().min(4, {
      message:
        "! رمز عبور تأییدی الزامی است . رمز عبور باید حداقل چهار کاراکتر باشد",
    }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "! رمزهای عبور مطابقت ندارند",
    path: ["passwordConfirm"],
  });

export const Login = () => {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailAddress: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const handleSubmit = (data: any) => {
    console.log(data);
  };

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
        <CardContent className="flex flex-col gap-8 md:mx-[4rem]">
          <Form {...form}>
            <form
              className="flex flex-col gap-8"
              onSubmit={form.handleSubmit(handleSubmit)}
            >
              <FormField
                control={form.control}
                name="emailAddress"
                render={({ field }) => {
                  return (
                    <FormItem className="grid gap-1">
                      <FormLabel>آدرس ایمیل</FormLabel>
                      <FormControl>
                        <Input
                          className="border-none bg-bgCard text-white"
                          type="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />{" "}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => {
                  return (
                    <FormItem className="grid gap-1">
                      <FormLabel>رمز عبور</FormLabel>
                      <FormControl>
                        <Input
                          className="border-none bg-bgCard text-white"
                          type="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />{" "}
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
                <span className="z-20 text-lg font-bold text-black">ورود</span>
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      <Card className="mb-10 mt-8 flex cursor-pointer items-center justify-between border-none bg-bgSecondary p-4 shadow-md transition-all ease-in-out hover:scale-[1.03] hover:shadow-xl">
        <img
          className="w-[6rem]  object-cover opacity-20"
          src="/7123025_logo_google_g_icon.png"
          alt="google-logo"
        />
        <div className=" text-xl text-textMuted">ورود با گوگل</div>
      </Card>
      <div className=" flex-row-reverse items-center gap-4 pb-12 text-center sm:flex ">
        <div className=" text-2xl text-textMuted">اکانتی ندارید؟</div>
        <button
          onClick={() => navigate("/signup")}
          className="text-lg text-button drop-shadow-glow  hover:scale-[1.1] hover:shadow-sm"
        >
          ثبت نام کنید
        </button>
      </div>
    </>
  );
};
