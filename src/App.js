import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthContextProvider } from './Components/Auth/useAuth';

import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Entry from './Components/Auth/Entry';
import Quiz from './Components/Quiz/Quiz';
import Notfound from './Components/404/NotFound';
import AddQuestion from './Components/AddQuestion/AddQuestion';
import ManageQuestion from './Components/ManageQuestion/ManageQuestion';
import Score from './Components/Score/Score';
import LeaderBoard from './Components/LeaderBoard/LeaderBoard';
import PBGS9 from './Components/PBGS9/PBGS9';
import SC3 from './Components/SSC/Chemistry/SC3/SC3';
import PB10 from './Components/Primary/Bangla/PB10/PB10';
import SC2 from './Components/SSC/Chemistry/SC2/SC2';
export const WebsiteName = "Onnorokom School";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Router>
          <Header />
          <main id="mainPage">
            <Switch>
              <Route path='/entry'>
                <Entry />
              </Route>
              <Route path='/quiz'>
                <Quiz />
              </Route>
              <Route path='/score'>
                <Score/>
              </Route>
              <Route path='/AddQuestion'>
                <AddQuestion />
              </Route>
              <Route path='/leaderBoard'>
               <LeaderBoard/>
              </Route>
              <Route path='/ManageQuestion'>
                <ManageQuestion />
              </Route>
              <Route path='/PBGS9'>
                <PBGS9/>
              </Route>
              <Route path='/SC2'>
                <SC2/>
              </Route>
              <Route path='/SC3'>
                <SC3/>
              </Route>
              <Route path='/PB10'>
                <PB10/>
              </Route>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path="*">
                <Notfound />
              </Route>
            </Switch>
          </main>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
