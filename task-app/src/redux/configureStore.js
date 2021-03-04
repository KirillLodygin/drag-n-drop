import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import logger from 'redux-logger';
import createrootReducer from './reducers';

export const history = createBrowserHistory();

export default function configureStore() {
	const store = createStore(
		createrootReducer(history),
		compose(
			applyMiddleware(routerMiddleware(history),logger),
			window.__REDUX_DEVTOOLS_EXTENSION__
				? window.__REDUX_DEVTOOLS_EXTENSION__()
				: f => f
		)
	);
	return store;}