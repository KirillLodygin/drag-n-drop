import React from 'react';
import {Provider} from 'react-redux';
import { ConnectedRouter } from "connected-react-router";
import RoutesContainer from './view/RoutesContainer'

export const App = ({store, history}) => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <RoutesContainer/>
            </ConnectedRouter>
        </Provider>
    );
};