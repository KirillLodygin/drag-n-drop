import {SET_STATE, RESET_STATE} from '../reducers/setInitialState';

const initialState = (index) => {
	switch(index) {
		case 1:
			return {
				isHandle: true,

				isFromLeftToRight: false,

				isHorizontal: false,

				header: 'Vertical list with handles for drag\'n\'drop',

				tasks: {
					'task-1': {id: 'task-1', content: 'TASK 1'},
					'task-2': {id: 'task-2', content: 'TASK 2'},
					'task-3': {id: 'task-3', content: 'TASK 3'},
					'task-4': {id: 'task-4', content: 'TASK 4'},
				},

				columns: {
					'column-1': {
						id: 'column-1',
						title: 'To do',
						taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
					},
				},

				columnOrder: ['column-1']
			};

		case 2:
			return {
				isHandle: false,

				isFromLeftToRight: false,

				isHorizontal: true,

				header: 'Horizontal list',

				tasks: {
					'task-1': {id: 'task-1', content: 'TASK 1'},
					'task-2': {id: 'task-2', content: 'TASK 2'},
					'task-3': {id: 'task-3', content: 'TASK 3'},
					'task-4': {id: 'task-4', content: 'TASK 4'},
				},

				columns: {
					'column-1': {
						id: 'column-1',
						title: 'To do',
						taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
					},
				},

				columnOrder: ['column-1']
			};

		case 3:
			return {
				isHandle: false,

				isFromLeftToRight: false,

				isHorizontal: false,

				header: 'Verticals list with multiple drop targets',

				tasks: {
					'task-1': {id: 'task-1', content: 'TASK 1'},
					'task-2': {id: 'task-2', content: 'TASK 2'},
					'task-3': {id: 'task-3', content: 'TASK 3'},
					'task-4': {id: 'task-4', content: 'TASK 4'},
					'task-5': {id: 'task-5', content: 'TASK 5'},
				},

				columns: {
					'column-1': {
						id: 'column-1',
						title: 'To do',
						taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
					},

					'column-2': {
						id: 'column-2',
						title: 'In progress',
						taskIds: ['task-5']
					},

					'column-3': {
						id: 'column-3',
						title: 'Done',
						taskIds: []
					},
				},

				columnOrder: ['column-1', 'column-2', 'column-3']
			};

		case 4:
			return {
				isHandle: false,

				isFromLeftToRight: false,

				isHorizontal: false,

				header: 'Verticals list with multiple drop targets and immobile block',

				tasks: {
					'task-1': {id: 'task-1', content: 'TASK 1', isLocked: true},
					'task-2': {id: 'task-2', content: 'TASK 2', isLocked: false},
					'task-3': {id: 'task-3', content: 'TASK 3', isLocked: false},
					'task-4': {id: 'task-4', content: 'TASK 4', isLocked: false},
					'task-5': {id: 'task-5', content: 'TASK 5', isLocked: false},
				},

				columns: {
					'column-1': {
						id: 'column-1',
						title: 'To do',
						taskIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5']
					},

					'column-2': {
						id: 'column-2',
						title: 'In progress',
						taskIds: []
					},

					'column-3': {
						id: 'column-3',
						title: 'Done',
						taskIds: []
					},
				},

				columnOrder: ['column-1', 'column-2', 'column-3']
			};

		case 5:
			return {
			isHandle: false,

			isFromLeftToRight: true,

			isHorizontal: false,

			header: 'Vertical lists with drop targets only from left to right',

			tasks: {
				'task-1': {id: 'task-1', content: 'TASK 1'},
				'task-2': {id: 'task-2', content: 'TASK 2'},
				'task-3': {id: 'task-3', content: 'TASK 3'},
				'task-4': {id: 'task-4', content: 'TASK 4'},
				'task-5': {id: 'task-5', content: 'TASK 5'},
			},

			columns: {
				'column-1': {
					id: 'column-1',
					title: 'To do',
					taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
				},

				'column-2': {
					id: 'column-2',
					title: 'In progress',
					taskIds: []
				},

				'column-3': {
					id: 'column-3',
					title: 'Done',
					taskIds: []
				},
			},

			columnOrder: ['column-1', 'column-2', 'column-3']
		};

		case 6:
			return {
				isHandle: false,

				isFromLeftToRight: false,

				isHorizontal: false,

				header: 'Dragging columns',

				tasks: {
					'task-1': {id: 'task-1', content: 'TASK 1'},
					'task-2': {id: 'task-2', content: 'TASK 2'},
					'task-3': {id: 'task-3', content: 'TASK 3'},
					'task-4': {id: 'task-4', content: 'TASK 4'},
				},

				columns: {
					'column-1': {
						id: 'column-1',
						title: 'Some kind of title',
						taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
					},

					'column-2': {
						id: 'column-2',
						title: 'Another kind of title',
						taskIds: []
					},
				},

				columnOrder: ['column-1', 'column-2']
			};

		default:
			return {
				isHandle: false,

				isFromLeftToRight: false,

				isHorizontal: false,

				header: 'Vertical list',

				tasks: {
					'task-1': {id: 'task-1', content: 'TASK 1'},
					'task-2': {id: 'task-2', content: 'TASK 2'},
					'task-3': {id: 'task-3', content: 'TASK 3'},
					'task-4': {id: 'task-4', content: 'TASK 4'},
				},

				columns: {
					'column-1': {
						id: 'column-1',
						title: 'To do',
						taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
					},
				},

				columnOrder: ['column-1']
			}
	}
};

export const setInitialState = (index) => {
	return {
		type: SET_STATE,
		payload: initialState(index)
	}
};

export const resetState = () => {
	return {
		type: RESET_STATE,
		payload: {}
	}
};