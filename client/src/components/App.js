import React from 'react';
import {Router,Route} from 'react-router-dom';
import StreamShow from './streams/StreamShow';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import Header from './Header';
import history from '../history';
import StreamDetail from './streams/StreamDetail';


const App = ()=>{
    return (
    <div className="ui container">
        <Router history={history}>
            <div>
                <Header />
                <Route path="/" exact component={StreamShow}/>
                <Route path="/streams/new" exact component={StreamCreate}/>
                <Route path="/streams/edit/:id" exact component={StreamEdit}/>
                <Route path="/streams/delete/:id" exact component={StreamDelete}/>
                <Route path="/streams/:id(\d+)" exact component={StreamDetail}/>
                
            </div>
        </Router>
    </div>
    );
}

export default App;