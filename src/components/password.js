import React, { useState } from 'react';
import { List, ListItem, ListItemText, makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ListSubheader from '@material-ui/core/ListSubheader';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: theme.spacing(2),
  },
  TextField: {
    margin: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
  listContainer: {
    margin: theme.spacing(1),
    width: '400px',
    height: '1000px',
    overflowY: 'scroll',
    float: 'right',
  },
  parentContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  listHeader: {
    color: 'red',
    fontSize: '24px',
  },
}));

function PasswordGenerator() {
  const classes = useStyles();
  const [password, setPassword] = useState('');
  const [savedPasswords, setPasswords] = useState([]);

  function generatePassword() {
    //Code to generate password
    let lowercase = "abcdefghijklmnopqrstuvwxyz";
    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let special = "!@#$%^&*()";
    let password = '';

    //Add 18 characters to the password
    for (let i = 0; i < 18; i++) {
      password += lowercase[Math.floor(Math.random() * lowercase.length)];
    }

    //Add 4 lowercase characters to the password
    for (let i = 0; i < 4; i++) {
      password += lowercase[Math.floor(Math.random() * lowercase.length)];
    }

    //Add 3 uppercase characters to the password
    for (let i = 0; i < 3; i++) {
      password += uppercase[Math.floor(Math.random() * uppercase.length)];
    }

    //Add 2 numbers to the password
    for (let i = 0; i < 2; i++) {
      password += numbers[Math.floor(Math.random() * numbers.length)];
    }

    //Add 2 special characters to the password
    for (let i = 0; i < 2; i++) {
      password += special[Math.floor(Math.random() * special.length)];
    }
    setPassword(prevPassword => password);
    setPasswords(prevPasswords => [...prevPasswords, password]);
  }

  return (
    <div className={classes.parentContainer}>
      <div className={classes.container}>
        <TextField
          className={classes.textField}
          label="Generated Password"
          variant="outlined"
          value={password}
          disabled
        />
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={generatePassword}
        >
          Generate Password
        </Button>
      </div>
      <div className={classes.listContainer}>
        <List
          subheader={
            <ListSubheader className={classes.listHeader}>
                Your Generated Passwords
            </ListSubheader>
          }
          >
          {savedPasswords.map((p, index) => (
            <ListItem key={index}>
              <ListItemText primary={p} />
            </ListItem>
          ))}
        </List>
      </div>
  </div>
  );
}

export default PasswordGenerator;