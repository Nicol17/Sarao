import React, { useState } from 'react'

const EventForm = (props) => {
    
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [location, setLocation] = useState("")
    const [adress, setAdress] = useState("")
    const [city, setCity] = useState("")
    const [image, setImage] = useState()




    const submitHandler = (e) => {
        e.preventDefault()
        props.onAddEvent({
            title: title,
            description: description,
            date: date,
            time, time,
            location: location,
            adress: adress,
            city: city,
            image: image
        })

    }



    return(

        <>
            <h1>Create an Event</h1>
            <form onSubmit={submitHandler}>
                <label>Title:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => {setTitle(e.target.value)}}
                />
                <br />

                <label>Description:</label>
                <input
                    type="text"
                    id="description"
                    value={description}
                    onChange={(e) => {setDescription(e.target.value)}}
                />
                <br />

                <label>Date:</label>
                <input
                    type="date"
                    id="date"
                    value={date}
                    onChange={(e) => {setDate(e.target.value)}}
                />
                <br />

                <label>Time:</label>
                <input
                    type="time"
                    id="time"
                    value={time}
                    onChange={(e) => {setTime(e.target.value)}}
                />
                <br />

                <label>Location:</label>
                <input
                    type="text"
                    id="location"
                    value={location}
                    onChange={(e) => {setLocation(e.target.value)}}
                />
                <br />

                <label>Adress:</label>
                <input
                    type="text"
                    id="adress"
                    value={adress}
                    onChange={(e) => {setAdress(e.target.value)}}
                />

                <label>City:</label>
                <input
                    type="text"
                    id="city"
                    value={city}
                    onChange={(e) => {setCity(e.target.value)}}
                />
                <br />

                <label>Image:</label>
                <input
                    type="file"
                    id="image"
                    value={image}
                    onChange={(e) => {setImage(e.target.value)}}
                />
                <br />

                <button type='submit'>Add Event</button>
            </form>

        </>
    )
}

export default EventForm