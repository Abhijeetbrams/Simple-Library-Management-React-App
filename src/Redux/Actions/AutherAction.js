import * as authorsApi from '../../api/authorApi';
import {beginApiCall,apiCallError} from './apiAction';

export const loadAuthorsSuccess=(payload)=>({
    type:"LOAD_AUTHORS",
    payload
});

export function loadAuthors()
{
    return function(dispatch){
        dispatch(beginApiCall())
        return authorsApi
        .getAuthors()
        .then(authors=>{dispatch(loadAuthorsSuccess(authors));
            dispatch(apiCallError());
        console.log("LoadAuthors");})
        .catch(err=>{
            throw err;
        })
    }
}