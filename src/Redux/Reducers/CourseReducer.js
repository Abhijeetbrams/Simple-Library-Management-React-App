
let Initial_State={
    courses:[]
}

let CourseReducer=(state=Initial_State,action)=>{
    switch(action.type){
    case "SET_COURSES":
       return {...state,courses:[...state.courses,action.payload]}
    default:
        return state;
    }  

}

export default CourseReducer;