export interface NoteItemType {
  id: string;
  category: string;
  title: string;
  description: string;
  checked: boolean;
  createdAt: string;
}

export interface AppStateContextType {
  isDarkMode: boolean;
  searchValue: string;
  activeCategory: string;
  showOnlyCompleted: boolean;
  isPopupOpen: boolean;
  noteTitle: string;
  noteDescription: string;
  selectedCategory: string;
  notes: NoteItemType[];
  editNoteId: string | null;
  // Functions
  handleThemeToggle: () => void;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setActiveCategory: React.Dispatch<React.SetStateAction<string>>;
  setShowOnlyCompleted: React.Dispatch<React.SetStateAction<boolean>>;
  handlePopup: () => void;
  handleNoteTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNoteDescriptionChange: (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  toggleNoteChecked: (id: string) => void;
  startEditingNote: (note: NoteItemType) => void;
  handleSaveNote: () => void;
  handleDeleteNote: (id: string) => void;
  handleEditNote: (id: string, newData: Partial<NoteItemType>) => void;
  setEditNoteId: React.Dispatch<React.SetStateAction<string | null>>;
  handleResetFields: () => void;
}
