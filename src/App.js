import './App.css';
import PasswordGenerator from './components/password';
import { makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  image: {
    position: 'absolute',
    top: 0,
    left: '5%',
    transform: 'translateX(-50%)',
    width: '100%',
    maxWidth: '200px',

  },

}));

function App() {
  const classes = useStyles();
  return (
    <div>
      <img src={require('./images/ironpassLogo.png')} className={classes.image} alt="Your Image" />
      <header className="App-header">
        <p>
          <PasswordGenerator />
        </p>
      </header>
    </div>
  );
}

export default App;
