import React, { Component } from "react";
import PropTypes from "prop-types";

import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import Badge from "@material-ui/core/Badge";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import LinkIcon from "@material-ui/icons/Link";
import Tooltip from "@material-ui/core/Tooltip";
import { Animated } from "react-animated-css";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import Moment from "react-moment";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";

import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@material-ui/icons/Work";
import VisibilityIcon from "@material-ui/icons/Visibility";
import StarIcon from "@material-ui/icons/Star";
import DeleteIcon from "@material-ui/icons/Delete";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import InfoIcon from "@material-ui/icons/Info";
import GitHubIcon from "@material-ui/icons/GitHub";
import GetAppIcon from '@material-ui/icons/GetApp';
import Hidden from '@material-ui/core/Hidden';
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
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
});

class Github extends Component {
  render() {
    const { classes, Repo } = this.props;
    console.dir(Repo);
    const repoItems = Repo.map((repo, index) => {
     
      if (index % 2 === 0) {
        return (
          <VerticalTimeline>
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
              <p variant="subtitle2" gutterBottom className={classes.inline}>
                <i class="fas fa-star" style={{color:"orange"}}></i> <strong>Stars</strong> :{" "}
                {repo.stargazers_count}
              </p>
              <p variant="subtitle2" gutterBottom className={classes.inline}>
                <i className="fas fa-eye" style={{color:"blue"}}></i> <strong>Watchers</strong> :{" "}
                {repo.watchers_count}
              </p>
              <p variant="subtitle2" gutterBottom className={classes.inline}>
                <i className="fas fa-code-branch" style={{color:"green"}}></i> <strong>Forks</strong> :{" "}
                {repo.forks_count}
              </p>
              </div>
              <div className={classes.links}>
      <p className={classes.root}>
      <Link href={repo.html_url} target="_blank" rel="noreferrer">
         view source code
      </Link>
      <Link href={repo.html_url} target="_blank" rel="noreferrer">
         view demo
      </Link>
        </p>
 
              </div>
            </VerticalTimelineElement>
          </VerticalTimeline>
        );
      } else {
        return (
          <VerticalTimeline>
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
              <p variant="subtitle2" gutterBottom className={classes.inline}>
                <i class="fas fa-star" style={{color:"orange"}}></i> <strong>Stars</strong> :{" "}
                {repo.stargazers_count}
              </p>
              <p variant="subtitle2" gutterBottom className={classes.inline}>
                <i className="fas fa-eye" style={{color:"blue"}}></i> <strong>Watchers</strong> :{" "}
                {repo.watchers_count}
              </p>
              <p variant="subtitle2" gutterBottom className={classes.inline}>
                <i className="fas fa-code-branch" style={{color:"green"}}></i> <strong>Forks</strong> :{" "}
                {repo.forks_count}
              </p>
              </div>
              <div className={classes.links}>
      <p className={classes.root}>
      <Link href={repo.html_url} target="_blank" rel="noreferrer">
         view source code
      </Link>
      <Link href={repo.html_url} target="_blank" rel="noreferrer">
         view demo
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
          <Typography variant="h2" align="center" gutterBottom>
            <i class="fab fa-github" align="center"></i>
          </Typography>
          <Typography variant="h4" align="center" gutterBottom>
            Projects & Github Repo
          </Typography>
          {repoItems}
        </Container>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Github);
