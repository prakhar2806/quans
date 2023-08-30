import React, { useState } from "react";
import Header from "../../components/Header";
import List from "../../components/List";
import { quesContext } from "../../components/quesContext";

export default function Quans() {
  const [searchStr, setSearchStr] = useState("");

  return (
    <quesContext.Provider
      value={{ searchStr: searchStr, setSearchStr: setSearchStr }}
    >
      <Header />
      <List />
    </quesContext.Provider>
  );
}
