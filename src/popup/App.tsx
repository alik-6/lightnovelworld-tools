import { TTSAutoNext } from "./component/TTSAutoNext";
import { TTSAutoPlay } from "./component/TTSAutoPlay";

export default function App() {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
      <div>
        <TTSAutoPlay />
      </div>
      <div>
        <TTSAutoNext />
      </div>
    </div>
  );
}
