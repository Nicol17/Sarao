import React from 'react'

import EventCard from "./EventCard";

const EventPage = props => {

    return (
        <div>
            <h2>Events</h2>
            <ul>
                {
                    props.events.map(
                        event => (
                            <li 
                                key={event.id}
                                
                            >
                                <EventCard event={event} />

                            </li>
                        )
                    )
                }
            </ul>
        </div>
    )
}

export default EventPage