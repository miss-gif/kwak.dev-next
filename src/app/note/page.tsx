"use client";

import EmptyNote from "@/app/note/components/empty-note";
import Header from "@/app/note/components/header";
import NewNote from "@/app/note/components/new-note";
import Sidebar from "@/app/note/components/sidebar";
import ViewerNote from "@/app/note/components/viewer-note";
import { useState, useMemo, useEffect } from "react";
import { supabase } from "../../../utils/supabase/client";
import { Database } from "../../../types_db";

export default function Page() {
  const [activeNoteId, setActiveNoteId] = useState<number | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [notes, setNotes] = useState<
    Database["public"]["Tables"]["note"]["Row"][]
  >([]);

  const fetchNotes = async () => {
    const { data, error } = await supabase.from("note").select("*");
    if (error) {
      console.error("Error fetching notes:", error);
      return;
    } else {
      setNotes(data || []);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const activeNote = useMemo(
    () =>
      notes.find((note) => note.id === activeNoteId) ?? {
        id: null,
        title: "",
        content: "",
      },
    [activeNoteId, notes]
  );

  const renderContent = () => {
    if (isCreating) {
      return (
        <NewNote
          fetchNotes={fetchNotes}
          setIsCreating={setIsCreating}
          setActiveNoteId={setActiveNoteId}
        />
      );
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
