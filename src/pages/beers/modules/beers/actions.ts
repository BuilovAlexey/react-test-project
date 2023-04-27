import { ActionType } from '../../../../models/models';
import { IBeerModelRequest } from './models/models';

export const getBeersAction  = (payload: IBeerModelRequest) => ({
    type: ActionType.GET_BEERS,
    payload
  })