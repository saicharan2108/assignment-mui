import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Card, CardContent, Grid, List, ListItem, ListItemText } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(4),
  },
  title: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    textDecoration: 'underline',
    textDecorationColor: 'blue',
    marginBottom: theme.spacing(4),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F0F8FF',
  },
  cardTitle: {
    backgroundColor: 'blue',
    color: 'white',
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  cardContent: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  cardFooter: {
    backgroundColor: 'blue',
    color: 'white',
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

const LearnInAcca = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="md">
      <Typography variant="h4" className={classes.title}>
        What Will you learn in ACCA?
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Card className={classes.card}>
            <Typography variant="h6" className={classes.cardTitle}>
              Education Title 1
            </Typography>
            <CardContent className={classes.cardContent}>
              <List>
                <ListItem>
                  <ListItemText primary="Point 1" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Point 2" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Point 3" />
                </ListItem>
              </List>
            </CardContent>
            <Typography className={classes.cardFooter}>
              30 Books
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card className={classes.card}>
            <Typography variant="h6" className={classes.cardTitle}>
              Education Title 2
            </Typography>
            <CardContent className={classes.cardContent}>
              <List>
                <ListItem>
                  <ListItemText primary="Point 1" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Point 2" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Point 3" />
                </ListItem>
              </List>
            </CardContent>
            <Typography className={classes.cardFooter}>
              30 Books
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card className={classes.card}>
            <Typography variant="h6" className={classes.cardTitle}>
              Education Title 3
            </Typography>
            <CardContent className={classes.cardContent}>
              <List>
                <ListItem>
                  <ListItemText primary="Point 1" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Point 2" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Point 3" />
                </ListItem>
              </List>
            </CardContent>
            <Typography className={classes.cardFooter}>
              30 Books
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LearnInAcca;
