import {
  ADD_ARTICLE,
  GET_ARTICLE,
  EDIT_ARTICLE,
  DELETE_ARTICLE,
} from "../actions/news.actions";

const initialState = [];

export default function newsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ARTICLE:
      return action.payload;

    case ADD_ARTICLE:
      return [...state, action.payload];

    case EDIT_ARTICLE:
      const copyState = state.slice();
      copyState.filter((article) => {
        if (article.id === action.payload.id) {
          article.content = action.payload.data;
        }
      });
      return copyState;

    case DELETE_ARTICLE:
      const copyState_2 = state.slice();
      const copyState_3 = copyState_2.filter(
        (article) => article.id !== action.payload
      );
      return copyState_3;

    default:
      return state;
  }
}
