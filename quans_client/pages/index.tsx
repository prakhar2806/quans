import React, { useState } from "react";
import Header from "../components/Header";
import List from "../components/List";
import { quesContext } from "../components/quesContext";

export default function Home() {
  const [searchStr, setSearchStr] = useState("");

  return (
    <quesContext.Provider
      value={{ searchStr: searchStr, setSearchStr: setSearchStr }}
    >
      <div className="quans">
        <img src="quans.png" height="50px" width="50px" />
        <h1>UANS</h1>
      </div>
      <Header />
      <List />
    </quesContext.Provider>
  );
}
