import Inner from "@/components/layout/inner";
import { SearchIcon } from "lucide-react";
import Link from "next/link";

const navItems = [
  { href: "/", label: "전체" },
  { href: "/projects", label: "프로젝트" },
  { href: "/interviews", label: "인터뷰" },
  { href: "/timeline", label: "타임라인" },
  { href: "/gallery", label: "갤러리" },
  { href: "/stats", label: "통계" },
  { href: "/board", label: "게시판" },
  { href: "/attendance", label: "출석체크" },
  { href: "/points", label: "포인트" },
  { href: "/preview", label: "프리뷰" },
];

const GlobalNav = () => {
  return (
    <div className="border-b border-b-slate-200">
      <Inner>
        <div className="flex items-center gap-8 py-2">
          <div className="flex justify-center items-center flex-col text-xs font-bold text-slate-500 hover:text-slate-900 cursor-pointer">
            <SearchIcon />
            검색
          </div>
          <nav className="flex gap-8">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="hover:underline text-center"
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
