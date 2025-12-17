import React from 'react';
import { Grid, CellState } from '../types';
import Cell from './Cell';

interface BoardProps {
  grid: Grid;
  clues: Grid;
  errorRows: number[];
  errorCols: number[];
  onCellClick: (row: number, col: number) => void;
}

const Board: React.FC<BoardProps> = ({ grid, clues, errorRows, errorCols, onCellClick }) => {
  return (
    <div className="bg-gray-200 dark:bg-slate-800 p-2 rounded-lg shadow-md">
      <div 
        className="grid grid-cols-4 gap-1"
      >
        {grid.map((row, r) =>
            row.map((cell, c) => (
                <Cell
                    key={`${r}-${c}`}
                    value={cell}
                    isClue={clues[r][c] !== CellState.EMPTY}
                    isError={errorRows.includes(r) || errorCols.includes(c)}
                    onClick={() => onCellClick(r, c)}
                />
            ))
        )}
      </div>
    </div>
  );
};

export default Board;
