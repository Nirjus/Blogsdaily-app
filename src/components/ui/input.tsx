import * as React from "react";

import { cn } from "@/lib/utils";

interface CustomInputProps extends React.ComponentProps<"input"> {
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  borderStyle?: string;
}

const Input = React.forwardRef<HTMLInputElement, CustomInputProps>(
  ({ className, leftIcon, rightIcon, borderStyle, type, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex items-center border-2 border-stone-300 space-x-1 bg-white rounded-lg",
          borderStyle
        )}
      >
        {leftIcon && leftIcon}
        <input
          type={type}
          className={cn(
            "flex flex-1 h-11 w-full rounded-md border-none bg-white px-3 py-2 text-base ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-slate-950 placeholder:text-slate-500 outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-slate-950 dark:file:text-slate-50 dark:placeholder:text-slate-400 ",
            className
          )}
          ref={ref}
          {...props}
        />
        {rightIcon && rightIcon}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
