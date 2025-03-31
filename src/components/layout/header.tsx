"use client";

import { LanguageDialog } from "@/components/language-dialog";
import Inner from "@/components/layout/inner";
import { LoginAlertDialog } from "@/components/login-alert-dialog";
import { LoginDialog } from "@/components/login-dialog";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { forwardRef } from "react";

const NAV_ITEMS = [
  { href: "/readme", label: "소개" },
  { href: "", label: "커뮤니티" },
];

const Header = forwardRef<
  HTMLInputElement,
  React.HTMLAttributes<HTMLDivElement>
>((_, ref) => {
  return (
    <header>
      <Inner>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 w-full">
            <h1 className="text-xl font-bold">
              <Link href={"/"}>Kwak.dev</Link>
            </h1>

            <ul className="flex gap-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>

            <div className="flex-1">
              <Input className="w-full" ref={ref} />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <LanguageDialog />
            <LoginAlertDialog />
          </div>
        </div>
      </Inner>
    </header>
  );
});

Header.displayName = "Header"; // forwardRef 사용 시 필요한 displayName 설정

export default Header;
