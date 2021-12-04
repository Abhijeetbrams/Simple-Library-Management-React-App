import { combineReducers } from "redux";
import CourseReducer from './Reducers/CourseReducer';
import AuthorsReducers from './Reducers/AuthorsReducers';

const rootReducer=combineReducers({
    courses:CourseReducer,
    authors:AuthorsReducers
});

export default rootReducer; 