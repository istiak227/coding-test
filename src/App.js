import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ApiTesting from "./ApiTesting";
import Home from "./Home";
import Navbar from "./Navbar";

// Task 1 - Home
// Write Method/State/ or use Library To Capture The Input From The field
// Put the Input, and Update the Friend's Lists.
// Rember to Keep The Initial Friends On The List
// Bonus: Remove a friend from the list.

// Task 2 - ApiTesting
// use this api to fetch the data https://jsonplaceholder.typicode.com/posts

// Task 3 - ArticleDetails (need to create yourself)
// Create a Article Details Component
// Route To Article Details using ID, send props Article Detail Component
// Render Article Details Compoent


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/ApiTesting">
              <ApiTesting />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
