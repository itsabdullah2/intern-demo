import { LuSearch } from "react-icons/lu";
import useAppState from "../context/useAppState";

const SearchBar = () => {
  const { searchValue, handleSearchChange } = useAppState();

  return (
    <div
      className={`relative flex-1 bg-light px-5 rounded-xl flex items-center gap-2`}
    >
      <LuSearch className={`text-navy`} />
      <label htmlFor="search" className="hidden"></label>
      <input
        type="search"
        id="search"
        placeholder="Search"
        value={searchValue}
        onChange={handleSearchChange}
        className="w-full focus:outline-none py-4 focus:placeholder:opacity-0 placeholder:duration-200"
      />
    </div>
  );
};

export default SearchBar;
