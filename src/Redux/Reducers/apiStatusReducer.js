const Initial_State={
    apiCallsInProgress:0
}

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) === "_SUCCESS";
}

export default function apiCallStatusReducer(state=Initial_State, action){
    if (action.type == "BEGIN_API_CALL") {
        return {...state,apiCallsInProgress:state.apiCallsInProgress+1};
      } else if (
        action.type === "API_CALL_ERROR" ||
        actionTypeEndsInSuccess(action.type)
      ) {
        return {...state,apiCallsInProgress:state.apiCallsInProgress-1};
      }
    
      return state;
 /* switch(action.type){
      case "BEGIN_API_CALL":
        return apiCallsInProgress+1;
      case "API_CALL_ERROR":
          return apiCallsInProgress-1;
      case */
  }
