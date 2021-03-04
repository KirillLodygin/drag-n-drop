export const SET_STATE = 'SET_STATE';
export const RESET_STATE = 'RESET_STATE';

export const initialState = (state = {
	modelsArr: [
		'Vertical list;',
		'Vertical list with handles for drag\'n\'drop;',
		'Horizontal list',
		'Vertical lists with multiple drop targets;',
		'Vertical lists with multiple drop targets and immobile block;',
		'Vertical lists with drop targets only from left to right;',
		'Dragging columns;'
	],

}, action) => {
	switch (action.type) {
		case SET_STATE:
			return {...state, initialData: action.payload};

		case RESET_STATE:
			return {...state, initialData: action.payload};

		default:
			return state;
	}
};