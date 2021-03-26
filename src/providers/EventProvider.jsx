import React, { createContext, useState } from 'react'
import axios from 'axios'



export const EventContext = createContext({

    subscribeToEvent: () => {},
    addEventHandler: () => {}

})

const EventContextProvider = (props) => {

    const [events, setEvents] = useState([])


    const addEventHandler = (eventInfo) => {

        console.log('here')

    
        fetch('https://sarao-18c59-default-rtdb.firebaseio.com/events.json', {
          method: 'POST',
          body: JSON.stringify(eventInfo),
          headers: { 'Content-Type': 'application/json'}
        })
          .then(response => response.json())
          .then(responseData => {
            setEvents((prevState) => [
                ...prevState,
                { id: responseData.id, ...eventInfo}
              ])
        })

        // redirect to home
        // window.location.href = "/"
        console.log(events)
    }
    

    const subscribeToEvent = async (event, displayName) => {

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
        <EventContext.Provider value={ { subscribeToEvent: subscribeToEvent, addEventHandler: addEventHandler } }>
            {props.children}
        </EventContext.Provider>
    )
}

export default EventContextProvider