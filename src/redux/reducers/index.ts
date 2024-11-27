import { TOGGLE_VISITED, SUGGEST_RANDOM } from '../actionTypes';

// Define the shape of a Place
export interface Place {
  id: string;
  name: string;
  visited: boolean;
}

// Define the shape of the AppState
export interface AppState {
  places: Place[];
  suggestedPlace: Place | null;
}

// Define the shape of the action objects
interface ToggleVisitedAction {
  type: typeof TOGGLE_VISITED;
  payload: string; // Place ID
}

interface SuggestRandomAction {
  type: typeof SUGGEST_RANDOM;
}

// Union type for actions
type AppActions = ToggleVisitedAction | SuggestRandomAction;

// Initial state
const initialState: AppState = {
  places: require('../../assets/data/places.json'),
  suggestedPlace: null,
};

// Reducer function
const rootReducer = (state = initialState, action: AppActions): AppState => {
  switch (action.type) {
    case TOGGLE_VISITED:
      return {
        ...state,
        places: state.places.map((place) =>
          place.id === action.payload
            ? { ...place, visited: !place.visited }
            : place
        ),
      };
    case SUGGEST_RANDOM:
      return {
        ...state,
        suggestedPlace:
          state.places[Math.floor(Math.random() * state.places.length)],
      };
    default:
      return state;
  }
};

export default rootReducer;
