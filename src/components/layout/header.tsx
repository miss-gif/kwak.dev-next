import Inner from "@/components/layout/inner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const NAV_ITEMS = [
  { href: "", label: "소개" },
  { href: "", label: "커뮤니티" },
];

const Header = () => {
  return (
    <header className="border-b border-b-slate-200">
      <Inner>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 w-full">
            <h1 className="text-xl font-bold">Kwak.dev</h1>

            <ul className="flex gap-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>

            <div className="flex-1">
              <Input className="w-full" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="text-sm">
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
};

export default Header;
