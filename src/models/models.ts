
export enum ActionType {
    GET_BEERS = 'action/GET_BEERS',
    GET_BEERS_SUCCESS = 'action/GET_BEERS_SUCCESS',
    GET_BEERS_ERROR = 'action/GET_BEERS_ERROR',
  }
  
  export interface Action<T> {
    type: ActionType;
    payload: T;
  }
  