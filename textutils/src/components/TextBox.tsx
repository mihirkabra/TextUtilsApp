import React, { useState } from "react";

type TextBoxProps = {
  heading: string
  mode: "light" | "dark"
}

export default function TextBox(props: TextBoxProps) {
  const [text, setText] = useState("Enter text here");
  const [fontSize, setFontSize] = useState(16);
  const [formatting, setFormatting] = useState({
    bold: false,
    italic: false,
    underline: false,
  });

  const uppercaseText = () => {
    setText(text.toUpperCase());
  };

  const lowercaseText = () => {
    setText(text.toLowerCase());
  };

  const clearText = () => {
    setText("");
  };

  const fontSizeInc = () => {
    let size = fontSize + 2;
    setFontSize(size);
  };

  const fontSizeDec = () => {
    let size = fontSize - 2;
    setFontSize(size);
  };

  const textBold = () => {
    if (formatting.bold) {
      setFormatting({
        bold: false,
        italic: formatting.italic,
        underline: formatting.underline,
      });
    } else {
      setFormatting({
        bold: true,
        italic: formatting.italic,
        underline: formatting.underline,
      });
    }
  };
  const textUnderline = () => {
    if (formatting.underline) {
      setFormatting({
        underline: false,
        italic: formatting.italic,
        bold: formatting.bold,
      });
    } else {
      setFormatting({
        underline: true,
        italic: formatting.italic,
        bold: formatting.bold,
      });
    }
  };
  const textItalic = () => {
    if (formatting.italic) {
      setFormatting({
        italic: false,
        bold: formatting.bold,
        underline: formatting.underline,
      });
    } else {
      setFormatting({
        italic: true,
        bold: formatting.bold,
        underline: formatting.underline,
      });
    }
  };

  const copyText = () => {
    navigator.clipboard.writeText(text);
  }

  const onChangeTextHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <div className="container mb-4 pt-2 pb-4 px-5">
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <button
          className={`btn btn-outline-${props.mode === "dark" ? "light" : "dark"
            } btn-sm me-2 my-2 ms-1`}
          onClick={fontSizeInc}
        >
          <b>
            A<sup>+</sup>
          </b>
        </button>
        <button
          className={`btn btn-outline-${props.mode === "dark" ? "light" : "dark"
            } btn-sm me-2 my-2`}
          onClick={fontSizeDec}
        >
          <b>
            A<sup>-</sup>
          </b>
        </button>
        <button
          className={`btn btn-outline-${props.mode === "dark" ? "light" : "dark"
            } btn-sm me-2 my-2 ms-3`}
          onClick={textBold}
        >
          <b>B</b>
        </button>
        <button
          className={`btn btn-outline-${props.mode === "dark" ? "light" : "dark"
            } btn-sm me-2 my-2`}
          onClick={textItalic}
        >
          <b>
            <i>I</i>
          </b>
        </button>
        <button
          className={`btn btn-outline-${props.mode === "dark" ? "light" : "dark"
            } btn-sm me-2 my-2`}
          onClick={textUnderline}
        >
          <b>
            <u>U</u>
          </b>
        </button>
        <button
          className={`btn btn-outline-${props.mode === "dark" ? "light" : "dark"
            } btn-sm me-2 my-2 ms-3`}
          onClick={copyText}
        >
          <b>Copy</b>
        </button>
        <button
          className={`btn btn-outline-${props.mode === "dark" ? "light" : "dark"
            } btn-sm me-2 my-2`}
          onClick={clearText}
        >
          <b>Clear</b>
        </button>
        <textarea
          className="form-control"
          id="textBox"
          rows={9}
          value={text}
          onChange={onChangeTextHandler}
          style={{
            color: props.mode === "dark" ? "white" : "black",
            backgroundColor: props.mode === "dark" ? "#3a3a3a" : "white",
            fontSize: fontSize,
            fontWeight: formatting.bold ? "bold" : "normal",
            fontStyle: formatting.italic ? "italic" : "normal",
            textDecoration: formatting.underline ? "underline" : "none",
          }}
        />
        <button className="btn btn-primary my-2" onClick={uppercaseText}>
          Upper Case
        </button>
        <button className="btn btn-primary my-2 ms-2" onClick={lowercaseText}>
          Lower Case
        </button>
      </div>
      <div>
        <h1>Text Summary</h1>
        <p>
          <b>{text.length}</b> Charaters,{" "}
          <b>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length}</b> Words
        </p>
        <p>
          <b>
            {(text.length === 0 ? 0 : text.split(/\s+/).filter((element) => { return element.length !== 0 }).length * 0.008)}{" "}
            Mins
          </b>{" "}
          Reading Time
        </p>
      </div>
    </div>
  );
}
