import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Switch, Route, withRouter} from 'react-router-dom';
import {Provider, connect} from 'react-redux';
import '@atlaskit/css-reset';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from './components/features/home';
import Login from './components/auth/login';
import SignUp from './components/auth/signup';
import store from './store';

const Root = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={SignUp} />
      </Switch>
    </HashRouter>
  )
}

const RootWithAuth = withRouter(connect()(Root));

const RootWithRouter = () => {
  return(
    <Provider store={store}>
      <HashRouter>
        <RootWithAuth />
      </HashRouter>
    </Provider>
  )
}

ReactDOM.render(<RootWithRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
