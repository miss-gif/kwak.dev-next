import { Note } from "@/app/note/page";
import { Button } from "@/components/ui/button";

const Sidebar = ({ notes }: { notes: Note[] }) => {
  return (
    <aside className="min-w-64 h-[calc(100vh-64px)] bg-gray-100 p-2 border-gray-300 overflow-y-scroll space-y-2">
      <Button className="w-full">+ 새로운 노트</Button>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.title}</li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
