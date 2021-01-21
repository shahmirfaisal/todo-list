import React from "react";
import { Header } from "./components/Header/Header.jsx";
import { Input } from "./components/Input/Input";
import "./App.css";
import { List } from "./components/List/List";
import { ContextProvider } from "./context/index";
import { SmallFooter } from "./components/SmallFooter/SmallFooter";

export const App = () => {
  return (
    <ContextProvider>
      <div className="container">
        <Header />
        <Input />
        <List />
        <SmallFooter />
        <p>Drag and drop to reorder list</p>
      </div>
    </ContextProvider>
  );
};
