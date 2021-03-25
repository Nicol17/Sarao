import React from 'react'

//STYLING
import { Typography } from '@material-ui/core'
import useStyles from '../../styles/styles'



const Bottom = (props) => {
    const classes = useStyles();
    return (
        <>
        <footer className={classes.footer}>
            <Typography variant='h5' align='center' gutterBottom>
            SARAO
            </Typography>
            <Typography variant='subtitle1' align='center' color='textPrimary'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, voluptatem.
            </Typography>
        </footer>
        </>
    )
}

export default Bottom;