import { atom, selector } from 'recoil';

export interface Player {
  playerName: string;
  score: number[];
  handicap?: number;
}

export interface CurrentRound {
  players: Player[];
  numHoles: number;
  currentHole: number;
  isComplete: boolean;
}

export const CurrentRoundState = atom<CurrentRound>({
  key: 'currentRoundState',
  default: {
    players: [],
    numHoles: 18,
    currentHole: 1,
    isComplete: false
  }
});

export const CurrentHoleSelector = selector<number>({
  key: 'currentHoleSelector',
  get: ({ get }) => {
    const currentRound = get(CurrentRoundState);
    return currentRound.currentHole;
  },
  set: ({ set, get }, newValue) => {
    const currentRound = get(CurrentRoundState);
    set(CurrentRoundState, { ...currentRound, currentHole: newValue });
  }
});
