import React from "react";
import { Switch, Route } from "react-router-dom"
import Application from "./components/Application";
import EventForm from "./components/EventForm"
import UserProvider from "./providers/UserProvider";

function App() {
  return (
    <div className="App">
    <UserProvider>
      <Switch>
        <Route exact path="/" component={Application} />
        <Route exact path="/create-event" component={EventForm} />
      </Switch>
    </UserProvider>
    </div>
  );
}
export default App;
