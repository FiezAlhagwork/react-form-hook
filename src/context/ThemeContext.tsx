import { createContext, useContext, useState, type ReactNode } from "react";

type userContextType = {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
};
const UserContext = createContext<userContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState("all");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export function User() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
