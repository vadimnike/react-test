import React from 'react';
import {render} from 'react-dom';
import {Route, Switch} from 'react-router-dom';
import Header from './component/Header'
import Home from './component/Home'
import Service from './component/Service'
import { HashRouter } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/service" component={Service} />
                </Switch>
            </div>
        );
    }
}

render((
    <HashRouter>
        <App />
    </HashRouter>

), document.getElementById('app'));