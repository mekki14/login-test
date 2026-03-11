import * as React from "react";

import { cn } from "@/lib/utils";

// Exclude standard size from HTML input properties if needed, but standard is fine
export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> { }


const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    "w-full bg-transparent border border-zinc-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-sm text-zinc-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-200 ease-in-out hover:border-zinc-400 dark:hover:border-zinc-600 focus:-translate-y-0.5 focus:shadow-sm focus:shadow-primary/20 placeholder:text-zinc-500",
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Input.displayName = "Input";

export { Input };

