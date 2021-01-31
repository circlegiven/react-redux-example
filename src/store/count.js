import {createAction, handleActions} from 'redux-actions';

export const NAME_SPACE = 'COUNT';

const INCREASE = `${NAME_SPACE}/INCREASE`;
const DECREASE = `${NAME_SPACE}/DECREASE`;

const initialState = {
    count: 0
};

export const actions = {
    increaseCount: createAction(INCREASE),
    decreaseCount: createAction(DECREASE),
}

const reducer = {
    [INCREASE]: (state, action) => ({ ...state, count: state.count + 1}),
    [DECREASE]: (state, action) => ({ ...state, count: state.count - 1}),
};
export default handleActions(reducer, initialState);