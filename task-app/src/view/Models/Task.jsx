import React from 'react';
import styled from 'styled-components';
import { Draggable } from "react-beautiful-dnd";

const Handle = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 4px;
	background-color: rgba(255,69,0,.7);
	margin-right: 8px;
	display: none;
	transition: display 0.2s ease;
	
	&:active {
		display: block;
		background-color: rgb(255,69,0);
	}
`;

const ContainerVertical = styled.div`
	border: 1px solid;
	border-color: ${props => (props.isDragDisabled ? 'red' : "black")};
	border-radius: 2px;
	padding: 8px;
	margin-bottom: 8px;
	transition: background-color 0.2s ease;
	background-color: ${props => (props.isDragDisabled ? 'whitesmoke' : props.isDragging ? 'lightgreen' : 'lightgrey')};
	color: ${props => (props.isDragging ? 'orange' : 'black')};
	font-weight: ${props => (props.isDragging ? 'bold' : 'normal')};
	display: flex;
	
	&:hover{
		${Handle}{
			display: block;
		}
	}
`;

const ContainerHorizontal = styled.div`
	border: ${props => (props.isDragging ? '2px' : '1px')} solid;
	border-color: ${props => (props.isDragging ? 'red' : "black")};
	border-radius: 50%;
	padding: 8px;
	margin-right: 8px;
	background-color: ${props => (props.isDragging ? 'lightgreen' : 'whitesmoke')};
	color: ${props => (props.isDragging ? 'red' : 'black')};
	width: 40px;
	height: 40px;
	
	display: flex;
	justify-content: center;
    align-items: center;
`;

export const Task = ({task, index, isHandle, isHorizontal}) => {
	const isDragDisabled = (task.hasOwnProperty('isLocked')) ? task.isLocked : false;
	return (
		<Draggable
			draggableId={task.id}
			index={index}
			isDragDisabled={isDragDisabled}
		>
			{(provided, snapshot) => (
				(isHorizontal) ?
					<ContainerHorizontal
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						ref={provided.innerRef}
						isDragging={snapshot.isDragging}
					>
						{task.content[task.content.length - 1]}
					</ContainerHorizontal>
					:
					(isHandle) ?
						<ContainerVertical
							{...provided.draggableProps}
							ref={provided.innerRef}
							isDragging={snapshot.isDragging}
							isDragDisabled={isDragDisabled}
						>
							<Handle {...provided.dragHandleProps}/>
							{task.content}
						</ContainerVertical> :
						<ContainerVertical
							{...provided.draggableProps}
							{...provided.dragHandleProps}
							ref={provided.innerRef}
							isDragging={snapshot.isDragging}
							isDragDisabled={isDragDisabled}
						>
							{task.content}
						</ContainerVertical>
			)}
		</Draggable>
	)
};