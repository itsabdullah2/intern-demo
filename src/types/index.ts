export interface NoteItemType {
  category: string;
  title: string;
  description: string;
}

export interface AppStateContextType {
  isDarkMode: boolean;
  handleThemeToggle: () => void;
  searchValue: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  activeCategory: string;
  setActiveCategory: React.Dispatch<React.SetStateAction<string>>;
  completedNotesIds: string[];
  setCompletedNotesIds: React.Dispatch<React.SetStateAction<string[]>>;
  showOnlyCompleted: boolean;
  setShowOnlyCompleted: React.Dispatch<React.SetStateAction<boolean>>;
}
