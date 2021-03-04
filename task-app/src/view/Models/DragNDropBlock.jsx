import React, {useState} from "react";
import {Redirect} from 'react-router-dom';
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from 'styled-components';
import { Column } from './Column';
import {Header} from "../Header";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 20px;
    height: 100vh;
    background-color: whitesmoke;
`;

const InnerContainer = styled.div`
	display: flex;
`;

const Reset = styled.p`
	font-size: 20px;
	color: blue;
	margin-top: 30px;
	cursor: pointer;
	text-decoration: underline;
`;

export const DragNDropBlock = ({initialData, resetState}) => {
	const [state, setState] = useState(initialData);

	const onDragStart = start => {
		setState({
			...state, homeIndex: state.columnOrder.indexOf(start.source.droppableId)
		});
	};

	const onDragEnd = result => {
		setState({
			...state, homeIndex: null
		});

		const {destination, source, draggableId, type} = result;

		if(!destination){
			return;
		}

		if(
			destination.droppableId === source.droppableId && destination.index === source.index
		){
			return;
		}

		if(type === 'column') {
			const newColumnOrder = Array.from(state.columnOrder);
			newColumnOrder.splice(source.index, 1);
			newColumnOrder.splice(destination.index, 0, draggableId);

			setState({...state, columnOrder: newColumnOrder});
			return;
		}

		const start = state.columns[source.droppableId];
		const finish = state.columns[destination.droppableId];

		if(start === finish) {
			const newTaskIds = Array.from(start.taskIds);

			newTaskIds.splice(source.index, 1);
			newTaskIds.splice(destination.index, 0, draggableId);

			const newColumn = {
				...start,
				taskIds: newTaskIds
			};

			const newState = {
				...state,
				columns: {
					...state.columns,
					[newColumn.id]: newColumn
				}
			};

			setState(newState);
			return;
		}

		const startTaskIds = Array.from(start.taskIds);
		startTaskIds.splice(source.index, 1);
		const newStart = {
			...start,
			taskIds: startTaskIds
		};

		const finishTaskIds = Array.from(finish.taskIds);
		finishTaskIds.splice(destination.index, 0, draggableId);
		const newFinish = {
			...finish,
			taskIds: finishTaskIds
		};

		const newState = {
			...state,
			columns: {
				...state.columns,
				[newStart.id]: newStart,
				[newFinish.id]: newFinish
			}
		};

		setState(newState);
	};

	const onClickAction = () => {
		resetState();
	};

	return (
		(!initialData || !initialData.header) ?
			<Redirect to='/'/> :
		<MainContainer>
			<Header text={state.header}/>
			{
				(state.header === 'Dragging columns') ?
					<DragDropContext
						onDragEnd={onDragEnd}
					>
						<Droppable
							droppableId="all-columns"
							direction="horizontal"
							type="column"
						>
							{provided => (
								<InnerContainer
									{...provided.droppableProps}
									ref={provided.innerRef}
								>
									{state.columnOrder.map((columnId, index) => {
										return <Column
											key={columnId}
											column={state.columns[columnId]}
											tasks={state.columns[columnId].taskIds.map(taskId => state.tasks[taskId])}
											isHandle={state.isHandle}
											isHorizontal={state.isHorizontal}
											model={state.header}
											isDropDisabled={(!state.isFromLeftToRight) ? state.isFromLeftToRight : index < state.homeIndex}
											index={index}
										/>
									})}
								</InnerContainer>
							)}
						</Droppable>
					</DragDropContext>
					:
					<DragDropContext
						onDragStart={onDragStart}
						onDragEnd={onDragEnd}
					>
						<InnerContainer>
							{state.columnOrder.map((columnId, index) => {
								return <Column
									key={columnId}
									column={state.columns[columnId]}
									tasks={state.columns[columnId].taskIds.map(taskId => state.tasks[taskId])}
									isHandle={state.isHandle}
									isHorizontal={state.isHorizontal}
									model={state.header}
									isDropDisabled={(!state.isFromLeftToRight) ? state.isFromLeftToRight : index < state.homeIndex}
								/>
							})}
						</InnerContainer>
					</DragDropContext>
			}
			<Reset onClick={onClickAction}>Choose a new demo</Reset>
		</MainContainer>
	);
};