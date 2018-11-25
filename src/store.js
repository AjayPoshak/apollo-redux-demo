import { createStore } from 'redux';
const initialState = {
	isLoading: false,
	data: {},
	isError: false
};
function countryReducer(state, action) {
	switch (action.type) {
		case 'FETCH_COUNTRY_DETAILS':
			return { ...state, isLoading: true };

		case 'COUNTRY_DETAILS_SUCCESS':
			return { ...state, isLoading: false, data: action.data };

		case 'COUNTRY_DETAILS_ERROR':
			return { ...state, isLoading: false, data: {}, isError: true };

		default:
			return state;
	}
}

export const store = createStore(countryReducer, initialState);
