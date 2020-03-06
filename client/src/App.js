import React, { useEffect, useState } from "react";
import clsx from "clsx";

import ScrollspyNav from "react-scrollspy-nav";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Backdrop from "@material-ui/core/Backdrop";
import Hidden from "@material-ui/core/Hidden";


import Loader from "react-loader-spinner";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import WorkIcon from "@material-ui/icons/Work";
import IconButton from "@material-ui/core/IconButton";
import LanguageIcon from "@material-ui/icons/Language";



import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import GitHubIcon from "@material-ui/icons/GitHub";
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import Divider from "@material-ui/core/Divider";
import Snackbar from '@material-ui/core/Snackbar';



import Aboutme from "./Components/Aboutme";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Languages from "./Components/Language";
import Hobbies from "./Components/Hobbies";
import Github from "./Components/Github";
import Contactus from "./Components/Contactus";
import Footer from "./Components/Footer";

const drawerWidth = 80;

const useStyles = makeStyles(theme => ({
  root: {
    color: "#212121"
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
  Languages: {
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
  Contactus: {
    margin: "auto",
    backgroundColor: "#f2f2f2",
    color: "#212121",
    display: "flex",
    flexDirection: "column",
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  Footer: {
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
  },


  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  iconcenter: {
    paddingLeft: theme.spacing(2.4),
    alignItems: "center"
  }
}));

function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [Repos, SetRepos] = useState([]);
  const [Loading, SetLoading] = useState(false);
  const [error,Seterror]=useState(false)
  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  const handleClose = () => {
    Seterror(false)
  };

  useEffect(() => {
    SetLoading(true);
    fetch(
      `https://api.github.com/users/waseem403/repos?per_page=100&sort=created: asc&client_id=26c196bacea7db10cf48&client_secret=0885cb690e07d2a93a6afb0891fb552fd9f7aa53`
    )
      .then(res => {
        return res.json();
      })
      .then(data => {
        SetLoading(false);
        SetRepos(data);
      })
      .catch(err => {
        SetLoading(false);
        Seterror(true)
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
  }

  return (
    <React.Fragment>
           <Hidden smDown>
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
            <AppBar position="fixed"  color="inherit" className={classes.root}>
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
                    <Hidden smDown>edu & exp</Hidden>
                    <Hidden mdUp>
                      <WorkIcon />
                    </Hidden>
                  </Button>
                  <Button
                    color="inherit"
                    className={classes.navbtn}
                    href="#skills"
                  >
                    Skills
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
                    contact
                  </Button>
                </Toolbar>
              </Container>
            </AppBar>
        </div>
      </ScrollspyNav>
      </Hidden>


      <Hidden mdUp>
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
              <CssBaseline />
              <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                  [classes.appBarShift]: open
                })}
                color="inherit"
              >
                <Toolbar>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, open && classes.hide)}
                  >
                    <MenuIcon />
                  </IconButton>
                  Waseem Basha
                </Toolbar>
              </AppBar>
              <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                  paper: classes.drawerPaper
                }}
              >
                <div className={classes.drawerHeader}>
                  <IconButton onClick={handleDrawerClose}>
                    {theme.direction === "ltr" ? (
                      <ChevronLeftIcon />
                    ) : (
                      <ChevronRightIcon />
                    )}
                  </IconButton>
                </div>

                <Button
                  color="inherit"
                  className={classes.navbtn}
                  align="right"
                  href="#aboutme"
                >
                <AccountCircleIcon fontSize="default"/>
                
                </Button>
                <Divider light/>
                <Button
                  color="inherit"
                  className={classes.navbtn}
                  href="#experience"
                >
                <WorkIcon fontSize="default"/> 
                </Button>
                <Divider light/>
                <Button
                  color="inherit"
                  className={classes.navbtn}
                  href="#skills"
                >
                  <DeveloperModeIcon fontSize="default"/>
             
                </Button>
                <Divider light/>
                <Button
                  color="inherit"
                  className={classes.navbtn}
                  href="#github"
                >
                <GitHubIcon fontSize="default"/>
             
                </Button>
                <Divider light/>
                <Button
                  color="inherit"
                  className={classes.navbtn}
                  href="#languages"
                >
                   <LanguageIcon fontSize="default"/>
        
                </Button>
                <Divider light/>
                <Button
                  color="inherit"
                  className={classes.navbtn}
                  href="#hobbies"
                >
                 <FavoriteIcon fontSize="default"/>
                </Button>
                <Divider light/>
                <Button
                  color="inherit"
                  className={classes.navbtn}
                  href="#contact"
                >
              <LocationOnIcon fontSize="default"/>
            
                </Button>
              </Drawer>
            </div>
      </ScrollspyNav>
      </Hidden>


      
      {/* body */}
      <div className={classes.rootbody}>
        {/* Profile header*/}
        <section id="aboutme" className={classes.aboutme}>
          <Aboutme />
        </section>

        {/*experience details */}
        <section id="experience" className={classes.experience}>
          <Experience />
        </section>

        {/*technical skills*/}
        <section id="skills" className={classes.skills}>
          <Skills />
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

        <section id="contact" className={classes.Footer}>
          <Footer />
        </section>
      </div>

      <Snackbar
         anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        key={'msg'}
        open={error}
        onClose={handleClose}
        message="Error while loading..."
      />
    </React.Fragment>
  );
}

export default App;
