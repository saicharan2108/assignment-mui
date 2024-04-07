import React, { useState } from 'react';
import { Grid, Paper, Typography, Button, TextField, makeStyles, Modal, Backdrop, Fade } from '@material-ui/core';
import { CheckCircleOutline as CheckCircleOutlineIcon } from '@material-ui/icons';

const lightBlueBackgroundColor = '#f0f8ff'; // Very light blue background color

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    backgroundColor: lightBlueBackgroundColor,
  },
  leftSection: {
    backgroundColor: lightBlueBackgroundColor,
    padding: theme.spacing(3),
    boxShadow:'None'
  },
  rightSection: {
    backgroundColor: '#fff', // White background color
    padding: theme.spacing(2),
  },
  card: {
    padding: theme.spacing(2),
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: theme.spacing(2),
    width: '70', // Modified to make the card take full width of the Grid item
  },
  button: {
    marginTop: theme.spacing(2),
    marginRight:15
  },
  form: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none',
  },
}));

function BecomaACCA() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {/* Left Section */}
        <Grid  xs={12} sm={6}>
          <Paper className={classes.leftSection}>
          <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold' }}>
  Become ACCA in 18 months
</Typography>

            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            {/* Cards */}
            <Grid container spacing={2}> {/* Added Grid container to display cards in a row */}
              {[1, 2, 3, 4].map((item) => (
                <Grid key={item} item xs={6}> {/* Each card takes 6 grid columns on small screens, making them display in a row */}
                  <Paper className={classes.card}>
                    <Typography variant="h6">Card Title</Typography>
                    <Typography variant="body1">Count: {item}</Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
            {/* Buttons */}
            <Button variant="contained" color="primary" className={classes.button}>
              Blue Button
            </Button>
            <Button variant="contained" color="secondary" className={classes.button}>
              Red Button
            </Button>
          </Paper>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} sm={6}>
          <Paper className={classes.rightSection}>
            <form className={classes.form} noValidate autoComplete="off">
              <TextField label="Name" variant="outlined" />
              <TextField label="Email" variant="outlined" />
              <TextField label="Phone" variant="outlined" />
              <TextField label="Message" variant="outlined" multiline rows={4} />
              <Button variant="contained" color="primary" className={classes.button} onClick={handleOpen}>
                Request Callback
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>

      {/* Success Modal */}
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.modalContent}>
            <Typography variant="h6" gutterBottom>
              Success!
            </Typography>
            <Typography variant="body1">
              Your request has been submitted successfully.
            </Typography>
            <Button variant="contained" color="primary" className={classes.button} onClick={handleClose}>
              Close
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default BecomaACCA;
