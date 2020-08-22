import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const DarkTheme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      secondary: {
        main: '#0088ff',
      },
      primary: {
        main: '#1d1d1d',
      },
    },
    overrides: {
      MuiTooltip: {
        tooltip: {
          fontSize: '1em'
        }
      }
    }
  }),
);

export default DarkTheme;