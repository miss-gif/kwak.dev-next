"use client";

import Inner from "@/components/layout/inner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GlobeIcon } from "lucide-react";
import Link from "next/link";
import { forwardRef } from "react";

const NAV_ITEMS = [
  { href: "", label: "소개" },
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
            <Button variant="ghost" className="text-sm">
              <GlobeIcon />
              한국어
            </Button>
            <Button variant="default" className="text-sm">
              로그인
            </Button>
          </div>
        </div>
      </Inner>
    </header>
  );
});

Header.displayName = "Header"; // forwardRef 사용 시 필요한 displayName 설정

export default Header;
