import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Tabs from "./components/Tabs";
import { TabsTypes } from "./types/type";
import Panel1 from "./components/Panel1";
import Panel2 from "./components/Panel2";
import Panel3 from "./components/Panel3";
import Header from "./components/Header";
import MyContext from "./utils/MyContext";

function App() {
  const initialvalue = 0;
  return (
    <>
      <MyContext.Provider value={initialvalue}>
        <Header></Header>
      </MyContext.Provider>
    </>
  );
}

export default App;
