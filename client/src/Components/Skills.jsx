import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Progress from 'react-circle-progress-bar'

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";



const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 275,
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    marginTop:theme.spacing(2),
    marginBottom:theme.spacing(3)
  },
  pos: {
    alignItems:'left'
  },
  Fronttitle: {
   color:"#e34c26",
  },
  Servertitle: {
    color:"#68A063",
   },
   IAStitle: {
    color:"#6567a5",
   },
   Devtitle: {
    color:"#CC3534",
   },
  front:{
    backgroundColor:"#e34c26",
    width: theme.spacing(12.5),
    height: theme.spacing(12.5),
  },
  server:{
    backgroundColor:"#68A063",
    width: theme.spacing(12.5),
    height: theme.spacing(12.5),
  },
  ias:{
    backgroundColor:"#6567a5",
    width: theme.spacing(12.5),
    height: theme.spacing(12.5),
  },
  dev:{
    backgroundColor:"#CC3534",
    width: theme.spacing(12.5),
    height: theme.spacing(12.5),
  },
}));

function Skills() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Typography variant="h3" color="error" align="center" gutterBottom>
          TECHNICAL SKILLS
        </Typography>

        <Typography variant="subtitle1" align="center" gutterBottom>
          <strong>I can say i’m quite good at</strong>
        </Typography>

        <Grid container spacing={2} align="center">
          <Grid item xs={12} sm={6} md={6} lg={3}>
           
              <Avatar
                alt="Remy Sharp"
                className={classes.front}
              ><i class="fab fa-html5 fa-3x"></i></Avatar>
                 <Typography variant="h5" component="h2" className={classes.Fronttitle}>
                  Front-End 
                </Typography> 
                  <p>
                  JavaScript,React js,Jquery,Ajax,Json,XML,
                  </p>
                   <p>
                   HTML5,CSS3,Redux,Fetch Api,Axios Api.
                   </p>
                   <p>
                    Bootstrap, material design,Material UI.
                   </p>
          
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={3}>
           
              <Avatar
                alt="Remy Sharp"
                className={classes.server}
              ><i class="fab fa-node-js fa-3x"></i></Avatar>
                <Typography variant="h5" component="h2" className={classes.Servertitle}>
                  Server-Side 
                </Typography>                
                
                <p> Node js, Express js,Rest Apis </p>
                <p>JWT Tokens,Passport Js</p>
                 <p>MongoDB,Ms sql</p>
             
            
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={3}>
            
              <Avatar
                alt="Remy Sharp"
                className={classes.ias}
              ><i class="fas fa-server fa-3x"></i></Avatar>
                 <Typography variant="h5" component="h2" className={classes.IAStitle}>
                  IAS Platform
                </Typography> 
                   <p>
                     Amazon web services (AWS)
                   </p>
                       <p>
                       Heroku platform.
                       </p>
                       <p>
                         Google App Engine.
                       </p>
                     
            
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={3}>
            
              <Avatar
                alt="Remy Sharp"
                className={classes.dev}
              ><i class="fab fa-npm fa-3x"></i></Avatar>
                 <Typography variant="h5" component="h2" className={classes.Devtitle}>
                  Dev Tools
                </Typography> 
                  <p>
                  NPM,GIT,Github,Postman,
                  </p>
                  <p>
                  React dev tool,Redux dev tool.
                  </p>
                  <p>
                    Vscode,NetBeans,Eclipse.
                  </p>
                 
        
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default Skills;
