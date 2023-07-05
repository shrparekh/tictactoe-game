const Square = ({ value, onclick }) => {
  return (
    <button type="button" className="square" onclick={onclick}>
      {value}
    </button>
  );
};
export default Square;
