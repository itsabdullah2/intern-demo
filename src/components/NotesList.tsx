import useAppState from "../context/useAppState";
import { NoteItemType } from "../types";
import NoteItem from "./NoteItem";

interface Note extends NoteItemType {
  id: string;
}

export const notesData: Note[] = [
  {
    id: "1",
    title: "Design mockups",
    category: "business",
    description: "note description",
  },
  {
    id: "2",
    title: "React component",
    category: "personal",
    description: "note description",
  },
  {
    id: "3",
    title: "Color scheme",
    category: "home",
    description: "note description",
  },
  {
    id: "4",
    title: "Deployment script",
    category: "business",
    description: "note description",
  },
];

const NotesList = () => {
  const { activeCategory, completedNotesIds, showOnlyCompleted } =
    useAppState();

  let filteredNotes =
    activeCategory === "all"
      ? notesData
      : notesData.filter((note) => note.category == activeCategory);

  if (showOnlyCompleted) {
    filteredNotes = filteredNotes.filter((note) =>
      completedNotesIds.includes(note.id)
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-8">
      {filteredNotes.map((note) => (
        <NoteItem
          key={note.id}
          id={note.id}
          category={note.category}
          title={note.title}
          description={note.description}
        />
      ))}
    </div>
  );
};

export default NotesList;
