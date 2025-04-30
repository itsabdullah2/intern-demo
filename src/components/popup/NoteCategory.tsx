import { useEffect, useRef, useState } from "react";
import { LuChevronDown } from "react-icons/lu";
import useAppState from "../../context/useAppState";

type Option = {
  name: string;
};

const options: Option[] = [
  { name: "personal" },
  { name: "home" },
  { name: "business" },
];

const NoteCategory = () => {
  const { selectedCategory, setSelectedCategory } = useAppState();
  const [open, setOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option: Option) => {
    setSelectedCategory(option.name);
    setOpen(false);
  };

  return (
    <div className="flex items-center">
      <span className="basis-32 text-[1.0625rem] font-medium text-navy">
        Select Category:
      </span>
      <div
        className="relative w-32 lg:w-40 xl:w-48 bg-light rounded-xl"
        ref={dropdownRef}
      >
        <button
          onClick={() => setOpen((prev) => !prev)}
          className={`w-full px-4 py-2 text-left rounded-md duration-150 focus:outline-none flex items-center justify-between cursor-pointer`}
        >
          <span className="flex items-center gap-2 first-letter:uppercase">
            {selectedCategory}
          </span>
          <LuChevronDown
            className={`ml-2 transition-transform ${
              open ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>

        {open && (
          <ul className="absolute z-10 mt-1 w-full bg-white border border-light rounded-md shadow-md">
            {options.map((option) => (
              <li
                key={option.name}
                onClick={() => handleSelect(option)}
                className={`px-4 py-2 cursor-pointer text-navy flex items-center gap-2 ${
                  selectedCategory === option.name ? "font-medium" : ""
                }`}
              >
                {option.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NoteCategory;
