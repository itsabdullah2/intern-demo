import useAppState from "../../context/useAppState";

const NoteDescription = () => {
  const { noteDescription, handleNoteDescriptionChange } = useAppState();

  return (
    <div className="flex items-center">
      <label
        htmlFor="description"
        className="basis-32 text-[1.0625rem] font-medium text-navy"
      >
        Note Description:
      </label>
      <textarea
        id="description"
        placeholder="Note description"
        value={noteDescription}
        onChange={handleNoteDescriptionChange}
        maxLength={200}
        className="py-2 px-3 rounded-xl focus:outline-none placeholder:duration-200 focus:placeholder:opacity-0 bg-light flex-1 resize-none h-32"
      />
    </div>
  );
};

export default NoteDescription;
