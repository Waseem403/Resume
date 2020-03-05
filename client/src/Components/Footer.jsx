import React from 'react';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";





export default function Footer()
{

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