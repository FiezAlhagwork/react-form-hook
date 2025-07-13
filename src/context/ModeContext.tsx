import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  type SetStateAction,
} from "react";

type modeType = "LIGHT" | "DARK"
type ModeContextType = {
  mode:modeType
  setMode: React.Dispatch<SetStateAction<modeType>>;
};
const ModeContext = createContext<ModeContextType | undefined>(undefined);
export const ModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode , setMode] = useState<modeType>("LIGHT")
  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export const Mode = () => {
    const context = useContext(ModeContext)
    if(!context){
        throw new Error("not ")
    }
    return context
}
