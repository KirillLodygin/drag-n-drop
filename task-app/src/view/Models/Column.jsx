import React from 'react';
import styled from 'styled-components';
import {Task} from './Task';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
	border: 1px solid grey;
	border-radius: 2px;
	background-color: whitesmoke;
	width: 270px;
	padding: 0;
	margin-top: 40px;
	display: flex,
	flex-direction: column;
	
	&:nth-child(1), &:nth-child(2) {
		margin-right: ${props => (props.isOnlyColumn ? '0' : '10px')};
	}
`;

const Title = styled.h3`
	padding: 8px;
`;

const TasksList = styled.div`
	flex-grow: 1;
	padding: 8px;
	transition: background-color 0.4s ease;
	background-color: ${props => (props.isOnlyColumn ? 'lightgrey' : props.isDraggingOver ? 'skyblue' : 'inherit')};
	min-height: 185px;
`;

const TaskListHorizontal = styled.div`
	padding: 8px;
	transition: background-color 0.2s ease;
	background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'whitesmoke')};
	
	display: flex; 
`;

export const Column = ({column, tasks, isHandle, isHorizontal, model, isDropDisabled, index}) => {
	return (
		(model === 'Dragging columns') ?
			<Draggable
				draggableId={column.id}
				index={index}
			>
				{provided => (
					<Container
						{...provided.draggableProps}
						ref={provided.innerRef}
						isOnlyColumn={false}
					>
						<Title
							{...provided.dragHandleProps}
						>
							{column.title}
						</Title>

						<Droppable
							droppableId={column.id}
							isDropDisabled={isDropDisabled}
							type="task"
						>
							{
								(provided, snapshot) => {
									return (
										<TasksList
											{...provided.droppableProps}
											ref={provided.innerRef}
											isOnlyColumn={false}
											isDraggingOver={snapshot.isDraggingOver}
										>
											{tasks.map((task, index) => (
												<Task
													key={task.id}
													task={task}
													index={index}
													isHandle={isHandle}
													isHorizontal={isHorizontal}
												/>))}
											{provided.placeholder}
										</TasksList>
									)
								}
							}
						</Droppable>
					</Container>
				)}
			</Draggable>
		:
			<Container
			isOnlyColumn={model === 'Vertical list' || model === 'Vertical list with handles for drag\'n\'drop'}
		>
			<Title>{column.title}</Title>
			<Droppable
				droppableId={column.id}
				isDropDisabled={isDropDisabled}
				direction={(isHorizontal) ? 'horizontal' : 'vertical'}
			>
				{
					(provided, snapshot) => {
						return (
							(isHorizontal) ?
								<TaskListHorizontal
									{...provided.droppableProps}
									ref={provided.innerRef}
									isOnlyColumn={true}
									isDraggingOver={snapshot.isDraggingOver}
								>
									{tasks.map((task, index) => (
										<Task
											key={task.id}
											task={task}
											index={index}
											isHandle={isHandle}
											isHorizontal={isHorizontal}
										/>))}
									{provided.placeholder}
								</TaskListHorizontal>
								:
								<TasksList
									{...provided.droppableProps}
									ref={provided.innerRef}
									isOnlyColumn={model === 'Vertical list' || model === 'Vertical list with handles for drag\'n\'drop'}
									isDraggingOver={snapshot.isDraggingOver}
								>
									{tasks.map((task, index) => (
										<Task
											key={task.id}
											task={task}
											index={index}
											isHandle={isHandle}
											isHorizontal={isHorizontal}
										/>))}
									{provided.placeholder}
								</TasksList>
						)
					}
				}
			</Droppable>
		</Container>
	)
};