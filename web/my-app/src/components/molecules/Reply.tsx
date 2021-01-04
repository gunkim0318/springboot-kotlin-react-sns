import React from "react";
import {Grid, Paper} from "@material-ui/core";
import DefaultInput from "../atoms/DefaultInput";
import { Avatar } from "@material-ui/core";
import { Typography } from "@material-ui/core";

type ReplyProps = {
    name: string;
    contents: string;
    profileImage: string;
}

export const Reply = ({name, contents, profileImage}: ReplyProps) => {
  const onChange = () => {};
  const onSubmit = () => {};
  return (
    <>
        <Grid style={{minHeight:'50px', paddingTop:'10px', paddingBottom:'10px'}}>
            <Avatar style={{float: 'left', marginTop:'6px'}}>{name}</Avatar>
            <Grid  style={{float: 'left', paddingLeft:'5px'}}>
                <Typography variant="h6" component="h6">{name}</Typography>
                <div style={{background:'lightgray', padding:'5px', borderRadius:'5px'}}>{contents}</div>
            </Grid>
        </Grid>
    </>
  );
};
