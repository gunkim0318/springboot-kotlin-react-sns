import React, { RefObject } from "react";
import {
  Grid,
  Button,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@material-ui/core";
import { Settings, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";

type HeaderProps = {
  open: boolean;
  anchorRef: RefObject<HTMLButtonElement>;
  handleToggle: () => void;
  handleClose: (event: React.MouseEvent<EventTarget>) => void;
  handleKeyDown: (event: React.KeyboardEvent) => void;
};
function Header({
  open,
  anchorRef,
  handleToggle,
  handleClose,
  handleKeyDown,
}: HeaderProps) {
  return (
    <>
      <Grid container direction="row" justify="flex-end" alignItems="center">
        <Grid style={{ padding: 10 }}>
          <Button>
            <Notifications />
          </Button>
          <Button
            ref={anchorRef}
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            <Settings />
          </Button>
        </Grid>
      </Grid>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleKeyDown}
                >
                  <Link to="/profile">
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                  </Link>
                  <Link to="/account">
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                  </Link>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}

export default Header;
