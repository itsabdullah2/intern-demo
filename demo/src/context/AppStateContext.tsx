import { createContext, useState } from "react";

interface AppStateContextType {
  isDarkMode: boolean;
  handleThemeToggle: () => void;
}

export const AppStateContext = createContext<AppStateContextType | null>(null);

export const AppStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const handleThemeToggle = () => {
    setIsDarkMode((prev) => !prev);
  };

  const values: AppStateContextType = {
    isDarkMode,
    // Functions
    handleThemeToggle,
  };

  return (
    <AppStateContext.Provider value={values}>
      {children}
    </AppStateContext.Provider>
  );
};
