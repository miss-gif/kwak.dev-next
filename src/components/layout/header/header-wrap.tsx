"use client";

import HeaderBottom from "@/components/layout/header/header-bottom";
import HeaderTop from "@/components/layout/header/header-top";
import { useRef } from "react";

const HeaderWrap = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="sticky top-0 left-0 z-10 w-full bg-white dark:bg-black">
      <HeaderTop ref={inputRef} />
      <HeaderBottom inputRef={inputRef} />
    </div>
  );
};

export default HeaderWrap;
