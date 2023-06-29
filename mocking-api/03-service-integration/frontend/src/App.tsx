import React from "react";
import { MainRouter } from "./components/MainRouter/MainRouter";
import { Menu } from "./components/Menu/Menu";

export const App: React.FC = () => {
  return (
    <div>
      <Menu />
      <MainRouter />
    </div>
  );
};
