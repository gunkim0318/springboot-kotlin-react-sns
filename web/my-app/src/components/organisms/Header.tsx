import React from "react";
import {Grid} from "@material-ui/core";
import {Notifications, Settings} from "@material-ui/icons";
import {PopButton} from "../molecules/PopButton";

function Header() {
  return (
    <>
      <Grid container direction="row" justify="flex-end" alignItems="center">
        <Grid style={{ padding: 10 }}>
          <PopButton>
            <Notifications />
          </PopButton>
          <PopButton>
            <Settings/>
          </PopButton>
        </Grid>
      </Grid>
    </>
  );
}

export default Header;
