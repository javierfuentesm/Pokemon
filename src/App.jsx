import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import Pokedex from './containers/Pokedex';
import Pokemon from './containers/Pokemon';
import Safari from './containers/Safari';
import Header from './components/Header';
import reducer from './redux/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers());
const App = () => (
  <Provider store={store}>

    <Router>
      <Header />

      <Switch>
        <Route exact path="/">
          <Pokedex />
        </Route>
        <Route exact path="/safari" component={Safari} />

        <Route exact path="/pokemon/:id" component={Pokemon} />

      </Switch>
    </Router>
  </Provider>
);
export default App;
