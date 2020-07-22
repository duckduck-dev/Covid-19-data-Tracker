import React from 'react';
import './styles/main.css'; 
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Home from './Home/home';
import NavBar from './nav/Nav';
import About from './maps/map';
import Graphs from './graphs/graphs';
import Dashboard from './dashboard/dashboard';
import  Footer from './footer/footer';

const App = () => {
            return(
                  <Router>
                        <div>
                        <NavBar />
                              <Switch>
                                    <Route path="/" exact component={Home} />
                                    <Route path="/maps" component={About} />
                                    <Route path="/graphs" component={Graphs} />
                                    <Route path="/dashboards" component={Dashboard} />
                              </Switch>
                        <Footer />
                        </div>
                  </Router>   
            );
}

    

export default App;