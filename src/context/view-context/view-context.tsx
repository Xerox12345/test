import { createContext, useState } from "react";
import { ControlPanelMode } from "../../shared/shared.types";
import {
  CreateViewContext,
  ViewContextProviderProps,
} from "./view-context.types";

export const ViewContext = createContext<CreateViewContext | null>(null);

export default function ControlPanelContextProvider({
  children,
}: ViewContextProviderProps) {
  const storage = localStorage.getItem("mode") as ControlPanelMode;
  const [mode, setMode] = useState<ControlPanelMode>(
    storage || ControlPanelMode.VIEW
  );

  const addMode = (mode: ControlPanelMode) => {
    setMode(() => {
      localStorage.setItem("mode", mode);
      return mode;
    });
  };

  return (
    <ViewContext.Provider
      value={{
        mode,
        addMode,
      }}
    >
      {children}
    </ViewContext.Provider>
  );
}
