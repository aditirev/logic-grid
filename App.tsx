import React, { useState, useEffect, useCallback } from 'react';
import { Grid, CellState, Level, ValidationResult } from './types';
import { LEVELS } from './constants/levels';
import Board from './components/Board';
import DarkModeToggle from './components/DarkModeToggle';
import { validateGrid } from './services/gameLogic';

const emptyErrors: ValidationResult['errors'] = { rows: [], cols: [] };

type ActiveTab = 'game' | 'rules';

const App: React.FC = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [grid, setGrid] = useState<Grid>(LEVELS[0].puzzle);
  const [clues, setClues] = useState<Grid>(LEVELS[0].puzzle);
  const [isWon, setIsWon] = useState(false);
  const [errors, setErrors] = useState<ValidationResult['errors']>(emptyErrors);
  const [activeTab, setActiveTab] = useState<ActiveTab>('game');
  
  const loadLevel = useCallback((levelIndex: number) => {
    const newLevelIndex = levelIndex % LEVELS.length;
    const newLevel: Level = JSON.parse(JSON.stringify(LEVELS[newLevelIndex]));
    setCurrentLevel(newLevelIndex);
    setGrid(newLevel.puzzle);
    setClues(newLevel.puzzle);
    setIsWon(false);
    setErrors(emptyErrors);
  }, []);

  useEffect(() => {
    loadLevel(0);
  }, [loadLevel]);

  const handleCellClick = (row: number, col: number) => {
    if (isWon || clues[row][col] !== CellState.EMPTY) return;

    setErrors(emptyErrors);
    const newGrid = JSON.parse(JSON.stringify(grid));
    const currentValue = newGrid[row][col];
    newGrid[row][col] = (currentValue + 1) % 3; // Cycle EMPTY -> GREEN -> BLUE -> EMPTY
    setGrid(newGrid);
  };

  const handleReset = () => {
    setGrid(JSON.parse(JSON.stringify(clues)));
    setIsWon(false);
    setErrors(emptyErrors);
  };
  
  const handleNewGame = () => {
    loadLevel(isWon ? currentLevel + 1 : Math.floor(Math.random() * LEVELS.length));
  };

  const handleCheck = () => {
    const result = validateGrid(grid);
    const isBoardFull = grid.every(r => r.every(cell => cell !== CellState.EMPTY));

    if (result.isValid && isBoardFull) {
      setIsWon(true);
      setErrors(emptyErrors);
    } else {
      setErrors(result.errors);
    }
  };

  const getTabClasses = (tabName: ActiveTab) => {
    const base = 'px-4 py-2 font-semibold text-lg transition-colors focus:outline-none';
    if (activeTab === tabName) {
      return `${base} text-blue-500 dark:text-blue-400 border-b-2 border-blue-500`;
    }
    return `${base} text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200`;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 flex flex-col items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md mx-auto flex flex-col items-center">
        <header className="w-full flex justify-between items-center mb-4">
          <h1 className="text-4xl font-bold dark:text-white">Logic Grid</h1>
          <DarkModeToggle />
        </header>

        <div className="w-full flex justify-center border-b border-gray-200 dark:border-slate-700 mb-6">
          <button onClick={() => setActiveTab('game')} className={getTabClasses('game')}>
            Game
          </button>
          <button onClick={() => setActiveTab('rules')} className={getTabClasses('rules')}>
            Rules
          </button>
        </div>
        
        {activeTab === 'game' && (
          <>
            <main className="flex flex-col items-center gap-4">
              <Board 
                grid={grid} 
                clues={clues}
                errorRows={errors.rows}
                errorCols={errors.cols}
                onCellClick={handleCellClick}
              />
              {isWon && (
                <div className="text-center p-4 mt-4 bg-green-100 dark:bg-green-900/50 rounded-lg shadow-md w-full">
                  <h2 className="text-2xl font-bold text-green-700 dark:text-green-300">Congratulations!</h2>
                  <p className="text-green-600 dark:text-green-400">You've solved Level {currentLevel + 1}!</p>
                </div>
              )}
            </main>

            <footer className="mt-6 flex justify-center gap-4">
              <button 
                onClick={handleReset} 
                className="px-6 py-2 rounded-lg bg-gray-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold hover:bg-gray-300 dark:hover:bg-slate-600 transition-colors"
                >
                  Reset
              </button>
              <button
                onClick={handleCheck}
                disabled={isWon}
                className="px-6 py-2 rounded-lg bg-yellow-400 text-slate-800 font-semibold hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Check
              </button>
              <button 
                onClick={handleNewGame}
                className="px-6 py-2 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors"
              >
                {isWon ? 'Next Level' : 'New Game'}
              </button>
            </footer>
          </>
        )}

        {activeTab === 'rules' && (
          <main className="w-full p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">Game Rules</h2>
            <ol className="list-decimal list-inside space-y-4 text-slate-600 dark:text-slate-300">
              <li>
                <strong className="font-semibold text-slate-700 dark:text-slate-200">Equal Symbols:</strong> Each row and column must contain an equal number of blue and green symbols (two of each).
              </li>
              <li>
                <strong className="font-semibold text-slate-700 dark:text-slate-200">No Triples:</strong> You cannot have more than two identical symbols next to each other, either horizontally or vertically.
              </li>
            </ol>
            <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
              Click an empty cell to place a symbol. Click it again to cycle through the symbols. Fill the entire grid following the rules and press 'Check' to win!
            </p>
          </main>
        )}
      </div>
    </div>
  );
};

export default App;
