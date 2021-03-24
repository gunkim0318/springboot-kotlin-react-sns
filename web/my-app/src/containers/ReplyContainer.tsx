import { Avatar, Grid, Typography } from "@material-ui/core";
import React from "react";
import DefaultInput from "../components/DefaultInput";

export const ReplyContainer = () => {
  return (
    <>
      <hr/>
      <DefaultInput
        placeholder="지금 댓글을 입력해보세요!"
      />
      <Grid style={{minHeight:'50px', paddingTop:'10px', paddingBottom:'10px'}}>
        <Avatar style={{float: 'left', marginTop:'6px'}}>Gun</Avatar>
        <Grid  style={{float: 'left', paddingLeft:'5px'}}>
          <Typography variant="h6" component="h6">안녕하세용!</Typography>
          <div style={{background:'lightgray', padding:'5px', borderRadius:'5px'}}>안녕하세요! 댓글 테스트입니다!</div>
        </Grid>
      </Grid>
      <Grid style={{minHeight:'50px', paddingTop:'10px', paddingBottom:'10px'}}>
        <Avatar style={{float: 'left', marginTop:'6px'}}>Gun</Avatar>
        <Grid  style={{float: 'left', paddingLeft:'5px'}}>
          <Typography variant="h6" component="h6">안녕하세용!</Typography>
          <div style={{background:'lightgray', padding:'5px', borderRadius:'5px'}}>안녕하세요! 댓글 테스트입니다!</div>
        </Grid>
      </Grid>
      <Grid style={{minHeight:'50px', paddingTop:'10px', paddingBottom:'10px'}}>
        <Avatar style={{float: 'left', marginTop:'6px'}}>Gun</Avatar>
        <Grid  style={{float: 'left', paddingLeft:'5px'}}>
          <Typography variant="h6" component="h6">안녕하세용!</Typography>
          <div style={{background:'lightgray', padding:'5px', borderRadius:'5px'}}>안녕하세요! 댓글 테스트입니다!</div>
        </Grid>
      </Grid>
      <Grid style={{minHeight:'50px', paddingTop:'10px', paddingBottom:'10px'}}>
        <Avatar style={{float: 'left', marginTop:'6px'}}>Gun</Avatar>
        <Grid  style={{float: 'left', paddingLeft:'5px'}}>
          <Typography variant="h6" component="h6">안녕하세용!</Typography>
          <div style={{background:'lightgray', padding:'5px', borderRadius:'5px'}}>안녕하세요! 댓글 테스트입니다!</div>
        </Grid>
      </Grid>
    </>
  );
};
