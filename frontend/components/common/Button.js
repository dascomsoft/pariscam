import Link from "next/link";
import clsx from "clsx";

export default function Button({ children, href, onClick, variant = "primary", size = "md", className = "", type = "button", disabled = false, ...props }) {
  const baseClasses = "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variantClasses = {
    primary: "bg-pariscam-blue text-white hover:bg-pariscam-blueDark focus:ring-pariscam-blue shadow-md hover:shadow-lg",
    secondary: "bg-pariscam-green text-white hover:bg-pariscam-greenDark focus:ring-pariscam-green shadow-md hover:shadow-lg",
    outline: "border-2 border-pariscam-blue text-pariscam-blue hover:bg-pariscam-blue hover:text-white focus:ring-pariscam-blue",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#1DA851] focus:ring-[#25D366] shadow-md hover:shadow-lg",
  };
  const sizeClasses = { sm: "px-4 py-2 text-sm", md: "px-6 py-3 text-base", lg: "px-8 py-4 text-lg" };
  const classes = clsx(baseClasses, variantClasses[variant], sizeClasses[size], disabled && "opacity-50 cursor-not-allowed", className);
  if (href) return <Link href={href} className={classes} {...props}>{children}</Link>;
  return <button type={type} onClick={onClick} disabled={disabled} className={classes} {...props}>{children}</button>;
}
