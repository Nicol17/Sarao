import React from 'react'
import { Link } from 'react-router-dom'
// import EventForm from '../EventForm'


//STYLING
import {  AppBar, Button, CssBaseline, Grid, Toolbar, } from '@material-ui/core'
import useStyles from '../../styles/styles'


const NavBar = (props) => {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0}>
        <Toolbar className={classes.toolbar}>

          <Grid className={classes.navBarStyle} >
          <Link to="/" style={{textDecoration: 'none'}}>
            <img className={classes.logoNavBar} src="https://firebasestorage.googleapis.com/v0/b/sarao-18c59.appspot.com/o/images%2Findex.png?alt=media&token=630a5ea1-0861-4038-8058-67455da65c8d" alt="Sarao Logo" />
          </Link>
            <Grid item>
              <Link to="/create-event" style={{textDecoration: 'none'}}>
                <Button variant='outlined' color="secondary" > Create an event </Button>
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

    </div>

  )
}

export default NavBar
