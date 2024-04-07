import React from 'react';
import { Typography, Card, CardContent, Grid, makeStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
    color: 'black', // blue color
    textDecoration: 'underline',
    textDecorationColor: 'blue',
    fontWeight: 'bold',
    marginBottom: theme.spacing(3),
    marginTop: 20
  },
  card: {
    backgroundColor: '#f0f8ff', // very light blue color
    textAlign: 'center',
    padding: theme.spacing(2),
    margin: theme.spacing(2),
  },
  icon: {
    width: '80px',
    height: '80px',
    marginBottom: theme.spacing(1),
  },
  additionalCard: {
    borderTop: '3px solid blue',
    textAlign: 'center',
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const CustomCard = withStyles({
  root: {
    minWidth: 200,
  },
})(Card);

const WhyChooseUs = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h4" className={classes.title}>
        Why Choose Us?
      </Typography>
      <Grid container justify="center" spacing={3}>
        <Grid item>
          <CustomCard className={classes.card}>
            <CardContent>
              <img src="https://img.icons8.com/cute-clipart/64/000000/idea.png" alt="Idea Icon" className={classes.icon} />
              <Typography variant="h6">
                Innovative Solutions
              </Typography>
              <Typography variant="body1">
                We offer innovative solutions to solve your complex problems.
              </Typography>
            </CardContent>
          </CustomCard>
        </Grid>
        <Grid item>
          <CustomCard className={classes.card}>
            <CardContent>
              <img src="https://img.icons8.com/cute-clipart/64/000000/planner.png" alt="Planner Icon" className={classes.icon} />
              <Typography variant="h6">
                Strategic Planning
              </Typography>
              <Typography variant="body1">
                Our strategic planning ensures success in your business endeavors.
              </Typography>
            </CardContent>
          </CustomCard>
        </Grid>
        <Grid item>
          <CustomCard className={classes.card}>
            <CardContent>
              <img src="https://img.icons8.com/ios/50/000000/teamwork.png" alt="Group Icon" className={classes.icon} />
              <Typography variant="h6">
                Team Collaboration
              </Typography>
              <Typography variant="body1">
                We believe in teamwork and collaborate to achieve your goals effectively.
              </Typography>
            </CardContent>
          </CustomCard>
        </Grid>
      </Grid>

      {/* Additional Cards */}
      <Grid container justify="center" spacing={3}>
        <Grid item>
          <Card className={classes.additionalCard}>
            <CardContent>
              <img src="https://img.icons8.com/cute-clipart/64/000000/happy.png" alt="Happy Icon" className={classes.icon} />
              <Typography variant="h6">
                Customer Satisfaction
              </Typography>
              <Typography variant="body1">
                Ensuring utmost satisfaction for our clients is our top priority.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.additionalCard}>
            <CardContent>
              <img src="https://static.vecteezy.com/system/resources/previews/005/068/900/original/quality-assurance-editable-flat-icon-vector.jpg" alt="Quality Icon" className={classes.icon} />
              <Typography variant="h6">
                Quality Assurance
              </Typography>
              <Typography variant="body1">
                We guarantee top-notch quality in all our services and products.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.additionalCard}>
            <CardContent>
              <img src="https://img.icons8.com/cute-clipart/64/000000/rocket.png" alt="Rocket Icon" className={classes.icon} />
              <Typography variant="h6">
                Continuous Improvement
              </Typography>
              <Typography variant="body1">
                Committed to continuous improvement to stay ahead in the market.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.additionalCard}>
            <CardContent>
              <img src="https://img.icons8.com/cute-clipart/64/000000/invisible.png" alt="Transparency Icon" className={classes.icon} />
              <Typography variant="h6">
                Transparency
              </Typography>
              <Typography variant="body1">
                We maintain transparency in all our dealings and communications.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default WhyChooseUs;
