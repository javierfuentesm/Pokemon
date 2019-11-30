import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import Home from './containers/Home';
import Detail from './containers/Detail';
import Header from './components/Header';
import reducer from './redux/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers());
const App = () => (
  <Provider store={store}>

    <Router>
      <Header />

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/datail" exact>
          <Detail />
        </Route>
      </Switch>
    </Router>
  </Provider>
);
export default App;
