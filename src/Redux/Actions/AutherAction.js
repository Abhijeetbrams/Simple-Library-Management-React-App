import * as authorsApi from '../../api/authorApi';

export const loadAuthorsSuccess=(payload)=>({
    type:"LOAD_AUTHORS",
    payload
});

export function loadAuthors()
{
    return function(dispatch){
        return authorsApi
        .getAuthors()
        .then(authors=>{dispatch(loadAuthorsSuccess(authors));})
        .catch(err=>{
            throw err;
        })
    }
}