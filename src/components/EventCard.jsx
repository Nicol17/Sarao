import React, { useContext } from 'react'
import { EventContext } from '../providers/EventProvider'
import { UserContext } from '../providers/UserProvider'

// Stilyng
import { Typography, Button, Card, CardActions, CardContent, CardMedia, Grid } from '@material-ui/core'
// import AddLocationTwoToneIcon from '@material-ui/icons/AddLocationTwoTone';
import ShareIcon from '@material-ui/icons/Share';
import StarIcon from '@material-ui/icons/Star';
import PinDropIcon from '@material-ui/icons/PinDrop';
import useStyles from '../styles/styles'
import { Link, NavLinkProps } from 'react-router-dom'


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
                 <Typography gutterBottom variant='h4'>
                     {props.event.title}
                 </Typography>
                 <Typography gutterBottom variant='p'>
                    {props.event.date}
                 </Typography>
                 <Typography gutterBottom variant='h6'color='primary'>
                 <PinDropIcon className={classes.icon}/>{props.event.location}
                 </Typography>
                 <Typography>

                   <Link to={{
                     pathname:"/event",
                     eventProps:{

                        event: props.event,
                      
                     }
                   }} >
                    {props.event.description}
                   </Link>

                 </Typography>
               </CardContent>
                 <CardActions>

                   <Button size='small' color='primary' onClick={onGoingHandler} >I'm Going</Button>
                   <Button size='small' color='default'>See Event details</Button>
                   <StarIcon className={classes.icon}/>
                   <ShareIcon className={classes.icon}/>

                 </CardActions>
             </Card>
           </Grid>
        </>
    )
}

export default EventCard