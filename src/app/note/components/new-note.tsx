"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

interface NewNoteProps {
  setIsCreating: (isCreating: boolean) => void;
}

const NewNote = ({ setIsCreating }: NewNoteProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSave = () => {
    console.log("Note saved:", { title, content });
    setIsCreating(false); // Close the new note editor after saving
  };

  const handleCancel = () => {
    setTitle(""); // Clear the title input
    setContent(""); // Clear the content input
    setIsCreating(false); // Close the new note editor without saving
  };

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

      <Button className="w-full" onClick={handleSave}>
        저장
      </Button>
      <Button className="w-full" onClick={handleCancel} variant={"outline"}>
        취소
      </Button>
    </div>
  );
};

export default NewNote;
