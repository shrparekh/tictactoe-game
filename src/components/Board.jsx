import Square from './square';
const Board = ({ squares, handlesquareclick, winningSquares }) => {
  const rendersquare = position => {
    const iswinningSquare = winningSquares.includes(position);

    return (
      <Square
        value={squares[position]}
        onclick={() => handlesquareclick(position)}
        iswinningSquare={iswinningSquare}
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
