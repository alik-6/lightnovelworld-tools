import { getCLE } from "../utils/others";

function CCOCallback(mutations: MutationRecord[], observer: MutationObserver) {
  mutations.forEach((mutation) => {
    if (mutation.type === "attributes") {
      const cle = getCLE();
      if (cle && !cle.classList.contains("tts-highlight")) {
        const nextPageElement: HTMLAnchorElement | null =
          document.querySelector(
            "#chapter-article > section > div.chapternav.skiptranslate > a.button.nextchap",
          );

        if (nextPageElement && localStorage.getItem("AutoNext") === "true")
          nextPageElement.click();
      }
    }
  });
}
export default new MutationObserver(CCOCallback);
