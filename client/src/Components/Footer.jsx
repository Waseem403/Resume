import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import EmailIcon from '@material-ui/icons/Email';


const useStyles = makeStyles(theme => ({
  
    links:{
      textDecoration:"none",
      lineHeight:2,
    }
  }));


export default function Footer()
{
    const classes = useStyles();

    return(
         <React.Fragment>
             <Container>
             <Grid container spacing={2} >
          <Grid item xs={12} sm={12} md={12} lg={12} align="center">
          <h3>© CopyRight Waseem </h3>
              </Grid>
              </Grid>
             </Container>
         </React.Fragment>
    )
}