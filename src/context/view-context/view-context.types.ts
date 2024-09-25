import { ControlPanelMode } from "../../shared/shared.types";

export interface ViewContextProviderProps {
  children: React.ReactNode;
}

export type CreateViewContext = {
  mode: ControlPanelMode;
  addMode: (mode: ControlPanelMode) => void;
};
