import { TOGGLE_VISITED, SUGGEST_RANDOM } from '../actionTypes';

export const toggleVisited = (id: string) => ({
  type: TOGGLE_VISITED,
  payload: id,
});

export const suggestRandom = () => ({
  type: SUGGEST_RANDOM,
});
