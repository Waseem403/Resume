import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

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
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          ABOUT ME
<<<<<<< HEAD
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
            >
              <i className="fab fa-facebook-f" style={{ color: "#2c387e" }}></i>
            </IconButton>
            <IconButton
              aria-label="delete"
              className={classes.margin}
              size="large"
            >
              <i class="fab fa-twitter" style={{ color: "#2196f3" }}></i>
            </IconButton>
            <IconButton
              aria-label="delete"
              className={classes.margin}
              size="large"
            >
              <i class="fab fa-linkedin-in" style={{ color: "#0e76a8" }}></i>
            </IconButton>
            <IconButton
              aria-label="delete"
              className={classes.margin}
              size="large"
            >
              <i class="fab fa-instagram" style={{ color: "#d6249f" }}></i>
            </IconButton>
            <IconButton
              aria-label="delete"
              className={classes.margin}
              size="large"
            >
              <i class="fab fa-github" style={{ color: "black" }}></i>
            </IconButton>
          </Grid>
=======
      </Typography>
      <Grid container spacing={2}>
       <Grid item xs={12} sm={12} md={8} lg={8}>
       <Typography variant="h4" gutterBottom>
       B waseem basha 
      </Typography>
      <Typography variant="body1" gutterBottom>
       web developer
      </Typography>
      
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tenetur possimus vel iure enim iste quaerat! Voluptates quae, ipsum ad est unde accusantium velit, officiis, porro voluptatibus nemo ipsam molestias?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tenetur possimus vel iure enim iste quaerat! Voluptates quae, ipsum ad est unde accusantium velit, officiis, porro voluptatibus nemo ipsam molestias?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tenetur possimus vel iure enim iste quaerat! Voluptates quae, ipsum ad est unde accusantium velit, officiis, porro voluptatibus nemo ipsam molestias?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tenetur possimus vel iure enim iste quaerat! Voluptates quae, ipsum ad est unde accusantium velit, officiis, porro voluptatibus nemo ipsam molestias?
       this is a test for the about me and let check whether this is working in the production site or not
         this is connect with github with automatic enable.     
	 <Typography variant="caption" display="block" gutterBottom>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, rerum earum consequatur laborum dolorem iste saepe cupiditate qui suscipit quo totam ipsam incidunt sequi doloremque quisquam dolore maiores tenetur fugiat.
      </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} align='center'>
        <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR8PVMg0rOyZcxCWgke0IiPAtHFFe6wpAiNvHv_1om4tkh1GfBJ" className={classes.large} />
        <IconButton aria-label="delete" className={classes.margin} size="large">
        <i className="fab fa-facebook-f" style={{color:"#2c387e"}}></i>
        </IconButton>
        <IconButton aria-label="delete" className={classes.margin} size="large">
        <i class="fab fa-twitter" style={{color:"#2196f3"}}></i>
        </IconButton>
        <IconButton aria-label="delete" className={classes.margin} size="large">
        <i class="fab fa-linkedin-in" style={{color:'#0e76a8'}}></i>
        </IconButton>
        <IconButton aria-label="delete" className={classes.margin} size="large">
        <i class="fab fa-instagram" style={{color:"#d6249f"}}></i>
        </IconButton>
        <IconButton aria-label="delete" className={classes.margin} size="large">
        <i class="fab fa-github" style={{color:"black"}}></i>
        </IconButton>
        </Grid>
>>>>>>> 3a1a4b2b210130a927e7bf91a80e246fd1515070
        </Grid>
      </Container>
    </React.Fragment>
  );
}
