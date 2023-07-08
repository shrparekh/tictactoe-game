import React from 'react';

const StatusMessage = ({ winner, isxnext, squares }) => {
  const nomovesleft = squares.every(squaresvalue => squaresvalue !== null);
  const nextplayer = isxnext ? 'x' : 'o';

  const renderStatusMessage = () => {
    if (winner) {
      return (
        <React.Fragment>
          winner is{''}
          <span className={winner === 'x' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </React.Fragment>
      );
    }
    if (!winner && nomovesleft) {
      return (
        <React.Fragment>
          <span className="text-orange">o</span> and{' '}
          <span className="text-green">x</span> tied
        </React.Fragment>
      );
    }
    if (!winner && !nomovesleft) {
      return (
        <React.Fragment>
          next player is{' '}
          <span className={isxnext ? 'text-green' : 'text-orange'}>
            {nextplayer}
          </span>
        </React.Fragment>
      );
    }
    return null;
  };

  return <h2 className="status-message">{renderStatusMessage()}</h2>;
};
export default StatusMessage;
