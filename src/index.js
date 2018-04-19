import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch} from 'react-router-dom'


import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import StorePicker from "./components/StorePicker/StorePicker";
import NotFound from "./components/NotFound/NotFound"

const Root = ()=>{
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} component={StorePicker}/>
                <Route path={'/store/:storeid'} component={App}/>
                <Route component={NotFound}/>
            </Switch>

        </BrowserRouter>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
