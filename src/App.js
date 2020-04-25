import React from 'react';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  button: {
    padding: theme.spacing(2, 6),
  },
  buttonLabel: {
    color: theme.palette.secondary.main
  }
}))

function App() {
  const classes = useStyles()

  return (
    <div className="App">
      Hello World
      <Button
        // className={classes.button}
        classes={{
          root: classes.button,
          label: classes.buttonLabel
        }}
        type="button"
        variant="contained"
        color="primary"
        disableElevation
      >
        Click me
      </Button>
    </div>
  );
}

export default App;
