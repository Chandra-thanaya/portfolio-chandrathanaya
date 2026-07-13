import { useState } from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className, size = "md" }: LogoProps) => {
  const [showLogo, setShowLogo] = useState(false);

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  return (
    <>
      {/* Navbar Logo */}
      <img
        src="/logo.png"
        alt="Chandra Thanaya Logo"
        className={cn(
          "object-contain cursor-pointer select-none",
          sizeClasses[size],
          className
        )}
        onClick={() => setShowLogo(true)}
      />

      {/* Logo Preview */}
      {showLogo && (
        <div
          className="
            fixed
            inset-0
            z-[9999]
            bg-black/80
            backdrop-blur-md
            flex
            items-center
            justify-center
            p-8
          "
          onClick={() => setShowLogo(false)}
        >
          <img
            src="/logo.png"
            alt="Chandra Thanaya Logo"
            className="
              w-[500px]
              max-w-[90vw]
              max-h-[90vh]
              rounded-2xl
              shadow-2xl
              bg-white
              p-6
              cursor-default
              animate-[zoomIn_.25s_ease]
            "
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default Logo;