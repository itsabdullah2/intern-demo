import { LuPlus } from "react-icons/lu";
import useAppState from "../context/useAppState";

const AddBtn = () => {
  const { handlePopup } = useAppState();

  return (
    <button
      className="flex items-center gap-2 rounded-full bg-blue py-3 px-5 text-white font-medium hover:bg-dark-blue duration-200 cursor-pointer active:scale-95"
      onClick={handlePopup}
    >
      <LuPlus />
      Add
    </button>
  );
};

export default AddBtn;
