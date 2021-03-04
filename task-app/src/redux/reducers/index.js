import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { initialState } from './setInitialState';

// eslint-disable-next-line
export default history =>
	combineReducers({
		router: connectRouter(history),
		initialState: initialState,
	});