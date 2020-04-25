import { createMuiTheme } from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ef2339',
      contrastText: '#fff',
    },
    secondary: purple,
  },
  spacing: [0, 4, 8, 12, 16, 20, 24, 28, 32],
})

export default theme
