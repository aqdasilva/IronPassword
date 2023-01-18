import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, makeStyles, Paper} from '@material-ui/core';
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

function EmailGenerator() {
  const [email, setEmail] = useState('');
  const [savedEmail, setEmails] = useState([]);
  const classes = useStyles();

  const handleClick = () => {
    const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
    let email = "";
    let length = Math.floor(Math.random() * (18 - 8 + 1)) + 8;
    for (let i = 0; i < length; i++) {
        email += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setEmail(email + "@gmail.com")
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
          label="Generated Gmail"
          variant="outlined"
          InputLabelProps={{
            style: {
              color: 'orange',
            },
          }}
          disabled
        />
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={handleClick}
        >
          Generate Gmail
        </Button>
        <div>{email}</div>
      </div>
    <div className={classes.listContainer}>
        <Paper className={classes.listPaper}>
          <List
            subheader={
              <ListSubheader className={classes.listHeader}>
                  Your custom Gmail
              </ListSubheader>
            }
            >
            {savedEmail.map((p, index) => (
                  <ListItem 
                    key={index}
                    selected={selectedIndex === index}
                    onClick={(event) => handleListItemClick(event, index)}
                    className={selectedIndex === index ? classes.selected : null}
                    style={{
                      display: 'inline-block',
                      padding: '5px',
                      margin: '5px',
                      border: selectedIndex === index ? '4px solid red' : '1px solid gray',
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

export default EmailGenerator;
