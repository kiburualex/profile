// ./src/App.js
import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import Subscribe from './pages/Subscribe';
import ThankYou from './pages/ThankYou';
import NotFoundPage from './pages/NotFoundPage';
import PageShell from './components/PageShell';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
            <Route path="/" exact component={PageShell(Subscribe)}></Route>
            <Route path="/thanks" component={PageShell(ThankYou)}></Route>
            <Route component={PageShell(NotFoundPage)} />
        </Switch>
      </div>
    );
  }
}
export default App;