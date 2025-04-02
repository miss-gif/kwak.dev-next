"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";

const ViewerNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="w-full p-4 space-y-2">
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목을 입력하세요"
      />

      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="내용을 입력하세요"
        className="resize-none h-96"
        rows={10}
      />

      <Button className="w-full">저장하기</Button>
    </div>
  );
};

export default ViewerNote;
