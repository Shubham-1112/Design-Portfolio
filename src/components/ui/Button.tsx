import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  icon?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  ariaLabel?: string;
}

export default function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
  icon = false,
  onClick,
  type = "button",
  disabled = false,
  ariaLabel,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ocean-400 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-gradient-ocean text-white shadow-glass hover:shadow-card-hover hover:-translate-y-0.5 active:translate-y-0",
    secondary:
      "bg-white text-ink-800 border border-surface-300 shadow-elevated hover:border-ocean-300 hover:shadow-card-hover hover:-translate-y-0.5",
    ghost:
      "text-ink-600 hover:text-ocean-600 hover:bg-ocean-50",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {children}
      {icon && (
        <HiArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`group ${classes}`} aria-label={ariaLabel} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`group ${classes} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
