import { combineReducers } from "redux";
import { routerReducer, RouterState } from 'react-router-redux'

import { IStateBeersTypes } from "../pages/beers/modules/beers/models/models";
import { beersReducer } from "../pages/beers/modules/beers/reducer";

export interface RootState {
	beers: IStateBeersTypes,
	routerReducer: RouterState,
}

export default () =>
	combineReducers({
		beers: beersReducer,
		routerReducer,
	});
