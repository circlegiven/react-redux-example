import { combineReducers } from 'redux';
import count, {NAME_SPACE as COUNT_NAME_SPACE} from './count';

const rootReducer = combineReducers({
    [COUNT_NAME_SPACE] :count
});
export default rootReducer;