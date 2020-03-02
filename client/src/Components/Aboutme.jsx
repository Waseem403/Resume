import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Hidden from '@material-ui/core/Hidden';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from '@material-ui/icons/Email';
import waseem from "../Images/waseem.jpg"


const useStyles = makeStyles(theme => ({
  margin: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(2)
  },
 marginbtn:{
   marginLeft:theme.spacing(5)
 },
  large: {
    width: theme.spacing(35),
    height: theme.spacing(35),
    alignItems: "center"
  },
  downloadbtn:{
    color:"#fff",
    textDecoration:"none",
    textTransform:"capitalize",
    letterSpacing:"2px"
  }
}));

export default function Aboutme() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Hidden mdDown>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          ABOUT ME
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <Typography variant="h4" gutterBottom>
              B waseem basha
            </Typography>
            <h2>
              junior web developer
            </h2>
            <h3>
              Developer  with a
              demonstrated history of working in the internet industry. Skilled
              in Javascript (React Js & Node Js frameworks), HTML5, CSS3, Boostrap, 
              Jquery, and
              Application Programming Interfaces.
            </h3>

            <h3>
              Strong engineering professional with a Licence focused in Web
              Development from NIIT instuite of india.
            </h3>
            <h3>
              <strong>My favourite stack</strong> : Javascript, ReactJS, Node js, with
              continuous integration on Gitlab.
            </h3>

            <Button variant="contained" color="primary"  disableElevation >
              <a href="https://firebasestorage.googleapis.com/v0/b/userprofile-94657.appspot.com/o/WaseemResume.pdf?alt=media&token=ceae28d0-d83c-4940-91e7-8b3ade41abc3" target="_blank" download className={classes.downloadbtn}>Resume download</a>
            </Button>
            <Button variant="contained" color="primary" className={classes.marginbtn} disableElevation>
             <a href="mailto:b.waseem.403@gmail.com" className={classes.downloadbtn}> hire Me !</a>
            </Button>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} align="center">
            <Avatar
              alt="Remy Sharp"
              src={waseem}
              className={classes.large}
            />
            <IconButton
              aria-label="delete"
              className={classes.margin}
              size="large"
              href="https://api.whatsapp.com/send?phone=9966599303" method="get" target="_blank"
            >
              <WhatsAppIcon style={{color:"#25D366"}}/>
            </IconButton>
            <IconButton
              aria-label="delete"
              className={classes.margin}
              size="large"
              href="https://twitter.com/Wsm403?ref_src=twsrc%5Etfw" 
              target="_blank"
            >
              <i class="fab fa-twitter" style={{ color: "#2196f3" }}></i>
            </IconButton>
            <IconButton
              aria-label="delete"
              className={classes.margin}
              size="large"
              href="https://github.com/Waseem403"
              target="_blank"
            >
              <i class="fab fa-github" style={{ color: "black" }}></i>
            </IconButton>
                      <IconButton
              aria-label="delete"
              className={classes.margin}
              size="large"
              href="https://www.linkedin.com/in/waseem-shaikh-4a0461153"
              target="_blank"
            >
              <i class="fab fa-linkedin-in" style={{ color: "#0e76a8" }}></i>
            </IconButton>
         
            <IconButton
              aria-label="delete"
              className={classes.margin}
              size="large"
              href="mailto:b.waseem.403@gmail.com"
            >
             <EmailIcon style={{color:"#B23121"}}/>
            </IconButton>
           
          </Grid>
          </Grid>
      </Container>
      </Hidden>


      <Hidden lgUp>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          ABOUT ME
        </Typography>
        <Grid container spacing={2} align="center">
        <Grid item xs={12} sm={12} md={12} lg={12} >
            <Avatar
              alt="Remy Sharp"
              src={waseem}
              className={classes.large}
            />
        <IconButton
              aria-label="delete"
              className={classes.margin}
              size="large"
              href="https://api.whatsapp.com/send?phone=9966599303" method="get" target="_blank"
            >
              <WhatsAppIcon style={{color:"#25D366"}}/>
            </IconButton>
            <IconButton
              aria-label="delete"
              className={classes.margin}
              size="large"
              href="https://twitter.com/Wsm403?ref_src=twsrc%5Etfw" 
              target="_blank"
            >
              <i class="fab fa-twitter" style={{ color: "#2196f3" }}></i>
            </IconButton>
            <IconButton
              aria-label="delete"
              className={classes.margin}
              size="large"
              href="https://github.com/Waseem403"
              target="_blank"
            >
              <i class="fab fa-github" style={{ color: "black" }}></i>
            </IconButton>
                      <IconButton
              aria-label="delete"
              className={classes.margin}
              size="large"
              href="https://www.linkedin.com/in/waseem-shaikh-4a0461153"
              target="_blank"
            >
              <i class="fab fa-linkedin-in" style={{ color: "#0e76a8" }}></i>
            </IconButton>
         
            <IconButton
              aria-label="delete"
              className={classes.margin}
              size="large"
              href="mailto:b.waseem.403@gmail.com"
            >
             <EmailIcon style={{color:"#B23121"}}/>
            </IconButton>
           
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography variant="h4" gutterBottom>
              B waseem basha
            </Typography>
            <h2>
              junior web developer
            </h2>
            <h3>
              Developer  with a
              demonstrated history of working in the internet industry. Skilled
              in Javascript (React Js & Node Js frameworks), HTML5, CSS3, Boostrap, 
              Jquery, and
              Application Programming Interfaces.
            </h3>

            <h3>
              Strong engineering professional with a Licence focused in Web
              Development from NIIT instuite of india.
            </h3>
            <h3>
              <strong>My favourite stack</strong> : Javascript, ReactJS, Node js, with
              continuous integration on Gitlab.
            </h3>

            <Button variant="contained" color="primary"  disableElevation >
              <a href="https://firebasestorage.googleapis.com/v0/b/userprofile-94657.appspot.com/o/WaseemResume.pdf?alt=media&token=ceae28d0-d83c-4940-91e7-8b3ade41abc3" target="_blank" download className={classes.downloadbtn}>Resume download</a>
            </Button>
            <Button variant="contained" color="primary" className={classes.marginbtn} disableElevation>
             <a href="mailto:b.waseem.403@gmail.com" className={classes.downloadbtn}> hire Me !</a>
            </Button>
          </Grid>
          </Grid>
      </Container>
      </Hidden>
    </React.Fragment>
  );
}
