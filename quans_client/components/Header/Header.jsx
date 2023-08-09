import React, { useContext, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { Button, TextField } from "@mui/material";
import { quesContext } from "../quesContext";

const Header = () => {
  const [inputVal, setInput] = useState("");
  const { searchStr, setSearchStr } = useContext(quesContext);

  return (
    <span className="inputField">
      <TextField
        id="outlined-basic"
        label="Ask Anything"
        variant="outlined"
        onChange={(e) => setInput(e.target.value)}
      />
      <Button type="submit" onClick={() => setSearchStr(inputVal)}>
        Submit
      </Button>
    </span>
  );
};

export default Header;
