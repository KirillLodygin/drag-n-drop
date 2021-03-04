import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {connect} from 'react-redux';
import {setInitialState, resetState} from '../redux/actions/setStateAction';
import {DragNDropBlock} from "./Models/DragNDropBlock";
import {SelectList} from './SelectList/SelectList'

const Routes = ({initialData, modelsArr, setInitialState, resetState}) => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' render={() => <SelectList
					modelsArr={modelsArr}
					initialData={initialData}
					setInitialState={setInitialState}
				/>}
				/>

				<Route path='/drag-n-drop-block' render={() => <DragNDropBlock
					initialData={initialData}
					resetState={resetState}
				/>}
				/>
			</Switch>
		</Router>
	);
};

const mapStateToProps = (store) => {
	return {
		initialData: store.initialState.initialData,
		modelsArr: store.initialState.modelsArr
	};
};

export default connect(mapStateToProps,{setInitialState, resetState})(Routes);