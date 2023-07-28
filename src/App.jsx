import { BagProvider } from "./contexts/BagContext";
import RoutesApp from "./routes";

function App() {
  return (
    <div className="App">
      <BagProvider>
        <RoutesApp />
      </BagProvider>
    </div>
  );
}
export default App;
