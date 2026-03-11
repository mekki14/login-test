"use client";

import * as React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const registerSchema = z
    .object({
        name: z.string().min(2, { message: "الاسم يجب أن يتكون من حرفين على الأقل" }),
        email: z.string().email({ message: "يرجى إدخال بريد إلكتروني صحيح" }),
        password: z.string().min(6, { message: "كلمة المرور يجب أن تتكون من 6 أحرف على الأقل" }),
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "كلمات المرور غير متطابقة",
        path: ["confirmPassword"],
    });

type RegisterFormValues = z.infer<typeof registerSchema>;

export default function RegisterPage() {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormValues>({
        resolver: zodResolver(registerSchema),
    });

    async function onSubmit(data: RegisterFormValues) {
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            console.log(data);
        }, 2000);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
        >
            <div className="flex flex-col gap-2 text-center rtl:text-right">
                <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                    إنشاء حساب جديد
                </h1>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    أدخل بياناتك لإنشاء حساب والبدء في استخدام المنصة
                </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-3 group">
                    <Label htmlFor="name">الاسم الكامل</Label>
                    <Input
                        id="name"
                        placeholder="أحمد محمد"
                        disabled={isLoading}
                        className="text-right rtl:text-right rtl:dir-rtl placeholder:text-right rtl:placeholder:text-right"
                        {...register("name")}
                    />
                    {errors.name && (
                        <p className="text-sm text-red-500">{errors.name.message}</p>
                    )}
                </div>

                <div className="space-y-3 group">
                    <Label htmlFor="email">البريد الإلكتروني</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        disabled={isLoading}
                        dir="ltr"
                        className="text-right rtl:text-left rtl:dir-ltr placeholder:text-right rtl:placeholder:text-right"
                        {...register("email")}
                    />
                    {errors.email && (
                        <p className="text-sm text-red-500">{errors.email.message}</p>
                    )}
                </div>

                <div className="space-y-3 group">
                    <Label htmlFor="password">كلمة المرور</Label>
                    <Input
                        id="password"
                        type="password"
                        disabled={isLoading}
                        dir="ltr"
                        className="text-right rtl:text-left rtl:dir-ltr"
                        {...register("password")}
                    />
                    {errors.password && (
                        <p className="text-sm text-red-500">{errors.password.message}</p>
                    )}
                </div>

                <div className="space-y-3 group">
                    <Label htmlFor="confirmPassword">تأكيد كلمة المرور</Label>
                    <Input
                        id="confirmPassword"
                        type="password"
                        disabled={isLoading}
                        dir="ltr"
                        className="text-right rtl:text-left rtl:dir-ltr"
                        {...register("confirmPassword")}
                    />
                    {errors.confirmPassword && (
                        <p className="text-sm text-red-500">
                            {errors.confirmPassword.message}
                        </p>
                    )}
                </div>

                <Button className="w-full !mt-8" type="submit" disabled={isLoading}>
                    {isLoading ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex items-center gap-2"
                        >
                            <div className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-50 border-t-transparent" />
                            <span>جاري إنشاء الحساب...</span>
                        </motion.div>
                    ) : (
                        "إنشاء حساب"
                    )}
                </Button>
            </form>

            <div className="text-center text-sm text-zinc-500 dark:text-zinc-400">
                لديك حساب بالفعل؟{" "}
                <Link
                    href="/login"
                    className="font-semibold text-zinc-900 transition-all duration-150 hover:text-primary hover:underline underline-offset-4 active:scale-95 inline-block dark:text-zinc-50 dark:hover:text-primary"
                >
                    تسجيل الدخول
                </Link>
            </div>
        </motion.div>
    );
}
