import React from 'react';
import { CellState } from '../types';

interface CellProps {
  value: CellState;
  isClue: boolean;
  isError: boolean;
  onClick: () => void;
}

const Cell: React.FC<CellProps> = ({ value, isClue, isError, onClick }) => {
  const baseClasses = 'w-16 h-16 flex items-center justify-center rounded-md transition-all duration-200';
  
  const stateClasses = isClue
    ? 'bg-gray-200 dark:bg-slate-700 font-bold cursor-not-allowed'
    : 'bg-white dark:bg-slate-800 cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-700';
  
  const errorClasses = isError ? 'ring-2 ring-red-500 ring-offset-2 dark:ring-offset-slate-900' : '';
  
  const Symbol = () => {
    if (value === CellState.EMPTY) return null;
    const color = value === CellState.GREEN ? 'text-green-500' : 'text-blue-500';
    
    if (value === CellState.BLUE) {
        return (
          <svg viewBox="0 0 100 100" className={`w-10 h-10 ${color}`}>
            <circle cx="50" cy="50" r="35" fill="currentColor" />
          </svg>
        );
    }

    return (
      <svg viewBox="0 0 100 100" className={`w-10 h-10 ${color}`}>
        <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="10" fill="none" />
      </svg>
    );
  };

  return (
    <div
      className={`${baseClasses} ${stateClasses} ${errorClasses}`}
      onClick={!isClue ? onClick : undefined}
      aria-label={`Cell ${value === CellState.EMPTY ? 'empty' : value === CellState.GREEN ? 'green' : 'blue'}`}
    >
      <Symbol />
    </div>
  );
};

export default Cell;
