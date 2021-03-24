import React, { useState, useCallback, useEffect } from 'react'

// Stilyng
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core'
import AddLocationTwoToneIcon from '@material-ui/icons/AddLocationTwoTone';
import ShareIcon from '@material-ui/icons/Share';
import StarIcon from '@material-ui/icons/Star';
import PinDropIcon from '@material-ui/icons/PinDrop';
import useStyles from '../styles/styles'

const EventCard = (props) => {
    const classes = useStyles();

    return(
        <>
            <Grid item xs={12} sm={6} md={4}>
             <Card className={classes.card}>
               <CardMedia className={classes.cardMedia} 
               image='https://source.unsplash.com/random'
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
                   Brief description Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, reiciendis!
                 </Typography>
               </CardContent>
                 <CardActions>

                   <Button size='small' color='primary'>I'm Going</Button>
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