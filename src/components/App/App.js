import React from "react";
import { Router, Route, Switch, Redirect, useHistory } from "react-router-dom";

// import logo from '../../logo.svg';
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";


function App() {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = React.useState(true);

  return (
      <Router history={history}>

        <div className="page">

          <Header loggedIn={loggedIn} />
          
          <Switch>

          <Route exact path="/">
          <Main />
          </Route>

          <Route path="/saved-news">
          <SavedNews />
          </Route>

          </Switch>
                    
          <Footer />
        </div>
       </Router>
  );
}

export default App;
 