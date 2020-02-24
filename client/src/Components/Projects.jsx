import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.white,
        color:"#212121",
        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        marginLeft:theme.spacing(),
        marginBottom:theme.spacing(5)
    },
  }));

export default function Projects()
{
    const classes = useStyles();
    return(
        <React.Fragment>
            <Container maxWidth="lg">
       <Typography variant="h4" align='center' gutterBottom>
          Projects 
      </Typography>

          <Grid container spacing={7} >
            <Grid item xs={12} sm={12} md={6} lg={6} >
            <Typography variant="h4" align="center" gutterBottom>
               LRN XML Converter
             </Typography>
            
             <ul>
                   <li>
                   <Typography variant="caption" gutterBottom>
                     It is a MERN stack application
                    </Typography>
                   </li>
                   <li>
                   <Typography variant="caption" gutterBottom>
                   Used to convert XML tags to support IOS software application for our partner (APPLE)                  </Typography>
                   </li>
                   <li>
                   <Typography variant="caption" gutterBottom>
                   Again used to convert XML tags to support or LRN software application
                  </Typography>
                   </li>
                   <li>
                   <Typography variant="caption" gutterBottom>
                   <strong>
                   Technologies used:
                   </strong>
                   <ul>
                       <li>
                    <strong>Front End</strong> : React js ,Material UI ,Materialize design ,Redux , Axios.

                       </li>
                       <li>
                      <strong>Server Side</strong> : Node Js , ejs template, Express Js.
                       </li>
                   </ul>
                  </Typography>
                   </li>

                   <li>
                   <Typography variant="caption" gutterBottom>
                   <strong>
                   Repository :
                   </strong>
                   <ul>
                       <li>
                    <strong>GitHub Link</strong> : <a href="https://github.com/Waseem403/TagConverter.git" target="_blank">https://github.com/Waseem403/TagConverter.git</a>

                       </li>
                       <li>
                      <strong>Online Link</strong> : <a href="https://tagconverterlrn.herokuapp.com/" target="_blank">https://tagconverterlrn.herokuapp.com/</a>
                       </li>
                   </ul>
                  </Typography>
                   </li>
               </ul>

              </Grid>





             <Grid item xs={12} sm={12} md={6} lg={6} >
                    <Typography variant="h4" align="center" gutterBottom>
                  Bug Tracker
                   </Typography>
           
                  <ul>
                   <li>
                   <Typography variant="caption" gutterBottom>
                   Single page application.
                  </Typography>
                   </li>
                   <li>
                   <Typography variant="caption" gutterBottom>
                   Use to tracks bug tickets in our organization.
                   </Typography>
                   </li>
                   <li>
                   <Typography variant="caption" gutterBottom>
                    Easy to use.
                  </Typography>
                   </li>
                   <li>
                   <Typography variant="caption" gutterBottom>
                   <strong>
                   Technologies used:
                   </strong>
                   <ul>
                       <li>
                    <strong>Front End</strong> : HTML5,CSS3,Javascript, Materialize design.

                       </li>
                       <li>
                      <strong>Server Side</strong> : Firebase,JSON.
                       </li>
                   </ul>
                  </Typography>
                   </li>

                   <li>
                   <Typography variant="caption" gutterBottom>
                   <strong>
                   Repository :
                   </strong>
                   <ul>
                       <li>
                    <strong>GitHub Link</strong> : <a href="https://github.com/Waseem403/BugTracker.git" target="_blank">https://github.com/Waseem403/BugTracker.git</a>

                       </li>
                       <li>
                      <strong>Online Link</strong> : <a href="http://www.bugtracker.com.s3-website.ap-south-1.amazonaws.com/" target="_blank">http://www.bugtracker.com.s3-website.ap-south-1.amazonaws.com/</a>
                       </li>
                   </ul>
                  </Typography>
                   </li>
               </ul>


               </Grid>
              </Grid>

              <Grid container spacing={7} >
            <Grid item xs={12} sm={12} md={6} lg={6} >
            <Typography variant="h4" align="center" gutterBottom>
             B waseem basha 
            </Typography>
           
  
            <ul>
                   <li>
                   <Typography variant="caption" gutterBottom>
                   It is a MERN stack application.
                  </Typography>
                   </li>
                   <li>
                   <Typography variant="caption" gutterBottom>
                   Can learn coding online, check your knowledge skills by taking quiz.
                   </Typography>
                   </li>
                   <li>
                   <Typography variant="caption" gutterBottom>
                   Developed this application, getting Inspired by stack overflow, W3school, Udemy, GitHub.Have own profile, dashboard to track record your details and learning skills. And post section and poll section to ask any kind of information with the other peoples.
                  </Typography>
                   </li>
                   <li>
                   <Typography variant="caption" gutterBottom>
                   <strong>
                   Technologies used:
                   </strong>
                   <ul>
                       <li>
                    <strong>Front End</strong> : React Js , Material UI ,Materialize design ,Redux ,Axios,Json.
                       </li>
                       <li>
                      <strong>Server Side</strong> : Node Js, EJS template, Express Js.
                       </li>
                       <li>
                      <strong>Backend Side</strong> : MongoDB.
                       </li>
                   </ul>
                  </Typography>
                   </li>

                   <li>
                   <Typography variant="caption" gutterBottom>
                   <strong>
                   Repository :
                   </strong>
                   <ul>
                       <li>
                    <strong>GitHub Link</strong> : <a href="https://github.com/Waseem403/Code-funz.git" target="_blank">https://github.com/Waseem403/Code-funz.git</a>
                       </li>
                     
                   </ul>
                  </Typography>
                   </li>
               </ul>




               </Grid>









               <Grid item xs={12} sm={12} md={6} lg={6} >
            <Typography variant="h4" align="center" gutterBottom>
             B waseem basha 
            </Typography>
               <ul>
                   <li>
                   <Typography variant="caption" gutterBottom>
                     It is a MERN stack application
                    </Typography>
                   </li>
                   <li>
                   <Typography variant="caption" gutterBottom>
                   Used to convert XML tags to support IOS software application for our partner (APPLE)                  </Typography>
                   </li>
                   <li>
                   <Typography variant="caption" gutterBottom>
                   Again used to convert XML tags to support or LRN software application
                  </Typography>
                   </li>
                   <li>
                   <Typography variant="caption" gutterBottom>
                   <strong>
                   Technologies used:
                   </strong>
                   <ul>
                       <li>
                    <strong>Front End</strong> : React js ,Material UI ,Materialize design ,Redux , Axios.

                       </li>
                       <li>
                      <strong>Server Side</strong> : Node Js , ejs template, Express Js.
                       </li>
                   </ul>
                  </Typography>
                   </li>

                   <li>
                   <Typography variant="caption" gutterBottom>
                   <strong>
                   Repository :
                   </strong>
                   <ul>
                       <li>
                    <strong>GitHub Link</strong> : <a href="https://github.com/Waseem403/TagConverter.git" target="_blank">https://github.com/Waseem403/TagConverter.git</a>

                       </li>
                       <li>
                      <strong>Online Link</strong> : <a href="https://tagconverterlrn.herokuapp.com/" target="_blank">https://tagconverterlrn.herokuapp.com/</a>
                       </li>
                   </ul>
                  </Typography>
                   </li>
               </ul>
               </Grid>
              </Grid>

            </Container>
        </React.Fragment>
    )
}