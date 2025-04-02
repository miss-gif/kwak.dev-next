import Header from "@/app/note/components/header";
import NewNote from "@/app/note/components/new-note";
import Sidebar from "@/app/note/components/sidebar";

export type Note = {
  id: number;
  title: string;
  content: string;
};

const notes = [
  { id: 1, title: "노트1", content: "노트1 내용" },
  { id: 2, title: "노트2", content: "노트2 내용" },
  { id: 3, title: "노트3", content: "노트3 내용" },
] as Note[];

export default function Page() {
  return (
    <div className="w-full flex flex-col ">
      <Header />
      <div className="grow flex">
        <Sidebar notes={notes} />
        <NewNote />
      </div>
    </div>
  );
}
