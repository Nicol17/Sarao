import React, { useContext, useState } from "react";
import { Link } from "@reach/router";
import { auth, signInWithGoogle, generateUserDocument } from "../firebase";
import {Button, InputLabel} from "@material-ui/core";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { FormControl } from '@material-ui/core';


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);

  const theme = createMuiTheme({
      palette:{
        primary:{
          main: '#2196f3'
        }
      
      }
    });

  const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
    event.preventDefault();
    try{
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      generateUserDocument(user, {displayName});
    }
    catch(error){
      setError('Error Signing up with email and password');
    }
      
    setEmail("");
    setPassword("");
    setDisplayName("");
  };

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  };

  return (
    <div style={{ width: '100%', marginTop:'40px' }}>
      <h1 className="text-3xl mb-2 text-center font-bold" style={{textAlign:'center'}}>Sign Up</h1>
      <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
        {error !== null && (
          <div className="py-4 bg-red-600 w-full text-white text-center mb-3">
            {error}
          </div>
        )}
        <FormControl style={{ width: '100%' }}>
         
          <TextField
              type="text"
              variant="outlined"
              margin="normal"
              required
              fullwidth
              id="displayName"
              label="Display Name"
              name="displayName"
              value = {displayName}
              //autoComplete="email"
              className="my-1 p-1 w-full"
              placeholder="Username"
              autoFocus
              onChange={event => onChangeHandler(event)}
            />
          
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
              <Button variant="contained" size="medium" color="primary" onClick = {(event) => {createUserWithEmailAndPasswordHandler(event, email, password)}}>
                <Typography component="h1" variant="h5">
                Sign Up
                </Typography>
              </Button>
            </ThemeProvider>
         
        </FormControl>
        <p className="text-center my-3" style={{textAlign:'center'}}>or</p>
        <ThemeProvider theme={theme} >
             <Button variant="contained" size="medium"  style={{width:'100%'}} color="secondary" className="bg-red-500 hover:bg-red-600 w-full py-2 text-white"
            onClick={() => {
              try {
                signInWithGoogle();
              } catch (error) {
                console.error("Error signing in with Google", error);
              }
            }}
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
                Have an account?{" "}
                <Link to="/" className="text-blue-500 hover:text-blue-600">
                  Sign in here
                </Link>{" "}
              </p>
              </div>
              <div style={{display:'inline'}}>
              <p className="text-center my-3" style={{display:'inline'}}>
              <Link to="/passwordReset" className="text-blue-500 hover:text-blue-600">
                Forgot Password?
              </Link>
            </p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default SignUp;