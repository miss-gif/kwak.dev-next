"use client";

import Inner from "@/components/layout/inner";
import { SearchIcon } from "lucide-react";
import Link from "next/link";
import { RefObject } from "react";

const navItems = [
  { href: "/", label: "전체" },
  { href: "/todos", label: "Todos" },
];

const GlobalNav = ({
  inputRef,
}: {
  inputRef: RefObject<HTMLInputElement | null>; // 🔥 null 허용
}) => {
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
            className="flex justify-center items-center flex-col text-xs cursor-pointer gap-1"
            onClick={handleSearchClick}
          >
            <SearchIcon size={18} />
            검색
          </div>
          <nav className="flex gap-8">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="hover:underline text-center text-xs"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </Inner>
    </div>
  );
};

export default GlobalNav;
