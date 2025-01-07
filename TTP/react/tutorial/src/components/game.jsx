import { useState } from "react";
import Board from "./board";

const Game = () => {
  const [move, setMove] = useState(0);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentMove = history.length - 1;
  const currentHistory = history[currentMove];
  const isNextX = move % 2 == 0;
  const handlePlay = (squares) => {
    setHistory([...history, squares]);
    setMove(move + 1);
  };
  const moveHistory = (move) => {
    setMove(move);
    setHistory([...history].slice(0, move));
  };
  const histories = history.map((history, move) => (
    <li key={move}>
      <button
        className="moveHistory"
        onClick={() => moveHistory(move + 1)}
      >{`# move to ${move}`}</button>
    </li>
  ));
  return (
    <>
      {histories}
      <Board isNextX={isNextX} squares={currentHistory} onPlay={handlePlay} />
    </>
  );
};
export default Game;
