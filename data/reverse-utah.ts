import { CrosswordData } from '../types';

export function reverseUtah(across: string[], down: string[]): CrosswordData {
  return {
    across: {
      1: {
        clue: 'My name',
        answer: across[0],
        row: 0,
        col: 1,
      },
      5: {
        clue: 'My name',
        answer: across[1],
        row: 1,
        col: 0,
      },
      6: {
        clue: 'My name',
        answer: across[2],
        row: 2,
        col: 0,
      },
      7: {
        clue: 'My name',
        answer: across[3],
        row: 3,
        col: 0,
      },
      8: {
        clue: 'My name',
        answer: across[4],
        row: 4,
        col: 0,
      },
    },
    down: {
      1: {
        clue: 'My name',
        answer: down[0],
        row: 0,
        col: 1,
      },
      2: {
        clue: 'My name',
        answer: down[1],
        row: 0,
        col: 2,
      },
      3: {
        clue: 'My name',
        answer: down[2],
        row: 0,
        col: 3,
      },
      4: {
        clue: 'My name',
        answer: down[3],
        row: 0,
        col: 4,
      },
      5: {
        clue: 'My name',
        answer: down[4],
        row: 1,
        col: 0,
      },
    },
  };
}
