import React from 'react';
import {Redirect} from 'react-router-dom';
import styled from 'styled-components';
import {Header} from "../Header";
import {ListItem} from "./ListItem"

const Container = styled.div`
	text-align: left;
	font-size: 20px;
	color: blue;
	margin-top: 30px;
	margin-left: 20px;
`;

const isEmpty = (obj) => {
	for (let key in obj) {
		return false;
	}
	return true;
};

export const SelectList = ({setInitialState, modelsArr, initialData}) => {
	return(
		(initialData && !isEmpty(initialData)) ?
			<Redirect to='/drag-n-drop-block'/> :
		<>
			<Header text={'Select Drag\'n\'Drop Model'}/>
			<Container>
				{modelsArr.map((item, i) => {
					return <ListItem key={i} index={i} text={item} setState={setInitialState}/>
				})}
			</Container>
		</>
	)
};