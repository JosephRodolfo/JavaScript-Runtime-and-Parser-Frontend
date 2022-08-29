import React, { useEffect, useState } from "react";
import "./App.css";
import Editor from "./Editor";
import TabBar from "./TabBar";
import Header from "./Header";

function App() {
  const [currentTab, setCurrentTab] = useState(0);
  useEffect(() => {}, []);

  const handleTabChange = () => {};
  return (
    <div className="App">
      <Header />
      <TabBar passUpCurrentTab={handleTabChange} />
      <Editor currentTab={currentTab} />
    </div>
  );
}

export default App;
