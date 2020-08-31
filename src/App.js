import React, { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar/Sidebar';
import Chat from './Chat/Chat';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from './Login/Login';
import { useStateValue } from './contextapi/StateProvider';

function App() {
  // const [user, setUser] = useState(null);
  const [{ user }, dispatch] = useStateValue()


  return (
    <div className="app">
      <div className='app__body'>

        {
          (!user) ? <Login /> : (
            <Router>
              <Sidebar />
              <Switch>
                <Route path="/rooms/:roomId">
                  <Chat />
                </Route>
                <Route exact path="/">
                  {/* <Chat /> */}
                </Route>
              </Switch>
            </Router>
          )
        }

      </div>
    </div>
  );
}

export default App;
