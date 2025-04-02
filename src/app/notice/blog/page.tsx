import { CreateEditor } from "@/app/notice/components/editor/create-editor";
import React from "react";

function Page() {
  return (
    <div className="w-[920px] h-screen bg-[#f9f9f9] border-r border-[#d6d6d6] flex items-start justify-center">
      <CreateEditor />
    </div>
  );
}

export default Page;
