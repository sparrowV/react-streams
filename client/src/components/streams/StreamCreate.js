import React from 'react';
import {Field,reduxForm} from 'redux-form';
import {createStream} from '../../actions';
import {connect} from 'react-redux';
import history from '../../history';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component{
    

     onSubmit = async (formProps)=>{
         await this.props.createStream(formProps);
         history.push("/");
      }
    
    render(){
            return (
                <div>
                    <h2>Stream Create</h2>
                    <StreamForm onSubmit={this.onSubmit} />
                </div>
            );
        
    }
}
export default connect(null,{createStream})(StreamCreate);