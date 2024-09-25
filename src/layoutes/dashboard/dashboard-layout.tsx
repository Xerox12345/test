import ViewContextProvider from "../../context/view-context/view-context";
import { ControlPanelComponent } from "../../components/control-panel/control-panel";
import { HeaderComponent } from "../../components/header/header";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex flex-col">
      <div>
        <ViewContextProvider>
          <HeaderComponent title="Book Deliveries" />
          <ControlPanelComponent />
        </ViewContextProvider>
      </div>
      <main className="px-4 mt-5">{children}</main>
    </div>
  );
};
