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
import { Checkbox } from "@/components/ui/checkbox";

const loginSchema = z.object({
    email: z.string().email({ message: "يرجى إدخال بريد إلكتروني صحيح" }),
    password: z.string().min(6, { message: "كلمة المرور يجب أن تتكون من 6 أحرف على الأقل" }),
    rememberMe: z.boolean().default(false).optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            rememberMe: false,
        },
    });

    const rememberMe = watch("rememberMe");

    async function onSubmit(data: LoginFormValues) {
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
                    تسجيل الدخول
                </h1>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    أدخل بريدك الإلكتروني وكلمة المرور للوصول إلى حسابك
                </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="space-y-6">
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
                        <div className="flex items-center justify-between">
                            <Label htmlFor="password">كلمة المرور</Label>
                            <Link
                                href="/forgot-password"
                                className="text-sm font-medium text-zinc-900 transition-colors duration-150 hover:text-primary hover:underline underline-offset-4 dark:text-zinc-50 dark:hover:text-primary"
                            >
                                نسيت كلمة المرور؟
                            </Link>
                        </div>
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
                    <div className="flex items-center space-x-2 space-x-reverse">
                        <Checkbox
                            id="rememberMe"
                            checked={rememberMe}
                            onCheckedChange={(checked) => setValue("rememberMe", checked as boolean)}
                        />
                        <Label
                            htmlFor="rememberMe"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            تذكرني
                        </Label>
                    </div>
                </div>

                <Button className="w-full" type="submit" disabled={isLoading}>
                    {isLoading ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex items-center gap-2"
                        >
                            <div className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-50 border-t-transparent" />
                            <span>جاري تسجيل الدخول...</span>
                        </motion.div>
                    ) : (
                        "تسجيل الدخول"
                    )}
                </Button>
            </form>

            <div className="text-center text-sm text-zinc-500 dark:text-zinc-400">
                ليس لديك حساب؟{" "}
                <Link
                    href="/register"
                    className="font-semibold text-zinc-900 transition-all duration-150 hover:text-primary hover:underline underline-offset-4 active:scale-95 inline-block dark:text-zinc-50 dark:hover:text-primary"
                >
                    حساب جديد
                </Link>
            </div>
        </motion.div>
    );
}
