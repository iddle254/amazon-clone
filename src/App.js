import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./context/StateProvider.context";
import "./App.css";
import Nav from "./components/Nav/Nav.component";
import Home from "./components/home/Home.component";
import Checkout from "./components/checkout/Checkout.page";
import Login from "./components/login/login.page";
import { auth } from "./firebase/firebase";

function App() {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // if user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // if the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      // cleanup
      unsubscribe();
    };
  }, [dispatch]);
  return (
    <Router>
      <div className="app">
        <Nav />
        <Switch>
          <Route exact path="/checkout">
            <Checkout />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
