import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header/Header';
import ListBroadbandBundles from './listBroadbandBundles/ListBroadbandBundles';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={ListBroadbandBundles} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
