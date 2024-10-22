import { renderPopup } from "../popup/main";

function getCLE(): Element | null | undefined {
  const chapterElement = document.querySelector("#chapter-container");
  return chapterElement?.children.item(chapterElement.children.length - 1);
}

function getTTSD(): Element | null {
  return document.querySelector("#chapter-article > section > dialog");
}

function popupUi(): void {
  const T_POP = document.createElement("div");
  T_POP.id = "T_POP";
  const ttsPanel = document.getElementById("ttspanel");
  if (ttsPanel) {
    ttsPanel.appendChild(T_POP);
    renderPopup();
  }
}
export { getCLE, getTTSD, popupUi };
