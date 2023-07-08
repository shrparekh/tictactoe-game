import './style.scss';
import { useState } from 'react';
import Board from './components/board';
import StatusMessage from './components/StatusMessage';
import { calculateWinner } from './winner';

function App() {
  const [squares, setsquares] = useState(Array(9).fill(null));
  const [isxnext, setisxnext] = useState(false);
  const winner = calculateWinner(squares);

  const handlesquareclick = clickedposition => {
    if (squares[clickedposition] || winner) {
      return;
    }

    setsquares(currentsquares => {
      return currentsquares.map((squaresvalue, position) => {
        if (clickedposition === position) {
          return isxnext ? 'x' : 'o';
        }

        return squaresvalue;
      });
    });
    setisxnext(currentisxnext => !currentisxnext);
  };
  return (
    <div className="app">
      <StatusMessage winner={winner} isxnext={isxnext} squares={squares} />
      <Board squares={squares} handlesquareclick={handlesquareclick} />
    </div>
  );
}

export default App;
