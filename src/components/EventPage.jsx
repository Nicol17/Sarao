import React from 'react'
import EventCard from "./EventCard";
//STYLING
import { Typography, Button, Grid, Container } from '@material-ui/core'
import useStyles from '../styles/styles'
import NavBar from './Nav-Footer/NavBar'
import Bottom from './Nav-Footer/Bottom'
import { Link } from 'react-router-dom'


const EventPage = props => {

    const classes = useStyles();

    const goToEventHandler = (event) => {
      console.log('here i am: ', event)
    }

    return (
      // NAVABAR
      <div>
          <NavBar/>
          <div className={classes.container}>

        <Container maxWidth='sm' style={{ marginTop: '40px' }} aligh='center'>
          <Grid container justify="center" >
            <img src="https://firebasestorage.googleapis.com/v0/b/sarao-18c59.appspot.com/o/images%2Findex.png?alt=media&token=630a5ea1-0861-4038-8058-67455da65c8d" alt="SaraoLogo" />
          </Grid>
          <Typography variant='h5' align='center' color='textSecondary' parragraph>
            Join us on events Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, aliquam?
             </Typography>

        </Container>
      </div>
      <br/>

      <div className={classes.buttons} >
              <Grid item style={{width:'40%', alignItems:"center"}}>
                <Typography variant='h4' align='left' style={{}}>
                  Upcoming events
                </Typography>
              </Grid>
            <Grid container spacing={3} Grid item className={classes.cities}>
              <Grid item>
                <Button variant='contained' color='secondary'> All </Button>
              </Grid>
              <Grid item>
                <Button variant='contained' color='secondary'> Vancouver </Button>
              </Grid>
              <Grid item>
                <Button variant='contained' color='secondary'> Toronto </Button>
              </Grid>
            </Grid>
          </div>
          <br/>


        {/* CARDS */}
        <Container className={classes.cardGrid} maxWidth='lg'>

          <br/>
              <Grid container spacing={4} >

                  {
                      props.events.map(
                          event => (

                                    <EventCard  key={event.id} event={event} goToEvent={goToEventHandler}  />

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