import './App.css';
import PasswordGenerator from './components/password';
import EmailGenerator from './components/email';
import { makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  image: {
    position: 'absolute',
    top: 0,
    left: '5%',
    transform: 'translateX(-50%)',
    width: '300px',
    maxWidth: '400px',
  },
  password: {
    position: 'absolute',
    top: '8px',
    left: '380px',
  },
  email: {
    position: 'absolute', /* This sets the container2 as an absolute position */
    top: '8px', /* This sets the distance of container2 from the top */
    right: '400px',

  }
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      <img src={require('./images/ironpassLogo.png')} className={classes.image} alt="Your Image" />
      <header className="App-header">
        <div className={classes.password}>
          <PasswordGenerator />
        </div>
      </header>
      <div className={classes.email}>
          <EmailGenerator />
        </div>
    </div>
  );
}

export default App;
