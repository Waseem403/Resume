import React,{ useState } from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Progress from "react-circle-progress-bar";
import ReactCardFlip from 'react-card-flip';

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import SchoolIcon from '@material-ui/icons/School';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import LanguageIcon from '@material-ui/icons/Language';
import SportsHandballIcon from '@material-ui/icons/SportsHandball';



const useStyles = makeStyles(theme => ({
    root: {
        height:200,
      backgroundColor:'rgb(33, 150, 243)',
      color:"#fff",
      cursor:'pointer',
      transition: "0.5s",
      boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
      borderRadius:theme.spacing(0.5),
      paddingTop:theme.spacing(3)
    },
    typo:{
         height:200,
      backgroundColor:'rgb(33, 150, 243)',
      color:"#fff",
      cursor:'pointer',
      transition: "0.5s",
      boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
      borderRadius:theme.spacing(0.5),
    paddingTop:theme.spacing(6),
    paddingBottom:theme.spacing(3)
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)"
    },
    title: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
    },
    Icon : {
        fontSize:"30px"
    }
  }));

export default function Hobbies()
{
    const classes = useStyles();
    
  const [TravellingisFlipped,TravellingSetisFlipped]=useState(false)
  const [SportsisFlipped,SportsSetisFlipped]=useState(false)
  const [LearningisFlipped,LearningSetisFlipped]=useState(false)
  const [BikingisFlipped,BikingSetisFlipped]=useState(false)
  const [PhotographyisFlipped,PhotographySetisFlipped]=useState(false)
  const [InternetisFlipped,InternetSetisFlipped]=useState(false)



   const Travellinghandlechange=()=>{
    TravellingSetisFlipped(!TravellingisFlipped)
   }
     
   const Sportshandlechange=()=>{
    SportsSetisFlipped(!SportsisFlipped)
   }
     
   const Learninghandlechange=()=>{
    LearningSetisFlipped(!LearningisFlipped)
   }
     
   const Bikinghandlechange=()=>{
    BikingSetisFlipped(!BikingisFlipped)
   }

   const Photographyhandlechange=()=>{
    PhotographySetisFlipped(!PhotographyisFlipped)
   }

   const Internethandlechange=()=>{
    InternetSetisFlipped(!InternetisFlipped)
   }
     



    return (
        <React.Fragment>
      <Container maxWidth="lg">
       <Typography variant="h4" align='center' style={{color:"#ff4081"}} gutterBottom>
       Interests & Hobbies 
      </Typography>

         <Grid container spacing={5} align="center" className={classes.title}>
          <Grid item xs={12} sm={6} md={4} lg={2}>
          <ReactCardFlip isFlipped={TravellingisFlipped} flipDirection="horizontal">
            <Card className={classes.root} onMouseEnter={Travellinghandlechange}>
              <CardContent>
              <AirplanemodeActiveIcon style={{fontSize:"51px"}}/>
                <h2>Travelling</h2>
              </CardContent>
            </Card>
            <Card className={classes.typo} onMouseLeave={Travellinghandlechange}>
              <CardContent>
                <h4>Alone or with someone</h4>
              </CardContent>
            </Card>
            </ReactCardFlip>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={2}>
          <ReactCardFlip isFlipped={SportsisFlipped} flipDirection="horizontal">
            <Card className={classes.root} onMouseEnter={Sportshandlechange}>
              <CardContent>
              <SportsHandballIcon style={{fontSize:"51px"}}/>
                <h2>Sports</h2>
              </CardContent>
            </Card>
            <Card className={classes.typo} onMouseLeave={Sportshandlechange}>
              <CardContent>
            
                <h4>Cricket,Tennis,Mobile Gaming</h4>
              </CardContent>
            </Card>
            </ReactCardFlip>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={2}>
          <ReactCardFlip isFlipped={LearningisFlipped} flipDirection="horizontal">
            <Card className={classes.root} onMouseEnter={Learninghandlechange}>
              <CardContent>
              <SchoolIcon style={{fontSize:"51px"}}/>
                <h2>Learning</h2>
              </CardContent>
            </Card>
            <Card className={classes.typo} onMouseLeave={Learninghandlechange}>
              <CardContent>
                <h4>Korean and japanese Language</h4>
              </CardContent>
            </Card>
            </ReactCardFlip>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={2}>
          <ReactCardFlip isFlipped={BikingisFlipped} flipDirection="horizontal">
            <Card className={classes.root} onMouseEnter={Bikinghandlechange}>
              <CardContent>
              <DirectionsBikeIcon style={{fontSize:"51px"}}/>
                <h2>Biking</h2>
              </CardContent>
            </Card>
            <Card className={classes.typo} onMouseLeave={Bikinghandlechange}>
              <CardContent>
                <h4>When its sunny</h4>
              </CardContent>
            </Card>
            </ReactCardFlip>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={2}>
          <ReactCardFlip isFlipped={PhotographyisFlipped} flipDirection="horizontal">
            <Card className={classes.root} onMouseEnter={Photographyhandlechange}>
              <CardContent>
              <CameraAltIcon style={{fontSize:"51px"}}/>
                <h2>Photography</h2>
              </CardContent>
            </Card>
            <Card className={classes.typo} onMouseLeave={Photographyhandlechange}>
              <CardContent>
                <h4><strong>Of Landscape and nature</strong></h4>
              </CardContent>
            </Card>
            </ReactCardFlip>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={2}>
          <ReactCardFlip isFlipped={InternetisFlipped} flipDirection="horizontal">
            <Card className={classes.root} onMouseEnter={Internethandlechange}>
              <CardContent>
              <LanguageIcon style={{fontSize:"51px"}}/>
                <h2>Internet surfing</h2>
              </CardContent>
            </Card>
            <Card className={classes.typo} onMouseLeave={Internethandlechange}>
              <CardContent>
                <h3>Browsing Social networks and learning sites</h3>
              </CardContent>
            </Card>
            </ReactCardFlip>
          </Grid>
        </Grid>


      </Container>
        </React.Fragment>
    )
}