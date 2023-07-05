import { useState } from 'react';
import Square from './square';
const Board = () => {
  const [squares, setsquares] = useState(Array(9).fill(null));
  console.log(squares);
  const handlesquareclick = clickedposition => {
    setsquares(currentsquares => {
      return currentsquares.map((squaresvalue, position) => {
        if (clickedposition === position) {
          return 'x';
        }
        return squaresvalue;
      });
    });
  };

  const rendersquare = position => {
    return (
      <Square
        value={squares[position]}
        onclick={() => handlesquareclick(position)}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {rendersquare(0)}
        {rendersquare(1)}
        {rendersquare(2)}
      </div>
      <div className="board-row">
        {rendersquare(3)}
        {rendersquare(4)}
        {rendersquare(5)}
      </div>
      <div className="board-row">
        {rendersquare(6)}
        {rendersquare(7)}
        {rendersquare(8)}
      </div>
    </div>
  );
};
export default Board;
