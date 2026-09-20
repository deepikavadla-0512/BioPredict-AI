"use client";

import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-white group-[.toaster]:text-[#1a365d] group-[.toaster]:border-2 group-[.toaster]:border-[#1a365d] group-[.toaster]:shadow-md group-[.toaster]:rounded-none",
          description: "group-[.toast]:text-[#4a5568] group-[.toast]:font-medium",
          actionButton:
            "group-[.toast]:bg-[#1a365d] group-[.toast]:text-white group-[.toast]:rounded-none group-[.toast]:font-semibold group-[.toast]:px-4",
          cancelButton:
            "group-[.toast]:bg-gray-100 group-[.toast]:text-[#1a365d] group-[.toast]:rounded-none group-[.toast]:border group-[.toast]:border-[#1a365d] group-[.toast]:font-semibold",
          success: "group-[.toast]:border-l-4 group-[.toast]:border-l-green-700",
          error: "group-[.toast]:border-l-4 group-[.toast]:border-l-red-700",
          warning: "group-[.toast]:border-l-4 group-[.toast]:border-l-yellow-700",
          info: "group-[.toast]:border-l-4 group-[.toast]:border-l-blue-700",
        },
        duration: 4000,
      }}
      {...props}
    />
  );
};

export { Toaster };
