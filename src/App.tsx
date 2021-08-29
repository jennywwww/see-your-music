import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';
import './App.css';

import TopBar from './components/TopBar';
import UserProfile from './pages/UserProfile';

function App() {
  return (
    <Router>
      <TopBar></TopBar>
      <Switch>
        <Route path='/userprofile/:username'>
          <UserProfile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
