import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';

export default function Hobbies()
{
    return (
        <React.Fragment>
             <Container maxWidth="lg">
       <Typography variant="h4" align='center' style={{color:"#ff4081"}} gutterBottom>
       Interests & Hobbies 
      </Typography>
      </Container>
        </React.Fragment>
    )
}