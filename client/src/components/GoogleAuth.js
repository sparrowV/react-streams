import React from 'react';
import {signIn,signOut} from '../actions';
import {connect } from 'react-redux';

class GoogleAuth extends React.Component{


    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:'179307914187-vor5hs8ir61skiv8k3n4c8nmbtoim1p9.apps.googleusercontent.com',
                scope:'email'
            })
            .then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
             
                // this.setState({isSignedIn:this.auth.isSignedIn.get()});
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        })
    }

    onAuthChange = (isSignedIn)=>{
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }else{
            this.props.signOut();
        }
    }

    onSignIn = ()=>{
        this.auth.signIn();
    }

    onSignOut = ()=>{
        this.auth.signOut();
    }

    render(){
        switch(this.props.isSignedIn){
            case null:
                return null;  
            case true:
                return (
                    <button onClick ={this.onSignOut} className="ui red google button">
                          <i className="google icon"></i>  
                          Sign Out
                    </button>
                );
            case false:
                return (
                    <button onClick={this.onSignIn} className="ui red google button">
                        <i className="google icon"></i>
                        Sign in with google!
                    </button>
                );      
        }
        
    }
}

const mapStateToProps = (state)=>{
    return {isSignedIn:state.auth.isSignedIn};
}

export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth);