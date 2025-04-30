import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import useAppState from "../context/useAppState";
import { NoteItemType } from "../types";
import {
  getBgCategoryColor,
  getTxtCategoryColor,
} from "../utils/getCategoryColor";

const NoteItem = ({
  id,
  category,
  title,
  description,
  checked,
  createdAt,
}: NoteItemType) => {
  const { toggleNoteChecked, startEditingNote, handleDeleteNote } =
    useAppState();

  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const handleEdit = () => {
    const data = {
      id,
      category,
      title,
      description,
      checked,
      createdAt,
    };
    startEditingNote(data);
  };

  return (
    <div className="bg-white py-5 px-6 rounded-xl flex flex-col gap-3 relative min-h-52 shadow-md fade-in">
      <div className="flex items-center justify-between">
        {/* Activities Section */}
        <div
          className="py-2 px-4 text-[0.875rem] font-medium rounded-full border first-letter:uppercase"
          style={{
            backgroundColor: getBgCategoryColor(category),
            color: getTxtCategoryColor(category),
            borderColor: getTxtCategoryColor(category),
          }}
        >
          {category}
        </div>
        <div className="flex items-center gap-5">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => toggleNoteChecked(id)}
          />
          <button
            className={`cursor-pointer text-gray-text hover:text-navy duration-200`}
            onClick={handleEdit}
          >
            <MdEdit size={22} />
          </button>
          <button
            className={`cursor-pointer text-gray-text hover:text-navy duration-200`}
            onClick={() => handleDeleteNote(id)}
          >
            <RiDeleteBin6Fill size={22} />
          </button>
        </div>
      </div>
      {/* Info Section */}
      <div className="flex flex-col">
        <h3
          className={`text-navy font-bold text-[1.5rem] ${
            checked ? "line-through" : ""
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-gray-text font-[400] text-[1rem] ${
            checked ? "line-through" : ""
          }`}
        >
          {description}
        </p>
      </div>

      <div className="absolute bottom-5 right-3 text-gray-accent">
        {day}.{month}.{year}
      </div>
    </div>
  );
};

export default NoteItem;
