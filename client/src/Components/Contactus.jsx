import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import MuiPhoneNumber from "material-ui-phone-number";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import EmailIcon from '@material-ui/icons/Email';
const axios = require('axios');

const useStyles = makeStyles(theme => ({
  margin: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4)
  },
  marginbtn: {
    marginLeft: theme.spacing(5)
  },
  messagebtn: {
    textTransform: "capitalize",
    letterSpacing:'2px'
  },
  links:{
    textDecoration:"none",
    lineHeight:2,
  },
  
}));


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


export default function Aboutme() {
  const classes = useStyles();

  const [Email, SetEmail] = useState("");
  const [Mobile, SetMobile] = useState(null);
  const [Message, SetMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [Output_msg,SetOutput_msg]=useState('')
  const [Sever,SetSever]=useState('')
  const [Loader,SetLoader]=useState(false)


  const handleEmail = e => {
    SetEmail(e.target.value);
  };

  const handleMobile = value => {
    SetMobile(value);
  };

  const handleMessage = e => {
    SetMessage(e.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const OnSubmit = e => {
    e.preventDefault();
    const UserMessage = {
      Email,
      Mobile,
      Message
    };
    SetLoader(true)
    axios.post("/contactus",UserMessage).then(res=>{
      SetOutput_msg("Thanks for contacting us!. we will get back to you soon.")
      SetSever("success")
      setOpen(true)
      SetLoader(false)
      SetEmail('')
      SetMobile(null)
      SetMessage('')
    })
    .catch(err=>{
      SetOutput_msg("Error! Please try again later.")
      SetSever("error")
      setOpen(true)
      SetLoader(false)
      SetEmail('')
      SetMobile(null)
      SetMessage('')
    })
  };


  const Loading=Loader===true?<React.Fragment><CircularProgress disableShrink size={15}/> sending...</React.Fragment>: "send message"

  return (
    <React.Fragment>
           <Snackbar 
             anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
           open={open} 
           autoHideDuration={6000} 
           onClose={handleClose}
           >
        <Alert onClose={handleClose} severity={Sever}>
          {Output_msg}
        </Alert>
      </Snackbar>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          style={{ color: "#ff4081" }}
          gutterBottom
        >
          Contact us
        </Typography>
        <Grid container spacing={2} className={classes.margin}>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Typography variant="h6" gutterBottom>
              Contact Details
            </Typography>
            <address>
             <h3><LocationOnIcon/> Address : </h3> 
              <p>R.no:405/28-b,Vindeshwari Chs,</p>
              <p>Nehru Nagar,</p>
                <p>90 Feet Road, </p>
                <p>Sion(W)</p>
                <p>Mumbai-400017</p>
            </address>
            <p><PhoneAndroidIcon/> <a href="tel:+91 9966599303" className={classes.links}>+91 9966599303</a> or <a href="tel:+91 8919175455" className={classes.links}>+91 8919175455</a></p>
            <p> <EmailIcon/> <a href="mailto:b.waseem.403@gmail.com" className={classes.links}>b.waseem.403@gmail.com</a></p>
          </Grid>

          <Grid item xs={12} sm={12} md={8} lg={8}>
            <form onSubmit={OnSubmit}>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  {" "}
                  <TextField
                    id="id"
                    label="Enter Emaild Id"
                    variant="outlined"
                    fullWidth
                    value={Email}
                    onChange={handleEmail}
                    type="email"
                    required={true}
                  />{" "}
                </Grid>{" "}
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  {" "}
                  <MuiPhoneNumber
                    variant="outlined"
                    defaultCountry="in"
                    fullWidth
                    onChange={handleMobile}
                    required
                  />
                  ,
                </Grid>{" "}
              </Grid>{" "}
              <Grid container spacing={4}>
                {" "}
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  {" "}
                  <TextField
                    id="message"
                    label="Enter Your Message"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows="6"
                    value={Message}
                    onChange={handleMessage}
                    type="text"
                    required
                  />{" "}
                </Grid>{" "}
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  {" "}
                  <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    disableElevation
                    className={classes.messagebtn}
                    disabled={Loader}
                  >
                    {" "}
                    {Loading}
                  </Button>{" "}
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
