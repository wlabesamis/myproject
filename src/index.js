import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';

//containers
import Home from './containers/home/container';
import Search from './containers/search/container';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);



ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
          <div>
              <Switch>
                  <Route path="/search/:params*" component={Search} />
                  <Route path="/:params*" component={Home} />
              </Switch>
          </div>
      </BrowserRouter>
  </Provider>
  , document.querySelector('.body-content'));
