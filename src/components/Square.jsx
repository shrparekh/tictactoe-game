import { Value } from 'sass';

const Square = ({ value, onclick, iswinningSquare }) => {
  const colorClassName = value === 'x' ? 'text-green' : 'text-orange';
  const winningClassName = iswinningSquare ? 'winning' : '';
  return (
    <button
      type="button"
      className={`square ${colorClassName} ${winningClassName}`}
      onClick={onclick}
    >
      {value}
    </button>
  );
};
export default Square;
