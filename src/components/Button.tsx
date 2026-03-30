interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "px-6 py-3 rounded-lg font-medium transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-gradient-to-r from-[#a78bfa] to-[#60a5fa] text-white glow-sm hover:brightness-110",
    outline:
      "border border-white/15 text-white hover:border-[#a78bfa]/50 hover:shadow-[0_0_20px_rgba(167,139,250,0.1)]",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
