export enum CellState {
  EMPTY = 0,
  GREEN = 1,
  BLUE = 2,
}

export enum ConstraintType {
  EQUAL,
  UNEQUAL,
}

export type Grid = CellState[][];

export interface Level {
  puzzle: Grid;
}

export interface ValidationResult {
  isValid: boolean;
  errors: {
    rows: number[];
    cols: number[];
  };
}
