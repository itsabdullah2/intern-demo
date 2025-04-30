import useAppState from "../../context/useAppState";
import NoteCategory from "./NoteCategory";
import NoteDescription from "./NoteDescription";
import NoteTitle from "./NoteTitle";

const Popup = () => {
  const { handlePopup, handleResetFields, handleSaveNote, editNoteId } =
    useAppState();

  const handleClosePopup = () => {
    handlePopup();
    handleResetFields();
  };

  return (
    <div className="fixed top-1/2 left-1/2 -translate-1/2 -translate-y-1/2 z-30 bg-white p-5 rounded-xl w-[90vw] md:w-[600px] flex flex-col gap-10 fade-in">
      <NoteCategory />
      <NoteTitle />
      <NoteDescription />

      <div className="flex items-center gap-3 justify-end">
        <button
          className={`bg-light/70 w-28 py-2 rounded-md cursor-pointer hover:bg-light duration-200 text-navy`}
          onClick={handleClosePopup}
        >
          Cancel
        </button>
        <button
          className={`bg-dark-blue/90 w-28 py-2 rounded-md cursor-pointer hover:bg-dark-blue duration-200 text-white`}
          onClick={handleSaveNote}
        >
          {editNoteId ? "Save" : "Add"}
        </button>
      </div>
    </div>
  );
};

export default Popup;
