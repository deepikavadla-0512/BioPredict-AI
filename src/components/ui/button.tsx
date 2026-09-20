import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[rgba(2,31,53,0.3)] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[rgba(2,31,53,1)] hover:bg-[rgba(2,31,53,0.9)] text-white shadow-sm",
        destructive:
          "bg-red-700 hover:bg-red-800 text-white",
        outline:
          "border border-[rgba(2,31,53,0.2)] dark:border-[rgba(255,255,255,0.1)] bg-white dark:bg-[rgba(2,31,53,0.2)] text-[rgba(2,31,53,1)] dark:text-white hover:bg-[rgba(2,31,53,0.05)]",
        secondary:
          "bg-[rgba(2,31,53,0.1)] text-[rgba(2,31,53,1)] hover:bg-[rgba(2,31,53,0.15)] dark:bg-[rgba(255,255,255,0.1)] dark:text-white",
        ghost: 
          "hover:bg-[rgba(2,31,53,0.05)] text-[rgba(2,31,53,1)] dark:text-white dark:hover:bg-[rgba(255,255,255,0.1)]",
        link: 
          "text-[rgba(2,31,53,1)] dark:text-white underline-offset-4 hover:underline",
      },
      size: {
        default: "h-8 px-3 py-1 text-sm",
        sm: "h-7 rounded-md px-2 text-xs",
        lg: "h-9 rounded-md px-6",
        icon: "h-8 w-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "sm",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
