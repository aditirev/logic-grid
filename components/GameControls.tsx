
import React from 'react';
import { HintIcon, UndoIcon, CheckIcon } from './icons';

interface GameControlsProps {
  isWon: boolean;
  onUndo: () => void;
  onCheck: () => void;
  onNextLevel: () => void;
  undoDisabled: boolean;
}

const GameControls: React.FC<GameControlsProps> = ({ isWon, onUndo, onCheck, onNextLevel, undoDisabled }) => {
  const baseButtonClasses = 'flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-800';
  
  if (isWon) {
    return (
      <footer className="w-full max-w-sm mx-auto p-4 flex justify-center">
        <button
          onClick={onNextLevel}
          className={`${baseButtonClasses} bg-green-500 text-white hover:bg-green-600 focus:ring-green-400 w-full`}
        >
          Next Level
        </button>
      </footer>
    );
  }

  return (
    <footer className="w-full max-w-sm mx-auto p-4 bg-violet-50/50 dark:bg-slate-800/50 rounded-t-3xl">
      <div className="flex justify-around items-center">
        <button
          className={`${baseButtonClasses} bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-600 focus:ring-gray-300`}
          aria-label="Hint"
          disabled
        >
          <HintIcon />
          Hint
        </button>
        <button
          onClick={onUndo}
          disabled={undoDisabled}
          className={`${baseButtonClasses} bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-600 focus:ring-gray-300 disabled:opacity-50 disabled:cursor-not-allowed`}
          aria-label="Undo"
        >
          <UndoIcon />
          Undo
        </button>
        <button
          onClick={onCheck}
          className={`${baseButtonClasses} bg-slate-800 text-white dark:bg-violet-500 dark:text-slate-900 hover:bg-slate-900 dark:hover:bg-violet-400 focus:ring-slate-500 dark:focus:ring-violet-300`}
          aria-label="Check solution"
        >
          <CheckIcon />
          Check
        </button>
      </div>
    </footer>
  );
};

export default GameControls;
