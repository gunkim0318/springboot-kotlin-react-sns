import {
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

type MenuPopperType = {
  open: any;
  anchorRef: any;
  handleClose: any;
  handleKeyDown: any;
};

export const MenuPopper = ({
  open,
  anchorRef,
  handleClose,
  handleKeyDown,
}: MenuPopperType) => {
  return (
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
  );
};
