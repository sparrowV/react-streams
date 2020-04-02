import React from 'react';
import {Field,reduxForm} from 'redux-form';
import history from '../../history';


class StreamForm extends React.Component{
    

    displayErrorMsg = (meta)=>{
        if(meta.touched && meta.error){
            return <div>{meta.error}</div>;
        }
    }

    renderInput = (formProps)=>{

        return (
            <div className="field">
                <label>{formProps.label}</label>
                <input {...formProps.input} autoComplete="off" />
                <div className="ui error message">{this.displayErrorMsg(formProps.meta)}</div>
            </div>
        );   
     }

   


     onSubmit =  (formProps)=>{
         this.props.onSubmit(formProps);
       
      }
    
    render(){
            return (
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                    <Field name="title" component={this.renderInput} label="Enter title:"/>
                    <Field name="description" component={this.renderInput} label="Enter description:"/>
                    <button className="ui button promary">Submit</button>
                </form>
            );
        
    }
}

const validate = (formProps)=>{
    let error = {};
    if(!formProps.title){
        error.title =  " you need to enter title!";
    }

    if(!formProps.description){
        error.description = "you need to enter description";
    }
    return error;
}

export default reduxForm({
    form:'streamForm',
    validate
})(StreamForm);

