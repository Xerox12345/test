import { useContext } from "react";
import { ViewContext } from "../context/view-context/view-context";

export function useViewContext() {
  const context = useContext(ViewContext);
  if (!context) {
    throw new Error(
      "ViewContext must be used within a Control Panel Context Provider"
    );
  }

  return context;
}
