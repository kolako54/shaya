import * as z from "zod";

export const SignupformSchema = z
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

export const LoginformSchema = z.object({
  emailAddress: z.string().email({
    message: "! ایمیل نامعتبر",
  }),
  password: z.string().min(4, {
    message: "! رمز عبور الزامی است . رمز عبور باید حداقل چهار کاراکتر باشد",
  }),
});
