import streamApi from '../apis/streams';
import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_STREAM,
    FETCH_STREAM,
    FETCH_STREAMS,
    UPDATE_STREAM,
    DELETE_STREAM
} from './types';

export const signIn = (userId)=>{
    return {
        type: SIGN_IN,
        payload:userId
    };
   
}

export const signOut = ()=>{
    return {
        type:SIGN_OUT
    };
}

export const createStream = (formValues)=> async (dispatch,getState)=>{
    const {userId} = getState().auth;
    const response = await streamApi.post('/streams',{...formValues,userId});
    dispatch({type:CREATE_STREAM,payload:response.data});
}

export const fetchStream = (id)=>async (dispatch)=>{
    const response = await streamApi.get(`/streams/${id}`);
    dispatch({type:FETCH_STREAM,payload:response.data});
}

export const fetchStreams = ()=>async (dispatch)=>{
    const response = await streamApi.get('/streams');
    dispatch({type:FETCH_STREAMS,payload:response.data});
}

export const updateStream = (id,formValues)=>async(dispatch)=>{
    const response = await streamApi.patch(`/streams/${id}`,formValues);
    dispatch({type:UPDATE_STREAM,payload:response.data});
}

export const deleteStream = (id)=>async(dispatch)=>{
    await streamApi.delete(`/streams/${id}`);
    dispatch({type:DELETE_STREAM,payload:id});
}


