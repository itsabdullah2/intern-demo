import useAppState from "../../context/useAppState";

const NoteTitle = () => {
  const { noteTitle, handleNoteTitleChange } = useAppState();

  return (
    <div className="flex items-center">
      <label
        htmlFor="title"
        className="basis-32 text-[1.0625rem] font-medium text-navy"
      >
        Note Title:
      </label>
      <input
        type="text"
        id="title"
        placeholder="Note title"
        value={noteTitle}
        onChange={handleNoteTitleChange}
        className="py-2 px-3 rounded-xl focus:outline-none placeholder:duration-200 focus:placeholder:opacity-0 bg-light flex-1"
      />
    </div>
  );
};

export default NoteTitle;
