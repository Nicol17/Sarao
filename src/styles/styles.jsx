import { makeStyles } from '@material-ui/core/styles'

// Hook for styles
const useStyles = makeStyles((theme) =>({
    container: {
         backgroundColor: theme.palette.background.paper,
         padding: theme.spacing(8, 0, 6)
    },
    icon: {
         marginRight: '20px',
    },
    buttons:{
         marginTop: '30px'
    },
    cardGrid:{
         paddingTop: '20px 0px'
    },
    card:{
         height: '100%',
         display: 'flex',
         flexDirection: 'column'
    },
    cardMedia:{
         paddingTop:'56.25%'
    },
    cardContent:{
         flexGrow: 1
    },
    footer:{
        backgroundColor: theme.palette.background.paper,
        padding: '50px 0'
    }

}))

export default useStyles;