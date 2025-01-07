import { useState } from "react";
import Square from "./square";
const calculateWinner = (squares) => {
  let result = "";
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  lines.map((line) => {
    const [a, b, c] = line;
    if (squares[a] === squares[b] && squares[b] === squares[c]) {
      result = squares[a];
    }
  });
  return result;
};
const Board = ({ isNextX, squares, onPlay }) => {
  const handleCLick = (i) => {
    if (squares[i] || calculateWinner(squares)) return;
    const nextSquares = [...squares];
    nextSquares[i] = isNextX ? "X" : "O";
    onPlay(nextSquares);
  };
  const winner = calculateWinner(squares);
  const result = winner ? `The Winner is ${winner}` : "go ahead";

  return (
    <>
      <div className="result">
        <div>{result}</div>
        <div>{`next player is ${isNextX ? "x" : "o"}`}</div>
      </div>
      <div className="board-row">
        <Square value={squares[0]} handleSquareClick={() => handleCLick(0)} />
        <Square value={squares[1]} handleSquareClick={() => handleCLick(1)} />
        <Square value={squares[2]} handleSquareClick={() => handleCLick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} handleSquareClick={() => handleCLick(3)} />
        <Square value={squares[4]} handleSquareClick={() => handleCLick(4)} />
        <Square value={squares[5]} handleSquareClick={() => handleCLick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} handleSquareClick={() => handleCLick(6)} />
        <Square value={squares[7]} handleSquareClick={() => handleCLick(7)} />
        <Square value={squares[8]} handleSquareClick={() => handleCLick(8)} />
      </div>
    </>
  );
};
export default Board;
