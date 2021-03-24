import React, { createContext, useState } from 'react'
import axios from 'axios'



export const EventContext = createContext({

    subscribeToEvent: () => {},


})

const EventContextProvider = (props) => {

    const subscribeToEvent = async (event, displayName) => {
        // console.log(displayName)
        // console.log(event.id)
        const id = event.id

        const url = `https://sarao-18c59-default-rtdb.firebaseio.com/events/${event.id}/peopleGoing.json`
        const resp = await axios.get(url);

        const prevPeoplegoing = resp.data



        fetch(url, {
            method: 'PUT',
            body: prevPeoplegoing + 1,
            headers: { 'Content-Type': 'application/json'}
        })


    }


    return (
        <EventContext.Provider value={ { subscribeToEvent: subscribeToEvent } }>
            {props.children}
        </EventContext.Provider>
    )
}

export default EventContextProvider