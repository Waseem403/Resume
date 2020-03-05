import React, { Component } from "react";

import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import GitHubIcon from "@material-ui/icons/GitHub";

import Link from '@material-ui/core/Link';


const styles = theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(0.5),
    },
    paddingLeft: theme.spacing(5),
    paddingTop:theme.spacing(3),
    display:'inline'
  },
  margin:{
    marginLeft: theme.spacing(4),
  },
  CardActions:{
    marginTop:theme.spacing(2)
  },
  links:{
    paddingLeft:theme.spacing(3)
  },

});

class Github extends Component {
  render() {
    const { classes, Repo } = this.props;
    const repoItems = Repo.map((repo, index) => {
     
      if (index % 2 === 0) {
        return (
          <VerticalTimeline key={index}>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#fff', color: '#212121' }}
          contentArrowStyle={{ borderRight: '7px solid  #fff' }}
              iconStyle={{ background: "#212121", color: "#fff" }}
              icon={<GitHubIcon />}
              position={"left"}
            >
              <h2 className="vertical-timeline-element-title">{repo.name} </h2>
              <h4 className="vertical-timeline-element-subtitle">
              </h4>
              <p>{repo.description}</p>           
              <div className={classes.CardActions}>
              <p  className={classes.inline}>
                <i className="fas fa-star" style={{color:"orange"}}></i> <strong>Stars</strong> :{" "}
                {repo.stargazers_count}
              </p>
              <p  className={classes.inline}>
                <i className="fas fa-eye" style={{color:"blue"}}></i> <strong>Watchers</strong> :{" "}
                {repo.watchers_count}
              </p>
              <p  className={classes.inline}>
                <i className="fas fa-code-branch" style={{color:"green"}}></i> <strong>Forks</strong> :{" "}
                {repo.forks_count}
              </p>
              </div>
              <div className={classes.links}>
      <p className={classes.root}>
      <Link href={repo.html_url} target="_blank" rel="noreferrer">
         view source code
      </Link>

        </p>
 
              </div>
            </VerticalTimelineElement>
          </VerticalTimeline>
        );
      } else {
        return (
          <VerticalTimeline key={index}>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#fff', color: '#212121' }}
              contentArrowStyle={{ borderRight: '7px solid  #fff' }}
              iconStyle={{ background: "#212121", color: "#fff" }}
              icon={<GitHubIcon />}
              position={"right"}
            >
              <h3 className="vertical-timeline-element-title">{repo.name} </h3>
              <p>{repo.description}</p>

              <div className={classes.CardActions}>
              <p variant="subtitle2"  className={classes.inline}>
                <i className="fas fa-star" style={{color:"orange"}}></i> <strong>Stars</strong> :{" "}
                {repo.stargazers_count}
              </p>
              <p variant="subtitle2"  className={classes.inline}>
                <i className="fas fa-eye" style={{color:"blue"}}></i> <strong>Watchers</strong> :{" "}
                {repo.watchers_count}
              </p>
              <p variant="subtitle2"  className={classes.inline}>
                <i className="fas fa-code-branch" style={{color:"green"}}></i> <strong>Forks</strong> :{" "}
                {repo.forks_count}
              </p>
              </div>
              <div className={classes.links}>
      <p className={classes.root}>
      <Link href={repo.html_url} target="_blank" rel="noreferrer">
         view source code
      </Link>

        </p>
 
              </div>
            </VerticalTimelineElement>
          </VerticalTimeline>
        );
      }
    });

    return (
      <React.Fragment>
        <Container component="main" maxWidth="lg">
          <CssBaseline />
          <Typography variant="h2" align="center" >
            <i className="fab fa-github" align="center"></i>
          </Typography>
          <Typography variant="h4" align="center" >
            Projects & Github Repo
          </Typography>
          {repoItems}
        </Container>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Github);
