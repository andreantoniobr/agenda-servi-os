"use client";

import Image from "next/image";

interface LogoProps {
  variant?: "normal" | "white";
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export default function Logo({
  variant = "normal",
  className = "",
  size = "md",
}: LogoProps) {
  const logoSrc =
    variant === "white"
      ? "/images/logo-white.svg"
      : "/images/logo.svg";

  const sizeClasses = {
    sm: "w-24 h-8",
    md: "w-32 h-10",
    lg: "w-40 h-12",
    xl: "w-48 h-14",
  };

  return (
    <div className={`inline-block relative ${sizeClasses[size]} ${className}`}>
      <Image
        src={logoSrc}
        alt="Logo Profissa"
        fill
        className="object-contain"
        sizes="(max-width: 768px) 100vw, 200px"
      />
    </div>
  );
}
