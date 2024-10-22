import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

interface CHTMLELEMENT extends HTMLElement {
  _root?: ReactDOM.Root;
}
export function renderPopup() {
  const T_POP = document.getElementById("T_POP") as CHTMLELEMENT | null;
  if (T_POP && !T_POP._root) {
    T_POP._root = ReactDOM.createRoot(T_POP);

    T_POP._root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    );
  }
}
