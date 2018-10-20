// combine all reducers in this file
import {combineReducers} from 'redux';
import commentsReducer from 'reducers/comments';

export default combineReducers({
    comments: commentsReducer
});