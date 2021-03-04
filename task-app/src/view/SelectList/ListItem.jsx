import React from 'react';
import styled from 'styled-components';

const CherMark = styled.span`
	opacity: 0;
	transition: opacity 0.2s ease;
`;

const Item = styled.p`
	cursor: pointer;
	
	&:hover{
		${CherMark}{
			opacity: 1;
		}
	}
`;

export const ListItem = ({index, text, setState}) => {
	const onClickAction = () => {
		setState(index);
	};

	return (
		<Item onClick={onClickAction}>
			<CherMark>&#10004; </CherMark>{text}
		</Item>
	)
};