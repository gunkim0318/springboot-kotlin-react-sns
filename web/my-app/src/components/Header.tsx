import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener/ClickAwayListener";
import Grow from "@material-ui/core/Grow/Grow";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import MenuList from "@material-ui/core/MenuList/MenuList";
import Paper from "@material-ui/core/Paper/Paper";
import Popper from "@material-ui/core/Popper/Popper";
import { Settings } from "@material-ui/icons";
import React, { RefObject } from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";

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
            <NotificationsIcon />
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
}

export default Header;
