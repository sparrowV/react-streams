import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import {fetchStream,deleteStream} from '../../actions';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class StreamDelete extends React.Component{

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }

    renderContent = ()=>{
        if(!this.props.stream){
            return 'Are you sure to delete stream?';
        }

        return `Are you sure to delete the stream with title: ${this.props.stream.title}`
    }

    deleteStreamHelper = async ()=>{
        const id = this.props.match.params.id;
        await this.props.deleteStream(id);
        history.push("/");
    }

    render(){
        if(!this.props.stream) return <div>Loading....</div>;
        const actions = (
            <React.Fragment>
                <button onClick ={this.deleteStreamHelper} className="ui button negative">
                    Delete
                </button>
                <Link to="/" className="ui button">
                    Cancel
                </Link>
            </React.Fragment>
        );

        return (
            <div>
                <div>StreamDelete</div>
                <Modal 
                    title="Delete stream"
                    description = {this.renderContent()}
                    actions={actions}
                    onDismis={()=>history.push("/")}
                />
            </div>
        );    
    }
}

const mapStateToProps = (state,ownProps)=>{
    return {stream:state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps,{fetchStream,deleteStream})(StreamDelete);