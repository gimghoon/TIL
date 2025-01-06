const Button = ({ setIsChecked }) => {
  const handleClick = () => {
    setIsChecked((prev) => !prev);
  };
  return (
    <>
      <button onClick={handleClick}>findApple</button>
    </>
  );
};
export default Button;
