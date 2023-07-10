import './style.scss';
import { useState } from 'react';
import Board from './components/board';
import StatusMessage from './components/StatusMessage';
import History from './components/History';
import { calculateWinner } from './winner';

function App() {
  const [history, setHistory] = useState([
    { squares: Array(9).fill(null), isxnext: false },
  ]);
  const [currentMove, setCurrentMove] = useState(0);

  const gamingBoard = history[currentMove];
  const winner = calculateWinner(gamingBoard.squares);

  const handlesquareclick = clickedposition => {
    if (gamingBoard.squares[clickedposition] || winner) {
      return;
    }

    setHistory(currentHistory => {
      const isTraversing = currentMove + 1 !== currentHistory.length;
      console.log(isTraversing);
      const lastGamingState = isTraversing
        ? currentHistory[currentMove]
        : currentHistory[currentHistory.length - 1];

      const nextSquareState = lastGamingState.squares.map(
        (squaresvalue, position) => {
          if (clickedposition === position) {
            return lastGamingState.isxnext ? 'x' : 'o';
          }

          return squaresvalue;
        }
      );
      const base = isTraversing
        ? currentHistory.slice(0, currentHistory.indexOf(lastGamingState) + 1)
        : currentHistory;
      return base.concat({
        squares: nextSquareState,
        isxnext: !lastGamingState.isxnext,
      });
    });
    setCurrentMove(move => move + 1);
  };
  const moveTo = move => {
    setCurrentMove(move);
  };
  return (
    <div className="app">
      <StatusMessage winner={winner} gamingBoard={gamingBoard} />
      <Board
        squares={gamingBoard.squares}
        handlesquareclick={handlesquareclick}
      />
      <h2>current game history</h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
}

export default App;
