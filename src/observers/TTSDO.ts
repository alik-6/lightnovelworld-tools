import { getTTSD, popupUi } from "../utils/others";
function TTSDCallback(mutations: MutationRecord[], observer: MutationObserver) {
  mutations.forEach((mutation) => {
    if (mutation.attributeName === "class") {
      const ttsd = getTTSD();
      if (ttsd && ttsd.classList.contains("visible")) {
        popupUi();
      }
    }
  });
}

export default new MutationObserver(TTSDCallback);
