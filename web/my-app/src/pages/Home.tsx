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
import ClickAwayListener from "@material-ui/core/ClickAwayListener/ClickAwayListener";
import MenuList from "@material-ui/core/MenuList/MenuList";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import Popper from "@material-ui/core/Popper/Popper";
import Grow from "@material-ui/core/Grow/Grow";
import Button from "@material-ui/core/Button/Button";

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
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);
  return (
    <>
      <Grid container direction="row" justify="flex-end" alignItems="center">
        <Grid style={{padding:10}}>
          <Button
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            <SettingsIcon/>
          </Button>
        </Grid>
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
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid xs={5}>
          <Timeline align="right">
            <TimelineItem>
              <TimelineContent>
                <Paper elevation={1} className={classes.paper}>
                  <Typography variant="h6" component="h6">
                    난 이걸 먹었오
                  </Typography>
               </Paper>
                <Typography variant="body2" color="textSecondary">
                  20-10-22 9:30 am
                </Typography>
              </TimelineContent>
              <TimelineSeparator>
                <TimelineDot>
                  <FastfoodIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
            </TimelineItem>
          </Timeline>
        </Grid>
      </Grid>
      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
    </>
  );
};

export default Home;
