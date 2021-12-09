import * as courseApi from '../../api/courseApi';
import {beginApiCall,apiCallError} from './apiAction';


export const loadCourseSuccess=(payload)=>({
     type :"LOAD_COURSES",
     payload
});

export const updateCourseSuccess=(payload)=>({
    type:"UPDATE_COURSE",
    payload
});

export const createCourseSuccess=(payload)=>({
  type :"CREATE_COURSE",
  payload
});

export const deleteCourseState=(payload)=>({
    type:"DELETE_COURSE",
    payload
});

export function loadCourse(){
    return function(dispatch){
        dispatch(beginApiCall())
        return courseApi
        .getCourses()
        .then(courses=>{
            dispatch(loadCourseSuccess(courses)),
            dispatch(apiCallError());
            console.log("Load Courses");
        }).catch(
                err=> {throw err;}
            )
    }
}

export function setCourse(course){
    return function(dispatch){
        dispatch(beginApiCall())
        return courseApi
        .saveCourse(course)
        .then(savedCourse=>{
            course.id?dispatch(updateCourseSuccess(savedCourse))
            :dispatch(createCourseSuccess(savedCourse));

            dispatch(apiCallError());
            console.log("Set Courses");
        }).catch(error=>{throw error;});
    }
}


export function deleteCourse(id){
    return function(dispatch){
        return courseApi
        .deleteCourse(id)
        .then(()=>{
            dispatch(deleteCourseState(id))
        })
        .catch((error)=>{
            throw error;
        })
    }
}
/*
export function (){
    return function(dispatch){
    return courseApi
        .save(course)
        .then(()=>{console.log("")})
    }
}*/