import React, { useState, useCallback, useEffect } from 'react'

const EventCard = (props) => {


    return(
        <>

            <span>{props.event.title}</span>
            <span>{props.event.date}</span>
            <span>{props.event.location}</span>
            <span>{props.event.image}</span>
            <span>people going: </span>
            <button>I'm Going</button>
            



        </>
    )
}

export default EventCard