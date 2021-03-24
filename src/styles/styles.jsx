import { makeStyles } from '@material-ui/core/styles'

// Hook for styles
const useStyles = makeStyles((theme) =>({
     navBarStyle: {
        display:"flex", 
        justifyContent:'space-between', 
        flexDirection:'colunm', 
        alignItems:"center", width:'100%'
        },
     logoNavBar:{
          width: '90px'
     },
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
         flexDirection: 'column',
         paddingTop: '30px'
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
    },
    hero: {
     display:'flex',
     flexDirection:'column',
     width: '100%',
     marginTop:'40px',
     marginBottom:'50px'
    },
    image: {
     backgroundImage: 'url(https://source.unsplash.com/random)',
     backgroundRepeat: 'no-repeat',
     backgroundSize: 'cover',
     backgroundPosition: 'center',
   },

}))

export default useStyles;