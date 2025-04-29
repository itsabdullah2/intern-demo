import { createContext, useState } from "react";
import { AppStateContextType, NoteItemType } from "../types";
import { notesData } from "../components/NotesList";

export const AppStateContext = createContext<AppStateContextType | null>(null);

export const AppStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  // const [notesArray, setNotesArray] = useState<NoteItemType[]>([]);
  const [completedNotesIds, setCompletedNotesIds] = useState<string[]>([]);
  const [showOnlyCompleted, setShowOnlyCompleted] = useState<boolean>(false);

  const handleThemeToggle = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Inputs function handlers
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const values: AppStateContextType = {
    isDarkMode,
    searchValue,
    activeCategory,
    completedNotesIds,
    showOnlyCompleted,
    // Functions
    handleThemeToggle,
    handleSearchChange,
    setActiveCategory,
    setCompletedNotesIds,
    setShowOnlyCompleted,
  };

  return (
    <AppStateContext.Provider value={values}>
      {children}
    </AppStateContext.Provider>
  );
};
