import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4),
  },
  section: {
    backgroundColor: '#E6E6FA',
    padding: theme.spacing(4),
  },
  centerText: {
    textAlign: 'center',
    color: 'black',
    textDecoration: 'underline',
    textDecorationColor: 'blue',
    marginBottom: theme.spacing(4),
  },
  title: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
  },
  description: {
    marginBottom: theme.spacing(2),
  },
}));

const Placement = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <div className={classes.section}>
        <Typography variant="h5" className={classes.centerText}>
          100% Placement Assistance
        </Typography>

        <Typography variant="h6" className={classes.title}>
          Resume Building
        </Typography>
        <Typography className={classes.description}>
          Get expert guidance on crafting an impressive resume that stands out to employers.
        </Typography>

        <Typography variant="h6" className={classes.title}>
          Career Counseling
        </Typography>
        <Typography className={classes.description}>
          Receive personalized career counseling sessions to help you make informed decisions.
        </Typography>

        <Typography variant="h6" className={classes.title}>
          Jobs
        </Typography>
        <Typography className={classes.description}>
          Gain access to a wide range of job opportunities tailored to your skills and preferences.
        </Typography>
      </div>
    </Container>
  );
};

export default Placement;
