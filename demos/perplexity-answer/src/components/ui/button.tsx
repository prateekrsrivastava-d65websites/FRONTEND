import * as React from "react";
import { cn } from "../../lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "ghost" | "subtle" | "outline" | "dark";
  size?: "default" | "sm" | "icon" | "pill";
};

export function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "ui-button",
        `ui-button-${variant}`,
        `ui-button-${size}`,
        className,
      )}
      {...props}
    />
  );
}
