import React, { useState, useContext } from 'react'
import {Button, InputLabel} from "@material-ui/core";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import NavBar from './Nav-Footer/NavBar'
import Bottom from './Nav-Footer/Bottom'
import useStyles from '../styles/styles'
import { storage } from "../firebase"
import { EventContext } from "../providers/EventProvider";
import { withStyles } from '@material-ui/core/styles';
import { Select, MenuItem } from '@material-ui/core';
import  '../styles/onlyCss.css';



const EventForm = (props) => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [location, setLocation] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [img, setImg] = useState(null);


    const eventContext = useContext(EventContext)

    // const useStyles=makeStyles((theme) => ({
    //     image: {
    //         backgroundImage: 'url(https://source.unsplash.com/random)',
    //         backgroundRepeat: 'no-repeat',
    //         backgroundSize: 'cover',
    //         backgroundPosition: 'center',
    //     },
    //     }));

    const classes = useStyles();

    const theme = createMuiTheme({
        palette:{
            primary:{
                main: '#2196f3'
        }
        
        },
    });

    const handleCitySelection = (e) => {
        setCity(e.target.value);
    }

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImg(e.target.files[0])
        }
    };

    console.log("image: ", img)

    const submitHandler = async (e) => {
        e.preventDefault()

        const uploadTask = storage.ref(`images/${img.name}`).put(img);
        await uploadTask.on(
        "state_changed",
        snapshot => {
            const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
        },
        error => {
            console.log(error);
        },
        () => {
            storage
            .ref("images")
            .child(img.name)
            .getDownloadURL()
            .then(url => {
                if(url) {

                    eventContext.addEventHandler({
                        title: title,
                        description: description,
                        date: date,
                        time, time,
                        location: location,
                        address: address,
                        city: city,
                        img: url
                    })
                    
                }
            });
        }
        );
    }

    return(
    
        <>
        <NavBar/>
        <Grid container style={{ minHeight: '100vh'}}>
        <Grid item xs={12} sm={12} md={12} className={classes.image} />
        <div className={classes.hero}>  

            <h1 style={{textAlign:'center'}}>Create an Event</h1>
            
            <FormControl className='formWidth'>
            <TextField
                    type="text"
                    //variant="outlined"
                    margin="normal"
                    //required
                    fullwidth
                    id="title"
                    label="Title"
                    name="title"
                    value = {title}
                    //autoComplete="email"
                    className="my-1 p-1 w-full"
                    placeholder="Name your event"
                    autoFocus
                    onChange={(e) => {setTitle(e.target.value)}}
            />
            
                <br />
                <br />
            <InputLabel style={{marginTop:'80px'}}>Description</InputLabel>
                <br></br>
                <TextareaAutosize
                id="description" 
                autoFocus
                rowsMin={3}
                label="Description"
                value={description}
                aria-label="empty textarea" 
                placeholder="Describe your event"
                onChange={(e) => {setDescription(e.target.value)}}
                >
                </TextareaAutosize>
                <br/>
                <div style={{display: 'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <TextField
                    style={{width:'45%'}}
                    type="date"
                    //variant="outlined"
                    margin="normal"
                    //required
                    fullwidth
                    id="date"
                    label="Date"
                    name="date"
                    value = {date}
                    //autoComplete="email"
                    className="my-1 p-1 w-full"
                    //autoFocus
                    onChange={(e) => {setDate(e.target.value)}}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            
                <TextField
                    style={{width:'45%'}}
                    type="time"
                    //variant="outlined"
                    margin="normal"
                    //required
                    fullwidth
                    id="time"
                    label="Time"
                    name="time"
                    value = {time}
                    //autoComplete="email"
                    className="my-1 p-1 w-full"
                    //autoFocus
                    onChange={(e) => {setTime(e.target.value)}}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </div>
            
                <TextField
                    type="text"
                    //variant="outlined"
                    margin="normal"
                    //required
                    fullwidth
                    id="location"
                    label="Location 📍"
                    name="location"
                    value = {location}
                    //autoComplete="email"
                    className="my-1 p-1 w-full"
                    placeholder="City"
                    autoFocus
                    onChange={(e) => {setLocation(e.target.value)}}
            />
            
                <br />
                <div style={{display: 'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <TextField
                    style={{width:'45%'}}
                    type="text"
                    //variant="outlined"
                    margin="normal"
                    //required
                    fullwidth
                    id="address"
                    label="Address"
                    name="address"
                    value = {address}
                    //autoComplete="email"
                    className="my-1 p-1 w-full"
                    placeholder="Address"
                    autoFocus
                    onChange={(e) => {setAddress(e.target.value)}}
                />

                <InputLabel>City
                <Select
                value={city}
                onChange={handleCitySelection}>
                    
                    <MenuItem value="Vancouver">Vancouver</MenuItem>
                    <MenuItem value="Toronto">Toronto</MenuItem>
                    
                </Select></InputLabel>
                

                {/* <TextField
                    style={{width:'45%'}}
                    type="text"
                    //variant="outlined"
                    margin="normal"
                    //required
                    fullwidth
                    id="city"
                    label="City"
                    name="city"
                    value = {city}
                    //autoComplete="email"
                    className="my-1 p-1 w-full"
                    placeholder="City"
                    autoFocus
                    onChange={(e) => {setCity(e.target.value)}}
                />     */}
                </div> 
                <br />
                <div>
                <InputLabel style={{marginTop:'430px' }}>Image</InputLabel>
                <input
                    style={{marginTop:'40px', width:'100%' }}
                    type="file"
                    //variant="outlined"
                    margin="normal"
                    //required
                    fullwidth
                    id="image"
                    label="Image"
                    name="image"
                    //autoComplete="email"
                    className="my-1 p-1 w-full"
                    placeholder="Image"
                    autoFocus
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={handleChange} 
                /> 
                </div>
                <br />
                <br />
            <ThemeProvider theme={theme}>
                <Button onClick={submitHandler} className="w-full bg-blue-400 text-white py-3" variant="contained" size="medium" color="primary">
                    <Typography component="h1" variant="h5">
                    Create Event
                    </Typography>
                </Button>
            </ThemeProvider>
            
            </FormControl>
            </div>
            </Grid>
            <Bottom/>
        </>
    )
}

export default EventForm