import React, { useState, } from "react";
import { auth } from "../firebase";
// import { UserContext } from "../providers/UserProvider";
import { Link } from "@reach/router";
import {Button, } from "@material-ui/core";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { FormControl } from '@material-ui/core';


const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [error, setError] = useState(null);


  const theme = createMuiTheme({
    palette:{
      primary:{
        main: '#2196f3'
      }
    
    }
  });

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    }
  };

  const sendResetEmail = event => {
    event.preventDefault();
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
          setEmailHasBeenSent(true);
        setTimeout(() => {setEmailHasBeenSent(false)}, 3000);
      })
      .catch(() => {
        setError("Error resetting password. Please, introduce your email.");
      });
  };
  return (
    <div style={{ width: '100%', marginTop:'40px' }}>
      <h1 className="text-3xl mb-2 text-center font-bold" style={{textAlign:'center'}}>
        Reset your Password
      </h1>
      <div className="border border-blue-300 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
        <FormControl style={{ width: '100%', marginBottom:'15px' }}>
          {emailHasBeenSent && (
            <div className="py-3 bg-green-400 w-full text-white text-center mb-3">
              <h3 style={{textAlign:'center'}}>
                An email has been sent to you!
              </h3>
              
            </div>
          )}
          {error !== null && (
            <div className="py-3 bg-red-600 w-full text-white text-center mb-3">
              <h3 style={{textAlign:'center'}}>
                {error}
              </h3>
            </div>
          )}
          
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
              className="mb-3 w-full px-1 py-2"
              placeholder="Introduce your email"
              autoFocus
              onChange={onChangeHandler}
            />
          <br></br>
         <ThemeProvider theme={theme}>
              <Button className="w-full bg-blue-400 text-white py-3" variant="contained" size="medium" color="primary" onClick={event => {sendResetEmail(event);}}>
                <Typography component="h1" variant="h5">
                Send me a reset link
                </Typography>
              </Button>
            </ThemeProvider>
        </FormControl>

        <Link
          to="/"
          className="my-2 text-blue-700 hover:text-blue-800 text-center block" 
        >
          &larr; Back to sign in page
        </Link>
      </div>
    </div>
  );
};

export default PasswordReset;