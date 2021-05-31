import React from "react";
import { Grid } from "@material-ui/core";

type PostsListTemplateProps = {
  form: JSX.Element;
  children: React.ReactNode;
};

const PostsListTemplate = ({ form, children }: PostsListTemplateProps) => {
  return (
    <>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid xs={10} md={5}>
          <Grid>{form}</Grid>
          <Grid style={{ marginTop: "30px" }}>{children}</Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default PostsListTemplate;
