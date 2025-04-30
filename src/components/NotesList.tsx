import useAppState from "../context/useAppState";
import NoteItem from "./NoteItem";
import notFound from "../assets/not-found.svg";

const NotesList = () => {
  const { activeCategory, showOnlyCompleted, notes, searchValue } =
    useAppState();

  let filteredNotes =
    activeCategory === "all"
      ? notes
      : notes.filter((note) => note.category == activeCategory);

  if (showOnlyCompleted) {
    filteredNotes = filteredNotes.filter((note) => note.checked);
  } else {
    filteredNotes = [
      // Reorder the notes
      ...filteredNotes.filter((note) => !note.checked),
      ...filteredNotes.filter((note) => note.checked),
    ];
  }

  if (searchValue.trim()) {
    const lowerSearch = searchValue.toLowerCase();

    filteredNotes = filteredNotes.filter((note) =>
      note.title.toLowerCase().includes(lowerSearch)
    );
  }
  // Sort the notes by their date
  filteredNotes.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return filteredNotes.length > 0 ? (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-8">
      {filteredNotes.map((note) => (
        <NoteItem
          key={note.id}
          id={note.id}
          checked={note.checked}
          category={note.category}
          title={note.title}
          description={note.description}
          createdAt={note.createdAt}
        />
      ))}
    </div>
  ) : (
    <div className="w-96 mx-auto opacity-50">
      <img
        src={notFound}
        alt="Searching Illustration"
        className="w-full h-full"
      />
    </div>
  );
};

export default NotesList;
