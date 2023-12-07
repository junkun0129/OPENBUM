import * as React from "react";
import { Component, useState } from "react";
import { TabsTypes } from "../types/type";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStage";

type TabProps = {
  config: TabsTypes[];
  sentToParent: (e: number) => void;
};
function Tabs({ config, sentToParent }: TabProps) {
  const [activeTab, setActiveTab] = useState(0);
  const register = (index: number) => {
    setActiveTab(index);
    setLocalStorage("activeTab", index);
    sentToParent(index);
  };

  return (
    <>
      <div className="tab h-full w-full bg-green-600 absolute">
        <div
          className={`tab-body h-full w-full ${
            activeTab === 0
              ? "bg-blue-500"
              : activeTab === 1
              ? "bg-yellow-500"
              : activeTab === 2 && "bg-red-500"
          }`}
        >
          {config[activeTab].component}
        </div>
        <div className="tab-headers flex justify-start">
          {config.map((entry, index) => (
            <div
              className={`${
                index === activeTab ? `px-8 h-11` : `px-3 h-9`
              } rounded-br-lg rounded-bl-lg ${
                index === 0
                  ? "bg-blue-500"
                  : index === 1
                  ? "bg-yellow-500"
                  : index === 2 && "bg-red-500"
              } duration-200 ease-in-out`}
              onClick={() => register(index)}
            >
              <div
                className={
                  index === activeTab
                    ? `bg-white bg-opacity-80 h-ful px-2 mt-2 rounded-sm text-2xl`
                    : `bg-white bg-opacity-80 h-ful px-2 mt-2 rounded-sm`
                }
              >
                {entry.header}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Tabs;
