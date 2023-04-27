import { Action, ActionType } from "../../../../models/models";
import { IBeerModel, IStateBeersTypes } from "./models/models";
import createReducer from "../../../../store/createReducer";

const defaultState: IStateBeersTypes = {
  beers: [],
  loading: false,
  error: undefined,
  currentPage: 1,
}

export const beersReducer = createReducer<IStateBeersTypes>(defaultState, {

  [ActionType.GET_BEERS](state:IStateBeersTypes) {
    return {
      ...state,
      loading: true,
    };
  },

  [ActionType.GET_BEERS_ERROR](state: IStateBeersTypes) {
  
    return {
      ...state,
      loading: false,
      error: "Что-то пошло не так",
    };
  },

  [ActionType.GET_BEERS_SUCCESS](state: IStateBeersTypes, action: Action<IBeerModel[]>) {
  
    const nextPage = action.payload.length > 0 ? state.currentPage + 1 : state.currentPage
    return {
      ...state,
      loading: false,
      error: null,
      currentPage: nextPage,
      beers: [...state.beers, ...action.payload],
    };
  },
});