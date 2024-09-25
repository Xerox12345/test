import { ControlPanelMode } from "../../shared/shared.types";
import { ControlPanelViewComponent } from "./control-panel-view/control-panel-view";
import { ControlPanelEditComponent } from "./control-panel-edit/control-panel-edit";
import { useViewContext } from "../../hooks/use-view-context";


export const ControlPanelComponent = () => {
  const { mode } = useViewContext();

  console.log(mode)

  const switcher = (m: ControlPanelMode) => {
    switch (m) {
      case ControlPanelMode.EDIT:
        return <ControlPanelEditComponent />;
        break;
      case ControlPanelMode.VIEW:
        return <ControlPanelViewComponent />;
        break;
      default:
        return <ControlPanelViewComponent />;
    }
  };

  return <div className="border-b-0 bg-white p-4">{switcher(mode)}</div>;
};
