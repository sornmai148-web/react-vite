"use client";

import LogoImg from "@/assets/news-logo.png";
import { Link } from "@tanstack/react-router";

export const Logo = () => {
  return (
    <Link
      to="/"
      onClick={() => {
        window?.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <img
        src={LogoImg}
        accessKey="new-logo"
        alt="news-logo.png"
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-contain w-20 h-12 sm:w-30 sm:h-16"
      />
    </Link>
  );
};
