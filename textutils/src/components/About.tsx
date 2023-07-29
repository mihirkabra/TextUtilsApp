import React from "react";

type AboutProps = {
  mode: "light" | "dark"
}

export default function About(props: AboutProps) {
  return (
    <div
      className="container mb-4 pt-2 pb-4 px-5"
      style={{
        backgroundColor: props.mode === "dark" ? "#3a3a3b" : "white",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
      }}
    >
      <div className="mb-3">
        <h1 className="mt-3">About</h1>
        <p>This is the first React JS Project. Text Utils Application is a basic text editor application.</p>
      </div>
    </div>
  );
}
