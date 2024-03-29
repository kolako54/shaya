import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z
  .object({
    emailAddress: z.string().email({
      message: "! ایمیل نامعتبر",
    }),
    userName: z
      .string()
      .min(2, {
        message: "! نام الزامی است . نام باید حداقل دو کاراکتر باشد",
      })
      .max(30),
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

export const MainForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: "",
      emailAddress: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const handleSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-8"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <FormField
          control={form.control}
          name="userName"
          render={({ field }) => {
            return (
              <FormItem className="grid gap-1">
                <FormLabel>نام</FormLabel>
                <FormControl>
                  <Input
                    className="border-none bg-card-color text-white"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="emailAddress"
          render={({ field }) => {
            return (
              <FormItem className="grid gap-1">
                <FormLabel>آدرس ایمیل</FormLabel>
                <FormControl>
                  <Input
                    className="border-none bg-card-color text-white"
                    type="emial"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => {
            return (
              <FormItem className="grid gap-1">
                <FormLabel>رمز عبور</FormLabel>
                <FormControl>
                  <Input
                    className="border-none bg-card-color text-white"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="passwordConfirm"
          render={({ field }) => {
            return (
              <FormItem className="grid gap-1">
                <FormLabel>رمز عبور مجدد</FormLabel>
                <FormControl>
                  <Input
                    className="border-none bg-card-color text-white"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <Button variant="primary" size="lg">
          ثبت نام
        </Button>
      </form>
    </Form>
  );
};
