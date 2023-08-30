import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    const obj = { username, password };
    try {
      const data = await fetch("http://localhost:3030/user/login", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });
      alert("login successful");
      window.location.href = "/quans";
    } catch (err) {
      alert("Incorrect username or password");
      console.log(err);
    }
  };

  const registerUser = async () => {
    const obj = { username, password };

    const user = await fetch("http://localhost:3030/user/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((response) => {
        if (response.status >= 400 && response.status < 600) {
          console.log("response", response);
          throw new Error("Bad response from server");
        }
        return response;
      })
      .then((data) => {
        setUsername("");
        setPassword("");
        console.log("success data", data);
        alert("registration successful");
      })
      .catch((err) => {
        alert("registration failed");
        console.log("err", err);
      });
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          padding: "30px",
          border: "1px solid red",
          borderRadius: "10px",
        }}
      >
        <div style={{ margin: "10px" }}>
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div style={{ margin: "10px" }}>
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div style={{ margin: "10px" }}>
          <Button
            type="submit"
            variant="contained"
            style={{
              width: "100%",
            }}
            onClick={() => loginUser()}
          >
            Login
          </Button>
        </div>
        <div style={{ margin: "10px" }}>
          <Button
            type="submit"
            variant="contained"
            style={{
              width: "100%",
            }}
            onClick={() => registerUser()}
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  );
}
