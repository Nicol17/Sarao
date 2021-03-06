import React, { useContext, useEffect, useState } from "react";
import { Router } from "@reach/router";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
// import { EventContext } from "../providers/EventProvider";
import { UserContext } from "../providers/UserProvider";
import PasswordReset from "./PasswordReset";
import { Grid } from '@material-ui/core';
import EventPage from "./EventPage";

function Application() {
  const user = useContext(UserContext);
  // const eventContext = useContext(EventContext)
  const [events, setEvents] = useState([])
  const [filter, setFilter] = useState("all")

  useEffect(() => {

    fetch('https://sarao-18c59-default-rtdb.firebaseio.com/events.json')
    .then(response => response.json())
    .then(responseData => {

        if (filter === "toronto") {

            const loadedEvents = []
        
            for (const key in responseData){    

              if (responseData[key].city === 'Toronto') {

                loadedEvents.push({
                id: key,
                title: responseData[key].title,
                description: responseData[key].description,
                date: responseData[key].date,
                time: responseData[key].time,
                location: responseData[key].location,
                address: responseData[key].address,
                city: responseData[key].city,
                img: responseData[key].img,
                peopleGoing: responseData[key].peopleGoing
                })
            }
          }

          setEvents(loadedEvents)

        } else if (filter === "vancouver") {

            const loadedEvents = []

            for (const key in responseData){

              if (responseData[key].city === 'Vancouver') {
                
                loadedEvents.push({
                id: key,
                title: responseData[key].title,
                description: responseData[key].description,
                date: responseData[key].date,
                time: responseData[key].time,
                location: responseData[key].location,
                address: responseData[key].address,
                city: responseData[key].city,
                img: responseData[key].img,
                peopleGoing: responseData[key].peopleGoing
                })
            }
          }

          setEvents(loadedEvents)

        } else {

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
              img: responseData[key].img,
              peopleGoing: responseData[key].peopleGoing
              })
          }
  
          setEvents(loadedEvents)

        }



    })

  }, [filter])

  const filterHandlerAll = () => {

    setFilter('all')

  }

  const filterHandlerVan = () => {

    setFilter('vancouver')

  }

  const filterHandlerTor = () => {

    setFilter('toronto')

  }

  return (
        user ?
        <>
          {/* <ProfilePage /> */}

          <EventPage events={events} filterHandlerAll={filterHandlerAll} filterHandlerVan={filterHandlerVan} filterHandlerTor={filterHandlerTor} />

        </>
      :

        <Grid container style={{ minHeight: '100vh'}}>
          <Grid item xs={12} sm={6}>
            <img 
            src="https://firebasestorage.googleapis.com/v0/b/sarao-18c59.appspot.com/o/images%2Fsamantha-gades-fIHozNWfcvs-unsplash.jpg?alt=media&token=7023aae0-a14e-4add-a32a-95eaab09e402" 
            style={{width: '100%', height: '100%', objectFit: 'cover'}} 
            alt="SaraoEvents"/>
            </Grid>

            <Grid container xs={12} sm={6} alignItems="center" direction="column" justify="space-between" style={{padding: 10}}>
          <div />
          <div style={{display: "flex", flexDirection: "column", width:'80%'}}>
            <Grid container justify="center">
              <img src="https://firebasestorage.googleapis.com/v0/b/sarao-18c59.appspot.com/o/images%2Findex.png?alt=media&token=630a5ea1-0861-4038-8058-67455da65c8d" alt="SaraoLogo" />
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