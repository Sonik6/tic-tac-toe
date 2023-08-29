import React from "react";

export default function WinModal({ winner, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Player {winner} Wins!</h2>
        <button onClick={onClose}>Play Again</button>
      </div>
    </div>
  );
}
