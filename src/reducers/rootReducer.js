import { FETCH_ALL,FETCH_ONE,OPEN_MODAL,CLOSE_MODAL,SEARCH,LOGIN } from "../actions/actionTypes"

const initialState = {
    authenticated: false,
    searchText: '',
    modalState:false,
    activeMovie:{},
    movies: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL:
            return { ...state, movies: state.movies.concat(action.payload), activeMovie: action.payload[0] };
        case FETCH_ONE:
            return { ...state, activeMovie: action.payload };
        case OPEN_MODAL:
            return { ...state, activeMovie: action.payload, modalState:true };
        case CLOSE_MODAL:
            return { ...state, modalState:false};
        case SEARCH:
            return { ...state, searchText: action.payload};
        case LOGIN:
            return { ...state, authenticated: true};
        default:
        return state;
    }
};
export default rootReducer;