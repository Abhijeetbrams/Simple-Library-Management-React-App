import { combineReducers } from "redux";
import CourseReducer from './Reducers/CourseReducer';

const rootReducer=combineReducers({
    courses:CourseReducer
});

export default rootReducer; 