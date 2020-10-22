import { Grid, Typography, Input } from "@material-ui/core";
import React from "react";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from "@material-ui/core/Paper/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import FastfoodIcon from '@material-ui/icons/Fastfood';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
    width: '100%'
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));
const Home: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container direction="row" justify="flex-end" alignItems="center">
        <Grid style={{padding:10}}><SettingsIcon/></Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ padding: 20 }}
      >
        <Typography variant="h4">글을 입력하세요</Typography>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid xs={5}>
          <Input
            inputProps={{ "aria-label": "description" }}
            fullWidth={true}
            style={{ fontSize: "2rem" }}
          />
        </Grid>
      </Grid>
      <Grid container direction="row" justify="flex-start">
        <Grid xs={8}>
          <Timeline align="left">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot>
                  <FastfoodIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={1} className={classes.paper} >
                  <Typography variant="h6" component="h6">
                    난 이걸 먹었오
                  </Typography>
                  <Typography>꽈배기랑 소세지빵을 먹었오</Typography>
                </Paper>
                <Typography variant="body2" color="textSecondary">
                  20-10-22 9:30 am
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
