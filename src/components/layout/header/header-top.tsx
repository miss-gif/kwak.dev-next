"use client";

import { LanguageDialog } from "@/components/language-dialog";
import Inner from "@/components/layout/inner";
import { LoginAlertDialog } from "@/components/login-alert-dialog";
import { Input } from "@/components/ui/input";
import Cookies from "js-cookie";
import Link from "next/link";
import { forwardRef, useEffect, useState } from "react";

const NAV_ITEMS = {
  ko: [
    { href: "/readme", label: "소개" },
    { href: "", label: "커뮤니티" },
  ],
  en: [
    { href: "/readme", label: "Introduction" },
    { href: "", label: "Community" },
  ],
  ja: [
    { href: "/readme", label: "紹介" },
    { href: "", label: "コミュニティ" },
  ],
};

const HeaderTop = forwardRef<
  HTMLInputElement,
  React.HTMLAttributes<HTMLDivElement>
>((_, ref) => {
  const [currentLanguage, setCurrentLanguage] = useState("ko"); // 쿠키에서 가져온 현재 언어

  const nextLocale = Cookies.get("NEXT_LOCALE");

  useEffect(() => {
    // 쿠키에서 현재 언어 불러오기
    const savedLocale = nextLocale || "ko";
    setCurrentLanguage(savedLocale);
  }, [nextLocale]); // 쿠키가 변경될 때마다 언어 업데이트

  return (
    <header>
      <Inner>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 w-full">
            <h1 className="text-xl font-bold">
              <Link href={"/"}>Kwak.dev</Link>
            </h1>

            <ul className="flex gap-4">
              {NAV_ITEMS[currentLanguage]?.map((item) => (
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

HeaderTop.displayName = "Header"; // forwardRef 사용 시 필요한 displayName 설정

export default HeaderTop;
