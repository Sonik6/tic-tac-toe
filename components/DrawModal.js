// DrawModal.js
import React from "react";

export default function DrawModal({ onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>It is a Draw!</h2>
        <button onClick={onClose}>Play Again</button>
      </div>
    </div>
  );
}
