import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, makeStyles, Paper, Select } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ListSubheader from '@material-ui/core/ListSubheader';
import { useDrag } from 'react-dnd'



const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: theme.spacing(2),
  },
  TextField: {
    margin: theme.spacing(1),
    backgroundColor: props => props.color,
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: props => props.color,
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
  listPaper: {
    border: 'solid',
    borderTopColor: 'orange',
    borderRightColor: 'yellow',
    borderLeftColor: 'yellow',
    borderBottomColor: 'orange',
    borderWidth: '8px',
  },
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '200px',
    position: 'relative',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100%',
    maxWidth: '200px',
  },

}));

function PasswordGenerator() {
  const [color, setColor] = useState('red');
  const classes = useStyles({color});
  const [password, setPassword] = useState('');
  const [savedPasswords, setPasswords] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      switch (color) {
        case 'red':
          setColor('orange');
          break;
        case 'orange':
          setColor('yellow');
          break;
        case 'yellow':
          setColor('red');
          break;
        default:
          break;
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [color]);

  function generatePassword() {

    console.log('Button pressed:', count + 1);
    setCount(count + 1);
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

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };


  return (
    <div className={classes.parentContainer}>
      <div className={classes.container}>
        <TextField
          className={classes.textField}
          label="Generated Password"
          variant="outlined"
          InputLabelProps={{
            style: {
              color: 'orange',
            },
          }}
          value={password}
          disabled
        />
        <Button
          className={classes.button}
          variant="contained"
          onClick={generatePassword}
        >
          Generate Password
        </Button>
      </div>
      <div className={classes.listContainer}>
        <Paper className={classes.listPaper}>
          <List
            subheader={
              <ListSubheader className={classes.listHeader}>
                  Your Generated Passwords
              </ListSubheader>
            }
            >
            {savedPasswords.map((p, index) => (
              <ListItem 
              key={index}
              button
              selected={selectedIndex === index}
              onClick={(event) => handleListItemClick(event, index)}
              className={selectedIndex === index ? classes.selected : null}
              style={{
                display: 'inline-block',
                padding: '5px',
                margin: '5px',
                border: selectedIndex === index ? '1px solid blue' : '1px solid gray',
              }}
              >
                <ListItemText primary={p} />
              </ListItem>
            ))}
          </List>
        </Paper>
       
      </div>
  </div>
  );
}

export default PasswordGenerator;