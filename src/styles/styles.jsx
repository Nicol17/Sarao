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
         marginRight: '10px',
         marginLeft: '20px',
         color:'secondary',
    },
    icondateTime:{

    },
    buttons:{
         marginTop: '30px',
         width:'80%', display:"flex", 
        justifyContent:'space-between',
        margin:'auto'
    },
    cities:{
     width:'100%', 
     // display:"flex", 
     // justifyContent:'flex-end'
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
     //     flexGrow: 1
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
     marginBottom:'50px',
     justifyContent:'center',
     alignItems:'center',

    },
    image: {
     backgroundImage: 'url(https://source.unsplash.com/random)',
     backgroundRepeat: 'no-repeat',
     backgroundSize: 'cover',
     backgroundPosition: 'center',
     height:'350px',
   },
   primaryBtn: {
       backgroundColor: '#2196f3',
  },
  marginAuto:{
       margin:'0px auto',
  },
  detailsBox:{
     margin:'20px auto',
     backgroundColor:'#2196f3',
     height:'330px', 
     //width:'80%', 
     borderRadius:'8px 8px 0px 0px', 
     boxShadow:'1px 1px 4px 0px rgba(50, 50, 50, 0.75)',
     
  },
  detailsEvent:{
     fontSize:'25px', 
     marginLeft:'0px',
     marginBottom:'0px', 
     color:'white', 
     boxShadow:'1px 10px 0.5', 
     padding:'10px 30px 10px'

  },

  checkBtn:{
     borderRadius:'0px 0px 0px 8px', 
     padding:'20px',
     width:'33.3%', 
     
  },
  noBtn:{
     '&:hover':{
          backgroundColor:'#d63024',
          color:'white',
     }  
       
  },
  maybeBtn:{
       
     '&:hover':{
          backgroundColor:'#d69524',
          color:'white',
     } 
  }

}))

export default useStyles;