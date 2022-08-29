import { TabState } from "../TabBar";

export const handleAddTab = (tabArray: Array<TabState>) => {
  tabArray.forEach((elements) => {
    elements.active = false;
  });
  const firstTab = new TabState(`Example ${tabArray.length + 1}`, true);

  tabArray.push(firstTab);
  return tabArray;
};
export const handleSelectTab = (
  tabArray: Array<TabState>,
  selectedTab: number
) => {
  tabArray.forEach((element, index) => {
    selectedTab === index ? (element.active = true) : (element.active = false);
  });
  return tabArray;
};
