import {SIGN_IN,SIGN_OUT} from '../actions/types';


const INIT_AUTH = {
    isSignedIn:null,
    userId:null
};


export default (state=INIT_AUTH,action)=>{
    switch (action.type){
        case SIGN_IN:
            return {...state,isSignedIn:true,userId:action.payload};

        case SIGN_OUT:
            return {...state,isSignedIn:false,userId:null};
            
        default:
            return state;    
    }
}