import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddressView from './views/AddressView';
import AlertView from './views/AlertView';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/address/:address" component={AddressView} />
        <Route path="/alerts" component={AlertView} />
      </Switch>
    </Router>
  );
}

export default App;
