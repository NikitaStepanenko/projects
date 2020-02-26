import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import HomeUsersList from './HomeUsersList';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  usersWrapper: {
    paddingTop: '200px',
    width: '100%',
    maxWidth: '1400px',
    margin: '0 auto',
    paddingBottom: '250px',
  },
  body: {
    backgroundColor: 'red',
  },
}));

function Home() {
  const classes = useStyles();
  const [users, setUsers] = useState([1, 2, 3]);
  return (
    <Grid
      src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      className={classes.usersWrapper}
      container
      spacing={3}
      justify="center"
    >
      <HomeUsersList users={users} />
    </Grid>
  );
}

export default Home;
