import useStorage from "../../utils/useStorage";

export function TTSAutoNext() {
  const [isAutoNext, setAutoNext] = useStorage("AutoNext", false);
  const status = isAutoNext ? "ON" : "OFF";
  return (
    <button
      title={`AutoNext: ${status}`}
      onClick={() => setAutoNext((value) => !value)}
    >
      AutoNext <b>{status}</b>
    </button>
  );
}
