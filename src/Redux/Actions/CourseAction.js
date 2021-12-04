import * as courseApi from '../../api/courseApi';

export const setCourse=(payload)=>
({
    type:"SET_COURSES",
    payload
});

export const loadCourseSuccess=(payload)=>({
     type :"LOAD_COURSES",
     payload
});

export function loadCourse(){
    return function(dispatch){
        return courseApi
        .getCourses()
        .then(courses=>{
            dispatch(loadCourseSuccess(courses))
        }).catch(
                err=> {throw err;}
            )
    }
}