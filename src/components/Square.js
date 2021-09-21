import React from 'react'


const square = ({ value, onClick, isWinningSquare }) => {
  return (
    <button type="button" className="square" onClick={onClick} style={{ fontWeight: isWinningSquare ? 'bold' : 'normal' }}>
      {value}
    </button>
  );
};

export default square
