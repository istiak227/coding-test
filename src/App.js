import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ApiTesting from "./ApiTesting";
import Home from "./Home";
import Navbar from "./Navbar";

// Task 1 - Home
// Write a Method/State/ or use Library To Capture The Input From The field
// Put the Input, and Update the Friend's Lists State.
// Rember to Keep The Initial Friends On The List
// Bonus: Remove a friend from the list.

// Task 2 - ApiTesting
// use this api to fetch the data https://jsonplaceholder.typicode.com/posts
// Initially the component will display 5 Posts
// Add a load more button to load 5 more Posts.  

// Task 3 - PostDetails (need to create yourself)
// Create a Post Details Component
// Route To Post Details using ID, send props Post Detail Component
// Render Post Details Compoent


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
            {/* Add a Route for Post Details */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
