import * as React from 'react';

import Crossword from '@jaredreisinger/react-crossword';

import { reverseUtah } from './data/reverse-utah';

function handleCrosswordCorrect() {
  console.log('You win!!');
}

export function MyCrossword() {
  const across = ['nora', 'mimed', 'inone', 'strep', 'sheet'];
  const down = ['ninth', 'omore', 'renee', 'adept', 'miss'];
  const data = reverseUtah(across, down);

  return <Crossword data={data} onCrosswordCorrect={handleCrosswordCorrect} />;
}
