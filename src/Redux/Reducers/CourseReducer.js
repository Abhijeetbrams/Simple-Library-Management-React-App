import { courses } from "../../../tools/mockData";

let Initial_State={
    courses:[]
}



let CourseReducer=(state=Initial_State,action)=>{
    switch(action.type){
    case "CREATE_COURSE":
       return {...state,courses:[...state.courses,action.payload]}
    case "LOAD_COURSES":
        return {...state,courses:[action.payload]}
    case "UPDATE_COURSES":
        console.log(state.courses);
        return state.courses.map(course=>{course.id===action.payload.id
            ?action.payload:course})
    case "DELETE_COURSE":
        return {...state,courses:courses.filter(course=>course.id!==action.payload)}
    default:
        return state;
    }  

}

export default CourseReducer;