import {applyMiddleware, combineReducers, createStore} from 'redux';
import count, {NAME_SPACE as COUNT_NAME_SPACE} from './count';

// REDUX
const rootReducer = combineReducers({
    [COUNT_NAME_SPACE] :count
});

const store = createStore(
    rootReducer
);
export default store;