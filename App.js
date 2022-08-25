import React from 'react';
import './App.scss';
import * as ReactBootStrap from "react-bootstrap";
import DankMemes from "./Components/DankMemes";
import Homes from "./Components/Homes";
import Pricing from "./Components/Pricing";
import MoreDeets from "./Components/MoreDeets";
import NavBar from "./Components/Navbar"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Outlet,

} from "react-router-dom";


function App() {
  return (
    <div className="App">
        <Router>
        <NavBar />
 

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/homes" component={Homes}>
              <Homes />
          </Route>
          <Route path="/pricing" component={Pricing}>
            <Pricing />
          </Route>
          <Route path="/deets" component={MoreDeets}>
            <MoreDeets />
          </Route>
          <Route path="/dankmemes" component={DankMemes}>
            <DankMemes />
          </Route>
        </Switch>
    </Router>

    <div class="Background_pic">
        <img class="bg_pic"src="https://cdn.pixabay.com/photo/2017/09/04/09/38/crosses-2713356_960_720.jpg"></img>
      </div>
  
    {/* <div class="cards">
        sad,a,s &nsb
            <div>
              asda
            </div>
            <div>
              asda
            </div>
            <div>
              asdasdadadsfasd
            </div> */}
           {/* </div> */}

     
     
     
     
    </div>
  );
}

export default App;
