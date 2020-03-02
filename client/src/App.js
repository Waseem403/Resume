import React, { useEffect, useState } from "react";

import ScrollspyNav from "react-scrollspy-nav";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Backdrop from "@material-ui/core/Backdrop";

import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Loader from "react-loader-spinner";

import IconButton from "@material-ui/core/IconButton";

import Aboutme from "./Components/Aboutme";
import Skills from "./Components/Skills"
import Experience from "./Components/Experience";
import Languages from "./Components/Language";
import Hobbies from "./Components/Hobbies";
import Github from "./Components/Github";
import Contactus from "./Components/Contactus"
import Footer from "./Components/Footer"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "rgb(233, 30, 99)",
    color: "white",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)"
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1
  },
  navbtn: {
    textTransform: "capitalize"
  },
  title: {
    flexGrow: 1
  },
  margin: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(2)
  },
  rootbody: {
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    backgroundColor: theme.palette.white,
    color: "black",
    fontFamily: "Josefin Slab, serif"
  },
  aboutme: {
    margin: "auto",
    display: "flex",
    backgroundColor: theme.palette.white,
    flexDirection: "column",
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    marginTop: theme.spacing(7)
  },
  skills: {
    margin: "auto",
    backgroundColor: theme.palette.white,
    color: "#474d5d",
    display: "flex",
    flexDirection: "column",
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  experience: {
    margin: "auto",
    backgroundColor: "#e0e0e0",
    color: "#212121",
    display: "flex",
    flexDirection: "column",
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  hobbies: {
    margin: "auto",
    backgroundColor: theme.palette.white,
    color: "#212121",
    display: "flex",
    flexDirection: "column",
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  Languages:{
    margin: "auto",
    backgroundColor: theme.palette.white,
    color: "#212121",
    display: "flex",
    flexDirection: "column",
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  githubp: {
    margin: "auto",
    backgroundColor: "#24292e",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  projects: {
    margin: "auto",
    backgroundColor: "#eceff1",
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  Contactus:{
    margin: "auto",
    backgroundColor: "#f2f2f2",
    color: "#212121",
    display: "flex",
    flexDirection: "column",
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  Footer:{
    margin: "auto",
    backgroundColor: "#212121",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  large: {
    width: theme.spacing(35),
    height: theme.spacing(35),
    alignItems: "center"
  },
  linkdin: {
    color: "indigo"
  }
}));

function App() {
  const classes = useStyles();
  const [Repos, SetRepos] = useState([]);
  const [Loading, SetLoading] = useState(false);
  const [Errors, SetErrors] = useState([]);

  useEffect(() => {
    console.log("running");
    SetLoading(true);
    fetch(
      `https://api.github.com/users/waseem403/repos?per_page=100&sort=created: asc&client_id=26c196bacea7db10cf48&client_secret=0885cb690e07d2a93a6afb0891fb552fd9f7aa53`
    )
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        SetLoading(false);
        SetRepos(data);
      })
      .catch(err => {
        SetLoading(false);
        SetErrors(err);
        console.log(err);
      });
  }, []);

  let GithubData;
  if (Repos === null || Loading) {
    GithubData = (
      <Backdrop className={classes.backdrop} open={Loading}>
        <Loader
          type="BallTriangle"
          color="#FFF"
          height={250}
          width={250}
          timeout={30000} //30 secs
        />
      </Backdrop>
    );
  } else {
    GithubData = <Github Repo={Repos} />;
    console.log(Repos);
  }

  return (
    <React.Fragment>
      <ScrollspyNav
        scrollTargetIds={[
          "aboutme",
          "skills",
          "experience",
          "hobbies",
          "languages",
          "github",
          "projects"
        ]}
        offset={-50}
      >
        <div>
          <AppBar position="fixed" dense className={classes.root}>
            <Container>
              <Toolbar>
                <Typography variant="h6" className={classes.title}>
                  <Button
                    color="inherit"
                    className={classes.navbtn}
                    href="#aboutme"
                  >
                    Waseem Basha
                  </Button>
                </Typography>
                <Button
                  color="inherit"
                  className={classes.navbtn}
                  align="right"
                  href="#aboutme"
                >
                  About me
                </Button>
                <Button
                  color="inherit"
                  className={classes.navbtn}
                  href="#experience"
                >
                  exp & edu
                </Button>
                <Button
                  color="inherit"
                  className={classes.navbtn}
                  href="#skills"
                >
                  skills
                </Button>
                <Button
                  color="inherit"
                  className={classes.navbtn}
                  href="#github"
                >
                  projects
                </Button>
                <Button
                  color="inherit"
                  className={classes.navbtn}
                  href="#languages"
                >
                  languages
                </Button>
                <Button
                  color="inherit"
                  className={classes.navbtn}
                  href="#hobbies"
                >
                  hobbies
                </Button>
                <Button
                  color="inherit"
                  className={classes.navbtn}
                  href="#contact"
                >
                  contact us
                </Button>
              </Toolbar>
            </Container>
          </AppBar>
        </div>
      </ScrollspyNav>

      {/* body */}
      <div className={classes.rootbody}>
        {/* Profile header*/}
        <section id="aboutme" className={classes.aboutme}>
          <Aboutme />
        </section>

          {/*experience details */}
          <section id="experience" className={classes.experience}>
          <Experience/>
        </section>

        {/*technical skills*/}
        <section id="skills" className={classes.skills}>
         <Skills/>
        </section>

        {/*github repository*/}
        <section id="github" className={classes.githubp}>
          {GithubData}
        </section>

        
        {/*languages know*/}
        <section id="languages" className={classes.Languages}>
          <Languages />
        </section>

        {/*Hobbies*/}
        <section id="hobbies" className={classes.hobbies}>
          <Hobbies />
        </section>


          {/*Contact us*/}
          <section id="contact" className={classes.Contactus}>
          <Contactus />
        </section>

         {/*Footer us*/}
          <section id="Footer" className={classes.Footer}>
           <Footer/>
          </section>
      </div>
    </React.Fragment>
  );
}

export default App;
