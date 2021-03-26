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
            © 2021. Sarao was created by ingenious people helping to revert the effects of Covid. Privacy Policy
            </Typography>
        </footer>
        </>
    )
}

export default Bottom;