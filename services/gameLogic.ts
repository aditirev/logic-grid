import { Grid, CellState, ValidationResult } from '../types';

const GRID_SIZE = 4;
const HALF_GRID_SIZE = GRID_SIZE / 2;

const checkCounts = (arr: CellState[]): boolean => {
  const greenCount = arr.filter(cell => cell === CellState.GREEN).length;
  const blueCount = arr.filter(cell => cell === CellState.BLUE).length;
  return greenCount === HALF_GRID_SIZE && blueCount === HALF_GRID_SIZE;
};

const checkTriples = (arr: CellState[]): boolean => {
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] !== CellState.EMPTY && arr[i] === arr[i + 1] && arr[i] === arr[i + 2]) {
      return false;
    }
  }
  return true;
};

const getColumn = (grid: Grid, colIndex: number): CellState[] => {
  return grid.map(row => row[colIndex]);
};

export const validateGrid = (grid: Grid): ValidationResult => {
  const errors: ValidationResult['errors'] = { rows: [], cols: [] };
  let isValid = true;

  const addRowError = (index: number) => {
    if (!errors.rows.includes(index)) errors.rows.push(index);
    isValid = false;
  }

  const addColError = (index: number) => {
    if (!errors.cols.includes(index)) errors.cols.push(index);
    isValid = false;
  }

  // Check rows
  for (let i = 0; i < GRID_SIZE; i++) {
    const row = grid[i];
    const isFull = row.every(c => c !== CellState.EMPTY);
    
    if (isFull && !checkCounts(row)) addRowError(i);
    if (!checkTriples(row)) addRowError(i);
  }

  // Check columns
  for (let i = 0; i < GRID_SIZE; i++) {
    const col = getColumn(grid, i);
    const isFull = col.every(c => c !== CellState.EMPTY);

    if (isFull && !checkCounts(col)) addColError(i);
    if (!checkTriples(col)) addColError(i);
  }

  return { isValid, errors };
};
