const Initial_State={
    authors:[]
};

const AuthorsReducers=(state=Initial_State,action)=>{
    
switch(action.type){
    case "LOAD_AUTHORS":
        console.log(action.payload);
        return {...state,authors:[action.payload]}
    default:
        return state;

 }
}

export default AuthorsReducers;