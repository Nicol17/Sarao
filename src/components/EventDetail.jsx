import React, { useState, useEffect } from 'react';
import NavBar from './Nav-Footer/NavBar'
// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import {Button, InputLabel} from "@material-ui/core";
// import { createMuiTheme } from '@material-ui/core/styles';
// import { ThemeProvider } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
// import TextField from '@material-ui/core/TextField';
// import { FormControl } from '@material-ui/core';
// import TextareaAutosize from '@material-ui/core/TextareaAutosize';
// import grey from '@material-ui/core/colors/grey';

//width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
const EventDetail= (props) =>{

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [location, setLocation] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [img, setImg] = useState("");

  useEffect(() => {
    // setTitle(props.location.eventProps.event.title)
    // setLocation(props.location.eventProps.event.title)
  })

  const test = () => {
    console.log(props.location.eventProps.event)
  }


  const useStyles=makeStyles((theme) => ({
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      },
    }));
    const classes = useStyles();

    // const theme = createMuiTheme({
    //     palette:{
    //       primary:{
    //         main: '#2196f3'
    //       }
        
    //     },
    //   });

  return (
    <>
    <NavBar />
    <Grid container style={{ minHeight: '100vh'}}>
    <Grid item xs={false} sm={12} md={12} className={classes.image} style={{height:'500px', display:'flex', flexDirection:'row', alignItems:'flex-end'}}>
    <Grid item xs={12} md={8}>
      <h1 style={{marginLeft:'60px', fontSize:'40px'}}>{}Name Event</h1>
      <h2 style={{marginLeft:'60px', fontSize:'25px'}}>{}People is comming</h2>
    </Grid>
    
    </Grid>
    <Grid item xs={false} sm={12} md={12} m={12} style={{marginTop:'40px'}}>
      <div style={{display:'flex', flexDirection:'row',  justifyContent:'flex-start'}}>
        <div style={{width:'60%'}}>
          <h2 style={{marginLeft:'60px', fontSize:'25px'}}>Description</h2>
          <p onClick={test} style={{marginLeft:'60px', fontSize:'18px'}}>{}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
            mollit anim id est laborum</p>
            <br></br>
            <br></br>

            <iframe style={{width:'93%', height:'400px', marginLeft:'60px', border:'none'}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10412.63775668291!2d-123.103834!3d49.273376!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x218237371f987037!2sMundo%20de%20la%20ciencia!5e0!3m2!1ses!2sca!4v1616609693534!5m2!1ses!2sca" ></iframe>
            <h3 style={{marginLeft:'60px', fontSize:'25px'}}>Comments</h3>
          </div>
          <Box style={{marginTop:'20px', marginLeft:'180px', width:'22%', height:'350px', borderRadius:'8px', boxShadow:'1px 1px 4px 0px rgba(50, 50, 50, 0.75)'}} bgcolor="info.main">
          <h2 style={{fontSize:'25px', marginBottom:'0px', color:'white', boxShadow:'1px 10px 0.5', padding:'10px 40px'}} >Details</h2>
              <hr style={{width:'77%', border:'0.5px solid white'}}></hr>
            <div style={{display:'flex', flexDirection:'column', color:'white', padding:'10px 40px'}} >
              
              <div style={{display:'flex', flexDirection:'row', justifyContent: 'space-between'}}>
                <p style={{fontSize:'18px'}}>
                  <span style={{fontWeight:'700'}}>Date:</span>
                  <br></br>{}YYYYY/MM/DD
                </p>
                <p style={{fontSize:'18px', marginRight:'25px'}}>
                  <span style={{fontWeight:'700'}}>Time:</span>
                  <br></br>{}HH:MM
                </p>
              </div> 
              <p style={{fontSize:'18px'}}>
                <span style={{fontWeight:'700'}}>Location:</span>
                <br></br>{location}Location name
                <br></br>{}Address
                <br></br>{}City
              </p>
         </div>
      </Box>
      </div>
      
      <Grid item xs={false} sm={8} md={4} ></Grid>
      <Grid item xs={false} sm={8} md={4} ></Grid>
    </Grid>
    </Grid>
    </>
  );
}

export default EventDetail
