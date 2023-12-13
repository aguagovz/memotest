import { useState } from "react";
import MemocardGrid from "./components/MemocardGrid/MemocardGrid";
import { memoCardFurnitureList } from "./constants/furnitureList";
import { memoCardThingsList } from "./constants/thingsList";

function App() {
  const [memocardList, setMemocardList] = useState([]);
  const [shouldReset, setShouldReset] = useState(false);

  const getFurniture = () => {
    setMemocardList(memoCardFurnitureList);
    setShouldReset(true);
  };

  const getThings = () => {
    setMemocardList(memoCardThingsList);
    setShouldReset(true);
  };

  return (
    <>
      <h1 className="bigTitle">Memotest</h1>
      <button onClick={() => getFurniture()}>Möbel</button>
      <button onClick={() => getThings()}>Gegenstände</button>
      <MemocardGrid shouldReset={shouldReset} memocardlist={memocardList} />
    </>
  );
}

export default App;
