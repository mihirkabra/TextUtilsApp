import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextBox from "./components/TextBox";

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const switchMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "rgba(202, 202, 202, 0.705)";
      document.body.style.color = "#000000";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(80, 80, 80)";
      document.body.style.color = "#ffffff";
    }
  };

  return (
    <BrowserRouter>
      <Navbar title="TextUtils" switchMode={switchMode} />
      <Routes>
        <Route
          path="/"
          element={
            <div
              className="container pt-3"
              style={{
                backgroundColor: mode === "dark" ? "#3a3a3b" : "white",
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
              }}
            >
              <TextBox
                heading="Enter some text"
                mode={mode}
              />
            </div>
          }
        />
        <Route path="/about" element={<About mode={mode} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
