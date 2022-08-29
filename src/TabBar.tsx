import { useState } from "react";
import {
  handleAddTab,
  handleSelectTab,
} from "./controllers/tabControllerLogic";
import Tab from "./Tab";
import "./TabBar.css";

export class TabState {
  active: boolean;
  title: string;
  constructor(title: string, active: boolean) {
    this.active = active;
    this.title = title;
  }
}

interface Props {
    passUpCurrentTab: Function
}

function TabBar({ passUpCurrentTab }: Props) {
  const [tabState, setTabState] = useState<TabState[]>([]);

 
  const startAddTab = () => {
    const newTabState = handleAddTab(tabState);
    passUpCurrentTab(tabState.length - 1);
    setTabState([...newTabState]);
  };

  const startSelectTab = (e: React.MouseEvent<HTMLElement>) => {
    const newTabState = handleSelectTab(tabState, parseInt(e.currentTarget.id));
    passUpCurrentTab(e.currentTarget.id);
    setTabState([...newTabState]);

  };

  return (
    <div className="task-bar">
      {tabState.map((tab, index) => {
        return (
          <div id={index.toString()} onClick={startSelectTab}>
            <Tab
              title={tab.title}
              key={tab.title + index}
              active={tab.active}
            />
          </div>
        );
      })}
      <div className="tab tab-inactive" onClick={startAddTab}>
        +
      </div>
    </div>
  );
}

export default TabBar;
