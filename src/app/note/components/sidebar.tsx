import { Note } from "@/app/note/page";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  notes: Note[];
  setIsCreating: (isCreating: boolean) => void;
  setActiveNoteId: (id: number | null) => void;
}

const Sidebar = ({ notes, setIsCreating, setActiveNoteId }: SidebarProps) => {
  const handleCreateNote = () => {
    setIsCreating(true);
    setActiveNoteId(null);
  };

  const handleSelectNote = (id: number | null) => {
    setActiveNoteId(id);
    setIsCreating(false);
  };

  return (
    <aside className="min-w-64 h-[calc(100vh-64px)] bg-gray-100 p-2 border-gray-300 overflow-y-scroll space-y-2">
      <Button className="w-full" onClick={handleCreateNote}>
        + 새로운 노트
      </Button>
      <ul className="space-y-1">
        {notes.map(({ id, title }) => (
          <li key={id}>
            <Button variant="ghost" onClick={() => handleSelectNote(id)}>
              {title}
            </Button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
