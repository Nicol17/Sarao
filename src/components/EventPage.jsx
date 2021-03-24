import React from 'react'
import EventCard from "./EventCard";
//STYLING
import { Typography, AppBar, Button, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core'
import useStyles from '../styles/styles'
import NavBar from './Nav-Footer/NavBar'
import Bottom from './Nav-Footer/Bottom'

const EventPage = props => {

    const classes = useStyles();

    return (
      // NAVABAR
      <div>
          <NavBar/>
      <br/>

        {/* CARDS */}
        <Container className={classes.cardGrid} maxWidth='md'>
        <Typography variant='h4' align='' color=''>
          Upcoming events...
        </Typography>
          <br/>
              <Grid container spacing={4} >

                  {
                      props.events.map(
                          event => (

                                  <EventCard key={event.id} event={event} />

                          )
                      )
                    }

              </Grid>
          </Container>
        
      <br/>
      <Bottom/>
    </div>
    )
}

export default EventPage