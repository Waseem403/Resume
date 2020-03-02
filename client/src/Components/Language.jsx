import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from '@material-ui/icons/Cancel';


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

function generate(element) {
  return [0, 1, 2].map(value =>
    React.cloneElement(element, {
      key: value
    })
  );
}

export default function Language() {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

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
              <List dense={dense}>
                <ListItem>
                  <ListItemText
                    primary="ENGLISH"
                    secondary={"Professional working proficiency"}
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
                    secondary={"Elementary proficiency"}
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
