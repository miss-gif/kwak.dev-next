"use client";

import { Note } from "@/app/note/page";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useEffect, useState } from "react";

const ViewerNote = ({ note }: { note: Note }) => {
  const [title, setTitle] = useState(note?.title);
  const [content, setContent] = useState(note?.content);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    // Add save logic here
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTitle(note?.title);
    setContent(note?.content);
    setIsEditing(false);
  };

  const handleDelete = () => {
    // Add delete logic here
    setIsEditing(false);
  };

  useEffect(() => {
    setTitle(note?.title);
    setContent(note?.content);
    setIsEditing(false);
  }, [note]);

  return (
    <div className="w-full p-4 space-y-2">
      {isEditing ? (
        <div className="space-y-2 min-h-2/5">
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력하세요."
          />
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="내용을 입력하세요."
            className="resize-none h-96"
            rows={10}
          />
        </div>
      ) : (
        <div className="space-y-2 min-h-2/5">
          <h1 className="text-2xl font-bold">{note?.title}</h1>
          <p>{note?.content}</p>
        </div>
      )}

      <div className="flex gap-2">
        {isEditing ? (
          <>
            <Button onClick={handleSave}>저장</Button>
            <Button variant={"outline"} onClick={handleCancel}>
              취소
            </Button>
          </>
        ) : (
          <>
            <Button onClick={() => setIsEditing(true)}>수정</Button>
            <Button variant={"outline"} onClick={handleDelete}>
              삭제
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default ViewerNote;
