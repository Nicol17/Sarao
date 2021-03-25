import React from "react";
import { Switch, Route } from "react-router-dom"
import Application from "./components/Application"
import EventForm from "./components/EventForm"
import UserProvider from "./providers/UserProvider"
import EventDetail from "./components/EventDetail"

function App() {
  return (
    <div className="App">
    <UserProvider>
      <Switch>
        <Route exact path="/" component={Application} />
        <Route exact path="/create-event" component={EventForm} />
        <Route exact path="/event" component={EventDetail} />
      </Switch>
    </UserProvider>
    </div>
  );
}
export default App;
