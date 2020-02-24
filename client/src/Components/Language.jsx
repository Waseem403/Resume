import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';


export default function Language()
{
    return(
        <React.Fragment>
             <Container maxWidth="lg">
       <Typography variant="h4" align='center' style={{color:"#ff4081"}} gutterBottom>
          Languages
      </Typography>
      </Container>
        </React.Fragment>
    )
}