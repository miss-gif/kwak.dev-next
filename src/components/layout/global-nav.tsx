"use client";

import Inner from "@/components/layout/inner";
import { SearchIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // 현재 경로 감지
import { RefObject } from "react";

const navItems = [
  { href: "/", label: "전체" },
  { href: "/todos", label: "Todos" },
  { href: "/test", label: "Test" },
];

const GlobalNav = ({
  inputRef,
}: {
  inputRef: RefObject<HTMLInputElement | null>;
}) => {
  const pathname = usePathname(); // 현재 URL 가져오기

  const handleSearchClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="border-b border-b-slate-200">
      <Inner>
        <div className="flex items-center gap-8 py-2">
          <div
            className="flex justify-center items-center flex-col text-xs gap-1 cursor-pointer"
            onClick={handleSearchClick}
          >
            <SearchIcon size={18} />
            검색
          </div>
          <nav className="flex gap-8">
            {navItems.map(({ href, label }) => {
              const isActive = pathname === href;

              return (
                <Link
                  key={href}
                  href={href}
                  className={`text-center text-xs hover:underline  ${
                    isActive ? "font-bold" : "font-normal"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
      </Inner>
    </div>
  );
};

export default GlobalNav;
