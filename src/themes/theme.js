import { createMuiTheme } from '@material-ui/core/styles';
import Colors from '../constants/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: Colors.primary,
      text: Colors.textLight,
      orangeRed: Colors.orangeRed,
      blue: Colors.blue,
      borders: Colors.borders,
      bgLight: Colors.bgLight,
      bgDocument: Colors.bgDocument
    }
  },
  status: {
    danger: 'orange'
  }
});

export default theme;
