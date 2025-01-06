const Square = ({ value, handleSquareClick }) => {
  return (
    <>
      <button onClick={handleSquareClick}>{value}</button>
    </>
  );
};
export default Square;
