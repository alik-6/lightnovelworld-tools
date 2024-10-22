import CCO from "./observers/CCO";
import TTSDO from "./observers/TTSDO";
import { getCLE, getTTSD } from "./utils/others";

const CCLCInterval: Timer = setInterval(() => {
  const chapterLastElement = getCLE();

  if (chapterLastElement) {
    clearInterval(CCLCInterval);
    if (localStorage.getItem("AutoPlaying") == "true") {
      const ttsStartButton = document.getElementById("ttsstart");
      if (ttsStartButton) {
        ttsStartButton.click();
      }
    }
    CCO.observe(chapterLastElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
  }
}, 100);

const TTSDInterval: Timer = setInterval(() => {
  const textToSpeechDialogElement = getTTSD();

  if (textToSpeechDialogElement) {
    clearInterval(TTSDInterval);

    TTSDO.observe(textToSpeechDialogElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
  }
}, 100);
