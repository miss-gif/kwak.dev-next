"use client";

import GlobalNav from "@/components/layout/header/global-nav";
import Header from "@/components/layout/header/header";
import React, { useRef } from "react";

const HeaderWrap = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="sticky top-0 left-0 z-10 w-full bg-white dark:bg-black">
      <Header ref={inputRef} />
      <GlobalNav inputRef={inputRef} />
    </div>
  );
};

export default HeaderWrap;
