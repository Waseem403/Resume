import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from '@material-ui/icons/Cancel';
import Hidden from '@material-ui/core/Hidden';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752
  },
  demo: {
    color: "green"
  },
   demo1:{
       color:"red"
   },
  title: {
    margin: theme.spacing(4, 0, 2)
  }
}));


export default function Language() {
  const classes = useStyles();


  return (
    <React.Fragment>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          align="center"
          style={{ color: "#ff4081" }}
          gutterBottom
        >
          Languages
        </Typography>

        <Grid container spacing={2} align="center">
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <div>
              <List >
                <ListItem>
                  <ListItemText
                    primary="ENGLISH"
                    secondary={<Hidden smDown>Professional working proficiency</Hidden>}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" size="small" aria-label="delete">
                      <CheckCircleIcon
                        fontSize="small"
                        className={classes.demo}
                      />
                    </IconButton>{" "}
                    Read{"    "}
                    <IconButton edge="end" size="small" aria-label="delete">
                      <CheckCircleIcon
                        fontSize="small"
                        className={classes.demo}
                      />
                    </IconButton>{" "}
                    Write{"    "}
                    <IconButton edge="end" size="small" aria-label="delete">
                      <CheckCircleIcon
                        fontSize="small"
                        className={classes.demo}
                      />
                    </IconButton>{" "}
                    Speak
                  </ListItemSecondaryAction>
                </ListItem>

                <ListItem>
                  <ListItemText primary="HINDI" secondary={"Native"} />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" size="small" aria-label="delete">
                      <CheckCircleIcon
                        fontSize="small"
                        className={classes.demo}
                      />
                    </IconButton>{" "}
                    Read{"    "}
                    <IconButton edge="end" size="small" aria-label="delete">
                      <CheckCircleIcon
                        fontSize="small"
                        className={classes.demo}
                      />
                    </IconButton>{" "}
                    Write{"    "}
                    <IconButton edge="end" size="small" aria-label="delete">
                      <CheckCircleIcon
                        fontSize="small"
                        className={classes.demo}
                      />
                    </IconButton>{" "}
                    Speak
                  </ListItemSecondaryAction>
                </ListItem>

                <ListItem>
                  <ListItemText primary="TELUGU" secondary={"Native"} />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" size="small" aria-label="delete">
                      <CheckCircleIcon
                        fontSize="small"
                        className={classes.demo}
                      />
                    </IconButton>{" "}
                    Read{"    "}
                    <IconButton edge="end" size="small" aria-label="delete">
                      <CheckCircleIcon
                        fontSize="small"
                        className={classes.demo}
                      />
                    </IconButton>{" "}
                    Write{"    "}
                    <IconButton edge="end" size="small" aria-label="delete">
                      <CheckCircleIcon
                        fontSize="small"
                        className={classes.demo}
                      />
                    </IconButton>{" "}
                    Speak
                  </ListItemSecondaryAction>
                </ListItem>

                <ListItem>
                  <ListItemText
                    primary="KOREAN"
                    secondary={<Hidden smDown>Elementary proficiency</Hidden> }
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" size="small" aria-label="delete">
                      <CheckCircleIcon
                        fontSize="small"
                        className={classes.demo}
                      />
                    </IconButton>{" "}
                    Read{"    "}
                    <IconButton edge="end" size="small" aria-label="delete">
                      <CancelIcon
                        fontSize="small"
                        className={classes.demo1}
                      />
                    </IconButton>{" "}
                    Write{"    "}
                    <IconButton edge="end" size="small" aria-label="delete">
                      <CancelIcon
                        fontSize="small"
                        className={classes.demo1}
                      />
                    </IconButton>{" "}
                    Speak
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
            </div>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
