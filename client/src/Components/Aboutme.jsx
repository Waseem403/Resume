import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    margin: {
      marginLeft: theme.spacing(2),
      marginTop: theme.spacing(2),
    },

    large: {
      width: theme.spacing(35),
      height: theme.spacing(35),
      alignItems: "center",
    },
  }));

export default function Aboutme()
{
    const classes = useStyles();
    return(
    <React.Fragment>
     <Container>
      <Typography variant="h4" align='center' gutterBottom>
          ABOUT ME
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
      hello worlddddddddddddddddddddd
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
        </Grid>
      </Container>
        </React.Fragment>
    )
}