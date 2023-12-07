import * as React from "react";
import { Component } from "react";
import Tabs from "./Tabs";
import { TabsTypes } from "../types/type";
import Panel1 from "./Panel1";
import Panel2 from "./Panel2";
import Panel3 from "./Panel3";
import Search from "./Search";
import Register from "./Register";
const tabsProps: TabsTypes[] = [
  { header: "商品提案", component: <Panel1></Panel1> },
  { header: "商品登録", component: <Panel2></Panel2> },
  { header: "商品紹介", component: <Panel3></Panel3> },
];
function Header() {
  const [get, setGet] = React.useState(0);
  return (
    <>
      <div className={"w-screen h-16 bg-red-400 relative flex"}>
        <Tabs config={tabsProps} sentToParent={(e) => setGet(e)}></Tabs>
        <section className="absolute h-full w-full flex justify-between">
          <div className=" ml-8 mt-2 bg-white bg-opacity-80 w-32 h-11 rounded-sm">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('../assets/OpenPIMLogo.png')` }}
            ></div>
          </div>
          <Search num={get}></Search>
          <Register></Register>
          <div>l;salkd</div>
        </section>
      </div>
    </>
  );
}

export default Header;
