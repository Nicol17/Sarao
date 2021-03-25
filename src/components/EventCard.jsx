import React, { useContext } from 'react'
import { EventContext } from '../providers/EventProvider'
import { UserContext } from '../providers/UserProvider'

// Stilyng
import { Typography, Button, Card, CardActions, CardContent, CardMedia, Grid } from '@material-ui/core'
// import AddLocationTwoToneIcon from '@material-ui/icons/AddLocationTwoTone';
import ShareIcon from '@material-ui/icons/Share';
import StarIcon from '@material-ui/icons/Star';
import PinDropIcon from '@material-ui/icons/PinDrop';
import TimerIcon from '@material-ui/icons/Timer';
import DateRangeIcon from '@material-ui/icons/DateRange';
import useStyles from '../styles/styles'
import { Link, BrowserRouter as Router, useLocation } from 'react-router-dom'



const EventCard = (props) => {

    const classes = useStyles();
    const eventContext = useContext(EventContext)
    const user = useContext(UserContext)
  
    const onGoingHandler = () => {
        eventContext.subscribeToEvent(props.event, user.displayName)
    }

    return(
        <>
            <Grid item xs={12} sm={6} md={4} >
             <Card className={classes.card}>
               <CardMedia className={classes.cardMedia} 
               image={props.event.img}

               title='Image title'
               />
               <CardContent className={classes.cardContent}>
                 <Typography gutterBottom variant='h4' style={{align:"center"}}>
                     {props.event.title}
                 </Typography>
                 <Typography gutterBottom variant='h6'>
                 <DateRangeIcon className={classes.icon} color="action"/>{props.event.date} <TimerIcon className={classes.icon} color="action"/>{props.event.time} 
                 </Typography>
                 
                 <Typography gutterBottom variant='h6'>
                 <PinDropIcon className={classes.icon} color="secondary"/> <span className='textIcon' >{props.event.location}</span>
                 </Typography>
                 <Typography>

                   <Link to={{
                     pathname:`/event/${props.event.id}`,
                   }} >
                    {props.event.description}
                   </Link>
                 </Typography>
                 <CardActions align='right'>
                 <Button size='medium' color='primary' variant="contained" onClick={onGoingHandler} >I'm Going</Button>
                 </CardActions>
               </CardContent>
             </Card>
           </Grid>
        </>
    )
}

export default EventCard