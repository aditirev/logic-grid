import { Level, CellState } from '../types';
const { EMPTY, GREEN, BLUE } = CellState;

const _ = EMPTY;
const G = GREEN;
const B = BLUE;

export const LEVELS: Level[] = [
  // Level 1
  { puzzle: [[B, _, _, B], [_, G, G, _], [B, _, _, B], [_, G, G, _]] },
  // Level 2
  { puzzle: [[_, B, _, _], [G, _, _, G], [_, _, B, _], [_, G, _, _]] },
  // Level 3
  { puzzle: [[G, G, _, _], [_, _, B, _], [_, B, _, _], [_, _, G, G]] },
  // Level 4
  { puzzle: [[_, _, G, _], [B, B, _, _], [_, _, G, _], [_, B, _, _]] },
  // Level 5
  { puzzle: [[_, B, B, _], [G, _, _, _], [_, _, _, G], [_, G, G, _]] },
  // Level 6
  { puzzle: [[B, _, _, G], [_, _, G, _], [_, B, _, _], [B, _, _, G]] },
  // Level 7
  { puzzle: [[_, _, B, B], [_, G, _, _], [B, _, G, _], [_, _, _, _]] },
  // Level 8
  { puzzle: [[G, _, _, G], [_, _, B, _], [G, _, _, _], [_, B, B, _]] },
  // Level 9
  { puzzle: [[_, G, _, _], [B, _, G, _], [_, G, _, B], [_, _, B, _]] },
  // Level 10
  { puzzle: [[_, _, _, B], [G, _, G, _], [_, B, _, B], [B, _, _, _]] },
  // Level 11
  { puzzle: [[B, B, _, _], [_, _, _, G], [G, _, B, _], [_, _, B, _]] },
  // Level 12
  { puzzle: [[_, G, _, B], [_, _, G, _], [B, _, _, _], [_, G, G, _]] },
  // Level 13
  { puzzle: [[G, _, B, _], [_, _, B, _], [_, G, _, G], [_, B, _, _]] },
  // Level 14
  { puzzle: [[_, _, B, _], [G, G, _, _], [_, _, B, B], [B, _, _, _]] },
  // Level 15
  { puzzle: [[_, G, G, _], [B, _, _, B], [_, _, _, _], [G, _, B, _]] },
  // Level 16
  { puzzle: [[B, _, G, _], [_, G, _, _], [_, _, G, B], [_, B, _, _]] },
  // Level 17
  { puzzle: [[_, _, G, G], [_, B, _, _], [G, _, B, _], [B, B, _, _]] },
  // Level 18
  { puzzle: [[G, _, _, _], [_, B, B, _], [_, G, G, _], [_, _, _, B]] },
  // Level 19
  { puzzle: [[_, B, _, G], [G, _, B, _], [_, _, _, _], [B, _, G, _]] },
  // Level 20
  { puzzle: [[G, _, _, B], [_, _, B, _], [B, _, _, G], [_, G, G, _]] },
];
