import { createMuiTheme} from '@material-ui/core/styles';
import Colors from '../constants/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: Colors.primary,
      textLight: Colors.textLight,
      orangeRed: Colors.orangeRed,
      blue: Colors.blue,
      borders: Colors.borders,
      bgLight: Colors.bgLight,
      bgApp: Colors.bgApp
    }
  },
  typography: {
    fontFamily: 'Heebo,sans-serif',
  },
  status: {
    danger: 'orange'
  }
});

export default theme;
