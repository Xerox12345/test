import { useViewContext } from "../../hooks/use-view-context";
import { ControlPanelMode } from "../../shared/shared.types";
import { HeaderComponentProps } from "./header.types";

export const HeaderComponent = ({ title }: HeaderComponentProps) => {
  const { mode, addMode } = useViewContext();

  return (
    <header>
      <div className="border-b-0 border-gray-400">
        <h1 className="px-4 pt-2 pb-2 text-2xl font-small text-black">
          Tuesday
        </h1>
      </div>
      <div className="flex justify-between w-full bg-white p-4 items-center border-b-0">
        <h1 className="text-4xl font-medium text-black">{title}</h1>
        <div className="views-button">
          <button
            onClick={() => {
              addMode(ControlPanelMode.VIEW);
            }}
            className={`button button-default rounded-l-md ${
              mode === ControlPanelMode.VIEW && "bg-slate-300"
            }`}
            type="button"
          >
            View
          </button>
          <button
            onClick={() => {
              addMode(ControlPanelMode.EDIT);
            }}
            className={`button button-default rounded-r-md ${
              mode === ControlPanelMode.EDIT && "bg-slate-300"
            }`}
            type="button"
          >
            Edit
          </button>
        </div>
        <div>icons...</div>
      </div>
    </header>
  );
};
