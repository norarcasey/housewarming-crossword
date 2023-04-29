interface Clue {
  clue: string;
  answer: string;
  row: number;
  col: number;
}

export interface CrosswordData {
  across: { [x: string]: Clue };
  down: { [x: string]: Clue };
}
