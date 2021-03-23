import React, {useState} from "react";
import { Link } from "@reach/router";
import { signInWithGoogle } from "../firebase";
import { auth } from "../firebase";
import '../index'
import {Button, InputLabel} from "@material-ui/core";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { FormControl } from '@material-ui/core';

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    
    const theme = createMuiTheme({
      palette:{
        primary:{
          main: '#2196f3'
        }
      
      }
    })

    const signInWithEmailAndPasswordHandler = (event,email, password) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password).catch(error => {
        setError("Error signing in with password and email!");
          console.error("Error signing in with password and email", error);
        });
      };
      
      const onChangeHandler = (event) => {
          const {name, value} = event.currentTarget;
        
          if(name === 'userEmail') {
              setEmail(value);
          }
          else if(name === 'userPassword'){
            setPassword(value);
          }
      };
   
      const APIKey = process.env.REACT_APP_API_KEY

      console.log(APIKey)

  return (
    <div style={{ width: '100%', marginTop:'40px' }}>
        <h1 className="text-3xl mb-2 text-center font-bold" style={{textAlign:'center'}}>Sign In</h1>
        <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
          {error !== null && <div className = "py-4 bg-red-600 w-full text-white text-center mb-3">{error}</div>}
          <FormControl style={{ width: '100%' }}>
            <TextField
              type="email"
              variant="outlined"
              margin="normal"
              required
              fullwidth
              id="userEmail"
              label="Email Address"
              name="userEmail"
              value = {email}
              autoComplete="email"
              className="my-1 p-1 w-full"
              placeholder="E.g: faruq123@gmail.com"
              autoFocus
              onChange = {(event) => onChangeHandler(event)}
            />
            
            
            <TextField
              type="password"
              variant="outlined"
              margin="normal"
              required
              fullwidth
              id="userPassword"
              label="Password"
              name="userPassword"
              value = {password}
              autoComplete="email"
              className="mt-1 mb-3 p-1 w-full"
              placeholder="Your Password"
              autoFocus
              onChange = {(event) => onChangeHandler(event)}
              />
            <br></br>
            <ThemeProvider theme={theme}>
              <Button variant="contained" size="medium" color="primary" onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}>
                <Typography component="h1" variant="h5">
                Sign in
                </Typography>
              </Button>
            </ThemeProvider>
          </FormControl>
          <p className="text-center my-3" style={{textAlign:'center'}}>or</p>
          <ThemeProvider theme={theme} >
             <Button variant="contained" size="medium"  style={{width:'100%'}} color="secondary" className="bg-red-500 hover:bg-red-600 w-full py-2 text-white"
            onClick={() => {signInWithGoogle();}}
            >
              <Typography component="h1" variant="h5">
              Sign in with Google
              </Typography>
            </Button>
          </ThemeProvider>
          <br></br>
          <div style={{ display: 'flex',flexDirection:'row',  justifyContent:'space-between', marginTop:'15px'}}>
          
            <div style={{display:'inline'}}>
              <p className="text-center my-3" style={{display:'inline'}}>
                Don't have an account?{" "}
                <Link to="signUp" className="text-blue-500 hover:text-blue-600">
                  Sign up here
                </Link>{" "}
              </p>
              </div>
              <div style={{display:'inline'}}>
              <p className="text-center my-3" style={{display:'inline'}}>
              <Link to="passwordReset" className="text-blue-500 hover:text-blue-600">
                Forgot Password?
              </Link>
            </p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default SignIn;