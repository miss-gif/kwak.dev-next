"use client";

import EmptyNote from "@/app/note/components/empty-note";
import Header from "@/app/note/components/header";
import NewNote from "@/app/note/components/new-note";
import Sidebar from "@/app/note/components/sidebar";
import ViewerNote from "@/app/note/components/viewer-note";
import { useState, useMemo } from "react";

export type Note = {
  id: number | null;
  title: string;
  content: string;
};

const notes: Note[] = [
  { id: 1, title: "노트1", content: "노트1 내용" },
  { id: 2, title: "노트2", content: "노트2 내용" },
  { id: 3, title: "노트3", content: "노트3 내용" },
];

export default function Page() {
  const [activeNoteId, setActiveNoteId] = useState<number | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const activeNote = useMemo(
    () =>
      notes.find((note) => note.id === activeNoteId) ?? {
        id: null,
        title: "",
        content: "",
      },
    [activeNoteId]
  );

  const renderContent = () => {
    if (isCreating) {
      return <NewNote setIsCreating={setIsCreating} />;
    }
    if (activeNoteId) {
      return <ViewerNote note={activeNote} />;
    }
    return <EmptyNote />;
  };

  return (
    <div className="w-full flex flex-col">
      <Header />
      <div className="grow flex">
        <Sidebar
          notes={notes}
          setIsCreating={setIsCreating}
          setActiveNoteId={setActiveNoteId}
          activeNoteId={activeNoteId}
        />
        {renderContent()}
      </div>
    </div>
  );
}
