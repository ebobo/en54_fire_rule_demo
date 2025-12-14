import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import NavBar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <Router>
          <NavBar />
          <Switch>
            <Route path='/about' component={About} />
            <Route path='/' component={Home} />
          </Switch>
        </Router>
      </React.Fragment>
    </Provider>
  );
}

export default App;
