import useStorage from "../../utils/useStorage";

export function TTSAutoPlay() {
  const [isAutoPlaying, setAutoPlaying] = useStorage("AutoPlaying", false);
  const status = isAutoPlaying ? "ON" : "OFF";
  return (
    <button
      title={`AutoPlay: ${status}`}
      onClick={() => setAutoPlaying((value) => !value)}
    >
      Autoplay <b>{status}</b>
    </button>
  );
}
