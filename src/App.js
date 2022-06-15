import { Menu } from "./components/Menu";
import { PriceDb } from "./PriceDb";

function App() {
  return (
    <div>
      <Menu Price={PriceDb} />
    </div>
  );
}

export default App;
