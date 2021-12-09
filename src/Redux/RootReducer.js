import { combineReducers } from "redux";
import CourseReducer from './Reducers/CourseReducer';
import AuthorsReducers from './Reducers/AuthorsReducers';
import apiCallStatusReducer from './Reducers/apiStatusReducer';

const rootReducer=combineReducers({
    courses:CourseReducer,
    authors:AuthorsReducers,
    apiCallStatus:apiCallStatusReducer
});

export default rootReducer; 