import { createContext, useEffect, useState } from "react";
import { AppStateContextType, NoteItemType } from "../types";

export const AppStateContext = createContext<AppStateContextType | null>(null);

const getInitialNotes = (): NoteItemType[] => {
  const stored = localStorage.getItem("notes");

  return stored ? JSON.parse(stored) : [];
};

export const AppStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [showOnlyCompleted, setShowOnlyCompleted] = useState<boolean>(false);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [noteTitle, setNoteTitle] = useState<string>("");
  const [noteDescription, setNoteDescription] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("personal");
  const [notes, setNotes] = useState<NoteItemType[]>(getInitialNotes());
  const [editNoteId, setEditNoteId] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleThemeToggle = () => {
    setIsDarkMode((prev) => !prev);
  };
  const handlePopup = () => {
    setIsPopupOpen((prev) => !prev);
  };

  // Inputs function handlers
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const handleNoteTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNoteTitle(e.target.value);
  };
  const handleNoteDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setNoteDescription(e.target.value);
  };

  const toggleNoteChecked = (id: string) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id ? { ...note, checked: !note.checked } : note
      )
    );
  };

  const handleAddNote = () => {
    const noteData: NoteItemType = {
      id: Date.now().toString(),
      category: selectedCategory,
      title: noteTitle,
      description: noteDescription,
      checked: false,
      createdAt: new Date().toISOString(),
    };

    setNotes((prev) => [...prev, noteData]);
  };

  const handleSaveNote = () => {
    if (editNoteId) {
      handleEditNote(editNoteId, {
        title: noteTitle,
        category: selectedCategory,
        description: noteDescription,
      });
      setEditNoteId(null);
    } else {
      handleAddNote();
    }

    handleResetFields();
    setIsPopupOpen(false);
  };

  const handleResetFields = () => {
    setEditNoteId(null);
    setSelectedCategory("personal");
    setNoteTitle("");
    setNoteDescription("");
  };

  // Partial make all properties in T optional
  const handleEditNote = (id: string, newData: Partial<NoteItemType>) => {
    setNotes((prev) =>
      prev.map((note) => (note.id === id ? { ...note, ...newData } : note))
    );
  };
  const handleDeleteNote = (id: string) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  const startEditingNote = (note: NoteItemType) => {
    setEditNoteId(note.id);
    setSelectedCategory(note.category);
    setNoteTitle(note.title);
    setNoteDescription(note.description);
    setIsPopupOpen(true);
  };

  const values: AppStateContextType = {
    isDarkMode,
    searchValue,
    activeCategory,
    showOnlyCompleted,
    isPopupOpen,
    noteTitle,
    noteDescription,
    selectedCategory,
    notes,
    editNoteId,
    // Functions
    handleThemeToggle,
    handleSearchChange,
    setActiveCategory,
    setShowOnlyCompleted,
    handlePopup,
    handleNoteTitleChange,
    handleNoteDescriptionChange,
    setSelectedCategory,
    toggleNoteChecked,
    handleEditNote,
    handleDeleteNote,
    handleSaveNote,
    startEditingNote,
    setEditNoteId,
    handleResetFields,
  };

  return (
    <AppStateContext.Provider value={values}>
      {children}
    </AppStateContext.Provider>
  );
};
