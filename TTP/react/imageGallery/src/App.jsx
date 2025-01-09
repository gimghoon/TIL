import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { sculptureList } from "./data";
function App() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const handleIndexCLick = (index) => [
    index === sculptureList.length - 1 ? setIndex(0) : setIndex(index + 1),
  ];
  return (
    <>
      <button onClick={() => handleIndexCLick(index)}>Next</button>
      <h2>
        {sculptureList[index].name}by {sculptureList[index].artist}
      </h2>
      <div>
        {index + 1}of{sculptureList.length}
      </div>
      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? "hideDEtails" : "showdetails"}
      </button>
      {showMore && <div>{sculptureList[index].description}</div>}
      <img src={sculptureList[index].url} alt={sculptureList[index].alt} />
    </>
  );
}

export default App;
