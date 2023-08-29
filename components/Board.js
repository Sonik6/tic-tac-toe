"use client";
import React, { useState } from "react";
import { checkWin, checkDraw, updateBoard } from "../utils/gameLogic";
import styles from "./Board.module.css";
import WinModal from "./WinModal";
import DrawModal from "./DrawModal";

export default function Board() {
  const [boardData, setBoardData] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  const handleModalClose = () => {
    setShowWinModal(false);
    setShowDrawModal(false);
    setBoardData([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setCurrentPlayer("X");
  };

  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [showWinModal, setShowWinModal] = useState(false);
  const [showDrawModal, setShowDrawModal] = useState(false);
  const [winner, setWinner] = useState("");

  const handleCellClick = (rowIndex, columnIndex) => {
    if (boardData[rowIndex][columnIndex] === "") {
      const newBoardData = updateBoard(
        boardData,
        rowIndex,
        columnIndex,
        currentPlayer
      );

      if (checkWin(newBoardData, currentPlayer)) {
        setShowWinModal(true);
        setWinner(currentPlayer);
      } else if (checkDraw(newBoardData)) {
        setShowDrawModal(true);
      } else {
        setBoardData(newBoardData);
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
      }
    }
  };

  return (
    <div className={styles.board}>
      {boardData.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.row}>
          {row.map((cellValue, columnIndex) => (
            <button
              key={columnIndex}
              className={styles.cell}
              onClick={() => handleCellClick(rowIndex, columnIndex)}>
              {cellValue}
            </button>
          ))}
        </div>
      ))}
      {showWinModal && <WinModal winner={winner} onClose={handleModalClose} />}
      {showDrawModal && <DrawModal onClose={handleModalClose} />}
    </div>
  );
}
