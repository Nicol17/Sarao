import React, { useState, useEffect } from 'react';
import useStyles from '../styles/styles';
import CheckIcon from '@material-ui/icons/Check';
import HelpIcon from '@material-ui/icons/Help';
import ClearIcon from '@material-ui/icons/Clear';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {Button} from "@material-ui/core";
import { createMuiTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { FormControl } from '@material-ui/core';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import NavBar from './Nav-Footer/NavBar'



const EventDetail=(props) =>{
  const classes= useStyles();
  const [username, setUsername] = useState("")
  const [comment, setComment] = useState("")

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

  const submitHandler = async (e) => {
    e.preventDefault()
  }

  


    const theme = createMuiTheme({
        palette: {
          primary: {
            main: '#2196f3'
          },
        
        }
      }
    )
        
    
    
   const comments = [
     {id: 1,
      name: 'John Doe',
      message: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
      person: 'url(https://source.unsplash.com/random)',},
      {id: 2,
        name: 'Aleix Axelle',
        message: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
        person: 'url(https://source.unsplash.com/random)',},
     {id: 3,
          name: 'Halli Adelheid',
          message: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
          person: 'url(https://source.unsplash.com/random)',},
      {id: 4,
            name: 'Tanvi Caetana',
            message: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
            person: 'url(https://source.unsplash.com/random)',},     
   ]   


   return (

    <>
    <NavBar />
    <Grid container style={{ minHeight: '100vh'}}>
    <Grid item xs={12} sm={12} md={12} className={classes.image} style={{height:'500px', display:'flex', flexDirection:'row', alignItems:'flex-end'}}>
    <Grid item xs={12} sm={12} md={12}>
      <h1 style={{ fontSize:'40px', marginLeft:'40px'}}>{}Name Event</h1>
      <h2 style={{ fontSize:'25px', marginLeft:'40px'}}>{}People is comming</h2>
    </Grid>
    
    </Grid>
    <Grid container xs={false} sm={12} md={11}  style={{margin:'10px auto'}}>
    
        <Grid container xs={11} sm={11} md={7} className={classes.marginAuto}>
          <h2 style={{ fontSize:'25px'}}>Description</h2>
          <p onClick={test} style={{fontSize:'18px'}}>{}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
            mollit anim id est laborum</p>
            <br></br>
            <br></br>
            <br></br>
            <iframe  style={{width:'93%', height:'400px', border:'none'}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10412.63775668291!2d-123.103834!3d49.273376!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x218237371f987037!2sMundo%20de%20la%20ciencia!5e0!3m2!1ses!2sca!4v1616609693534!5m2!1ses!2sca" ></iframe>
            <Grid container xs={false} sm={12} md={12} style={{marginTop:'40px'}} className={classes.marginAuto}>
              <CssBaseline />
              <Grid container xs={false} sm={12} md={12} className={classes.marginAuto}>
              <Typography component="h1" variant="h5" >Comments</Typography>
              </Grid>
              <Grid container xs={false} sm={12} md={12} className={classes.marginAuto}>
              <List style={{ width:'90%', marginTop:'15px'}}>
                {comments.map(({ id, name, message, person }) => (
                  <React.Fragment key={id}>
                    <ListItem >
                      <ListItemAvatar>
                        <Avatar alt="Profile Picture" src={person} />
                      </ListItemAvatar>
                      <ListItemText primary={name} secondary={message} />
                    </ListItem>
                  </React.Fragment>
                  
                ))}
                <hr style={{background:'black', border:'1px solid gray'}}></hr>
                <br></br>
                
                <Typography component="h4" variant="h5" >Leave a comment</Typography>
                 <FormControl style={{width:'100%'}}>
                          <TextField
                          type="text"
                          //variant="outlined"
                          margin="normal"
                          //required
                          fullwidth
                          id="username"
                          label="User Name"
                          name="Username"
                          value = {username}
                          //autoComplete="email"
                          className="my-1 p-1 w-full"
                          placeholder="Your name"
                          autoFocus
                          style={{width:'50%'}}
                          onChange={(e) => {setUsername(e.target.value)}}
                          />
                          <br></br>
                          <TextareaAutosize
                          id="comment" 
                          autoFocus
                          rowsMin={3}
                          style={{width:'90%'}}
                          label="Comment"
                          value={comment}
                          aria-label="empty textarea" 
                          placeholder="Leave a comment"
                          onChange={(e) => {setComment(e.target.value)}}
                          >
                </TextareaAutosize>
                <br></br>
                <br></br>
                       
                  <Button onClick={submitHandler} style={{width:'50%'}} className={classes.primaryBtn} variant="contained" size="medium" color="primary">
                       <Typography component="h1" variant="h5">
                              Send Comment
                       </Typography>
                  </Button>
 
                    </FormControl>
             </List>
             </Grid>
             <br></br>
             <br></br>
             <br></br>
            </Grid>
          </Grid>
          <Grid container xs={12} sm={12} md={5}  className={classes.marginAuto}>

          <Grid container xs={12} sm={8} md={8} className={classes.detailsBox} bgcolor="info.main">
          <h2 className={classes.detailsEvent} >Details</h2>
              <hr style={{width:'77%', border:'0.5px solid white'}}></hr>
            <div style={{display:'flex', flexDirection:'column', color:'white', padding:'10px 40px'}} >
              
              <div style={{display:'flex', flexDirection:'row', justifyContent: 'space-between'}}>
                <p style={{fontSize:'18px'}}>
                  <span style={{fontWeight:'700'}}>Date:</span>
                  <br></br>{}YYYYY/MM/DD
                </p>
                <p style={{fontSize:'18px', marginLeft:'90px'}}>
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
         <Grid container style={{background:'white', marginTop:'4px', borderRadius:'0px 0px 8px 8px', display:'flex', flexDirection:'row'}}>
         <Button
          variant="contained"
          color="default"
          className={classes.checkBtn}
          style={{'hover':{color:'white', backgroundColor:'#2196f3'}}}
          startIcon={<CheckIcon />}
        >
        </Button>

        <Button
          variant="contained"
          color="default"
          style={{borderRadius:'0px', padding:'20px',width:'33.3%'}}
          className={classes.button}
          startIcon={<ClearIcon />}
        >
        </Button>

        <Button
          variant="contained"
          color="default"
          style={{borderRadius:'0px 0px 8px 0px', padding:'20px',width:'33.3%'}}
          className={classes.button}
          startIcon={<HelpIcon />}
        >
        </Button>
         </Grid>
      
      </Grid>
      </Grid>
      
     
    </Grid>
    </Grid>
    </>
  );

}
export default EventDetail;
