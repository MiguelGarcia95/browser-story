import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Switch, Route, withRouter, Redirect} from 'react-router-dom';
import {Provider, connect} from 'react-redux';
import '@atlaskit/css-reset';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from './components/features/home';
import Login from './components/auth/login';
import Profile from './components/user/profile';
import SignUp from './components/auth/signup';
import BeginStory from './components/story/begin';
import store from './store';

const Root = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path='/u/:id' component={Profile} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/s/:id' component={BeginStory} />
        <Route exact path='/' component={Home} />
        <Route path='/'>
          <Redirect to='/' />
        </Route>
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
