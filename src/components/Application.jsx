
import React, { useContext, useEffect, useState } from "react";
import { Router } from "@reach/router";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { EventContext } from "../providers/EventProvider";
// import ProfilePage from "./ProfilePage";
import { UserContext } from "../providers/UserProvider";
import PasswordReset from "./PasswordReset";
import { Grid } from '@material-ui/core';
// import EventForm from "./EventForm";
import EventPage from "./EventPage";
import EventDetail from "./EventDetail";




function Application() {
  const user = useContext(UserContext);
  const eventContext = useContext(EventContext)
  const [events, setEvents] = useState([])



  useEffect(() => {

    fetch('https://sarao-18c59-default-rtdb.firebaseio.com/events.json')
    .then(response => response.json())
    .then(responseData => {
        const loadedEvents = []
        
        for (const key in responseData){
            loadedEvents.push({
            id: key,
            title: responseData[key].title,
            description: responseData[key].description,
            date: responseData[key].date,
            time: responseData[key].time,
            location: responseData[key].location,
            address: responseData[key].address,
            city: responseData[key].city,
            img: responseData[key].img

        })
        }

        setEvents(loadedEvents)

    })

  }, [events])

  return (
        user ?
        <>
          {/* <ProfilePage /> */}

          <EventPage events={events} />
          <EventDetail />

        </>
      :

        <Grid container style={{ minHeight: '100vh'}}>
          <Grid item xs={12} sm={6}>
            <img 
            src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            style={{width: '100%', height: '100%', objectFit: 'cover'}} 
            alt="SaraoEvents"/>
            </Grid>

            <Grid container xs={12} sm={6} alignItems="center" direction="column" justify="space-between" style={{padding: 10}}>
          <div />
          <div style={{display: "flex", flexDirection: "column", width:'80%'}}>
            <Grid container justify="center">
              <img src="data:image/png;base64,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" alt="SaraoLogo" />
            </Grid>

            <Router>
          <SignUp path="signUp" />
          <SignIn path="/" />
          <PasswordReset path = "passwordReset" />
        </Router>

          </div>
          <div />
        </Grid>        
        </Grid>
  );
}

export default Application;