import React from "react";
import {Avatar, Paper, Box, Badge, Accordion, AccordionSummary, Typography, AccordionDetails} from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      margin: "7px 0",
    },
    likes: {
      textAlign: "center",
      paddingTop: "20px",
      paddingBottom: "10px",
    },
    downTap: {
      background: "#f5f5f5",
      textAlign: "center",
      margin: "0px",
      padding: "0px",
      cursor: "pointer",
    },
    downIcon: {
      margin: '0 auto'
    }
  })
);

type PostsProps = {
  id: number;
  contents: string;
  likes: number;
  username: string;
  onClick: () => void;
};

const Posts = ({ id, contents, likes, username, onClick }: PostsProps) => {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.root}>
      <Box component="div" pt={2} pl={2} pr={2}>
        <div>
          <Avatar component="span">{username}</Avatar>
        </div>
        <Box component="div" m={1}>
          {contents}
        </Box>
        <div className={classes.likes}>
          <Badge
            color="secondary"
            badgeContent={likes}
            showZero
            onClick={onClick}
          >
            <ThumbUpAltIcon/>
          </Badge>
        </div>
      </Box>
        <Accordion>
            <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={classes.downTap}
            >
                <ArrowDropDownIcon className={classes.downIcon}/>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    탭입니다
                </Typography>
            </AccordionDetails>
        </Accordion>
    </Paper>
  );
};

export default Posts;
