
import { WidgetComponent } from "../components/widget/widget";

export const HomePage = () => {
  return (
    <div>
      <div className="mb-4 flex gap-4">
        <div className="flex-1">
          <WidgetComponent title="Calendar" children={<p>empty widget</p>} />
        </div>
      </div>

      <div className="mb-4 flex gap-4">
        <div className="basis-8/12">
          <WidgetComponent title="Chart" children={<p>empty widget</p>} />
        </div>
        <div className="basis-full">
          <WidgetComponent
            title="Files Gallery"
            children={<p>empty widget</p>}
          />
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <WidgetComponent title="Gantt" children={<p>empty widget</p>} />
        </div>
      </div>
    </div>

  );
};
