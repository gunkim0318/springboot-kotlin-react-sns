import React, { useEffect, useRef } from "react";
import { Grid, Button } from "@material-ui/core";
import { Settings, Notifications } from "@material-ui/icons";
import { MenuPopper } from "../molecules/MenuPopper";

function Header() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);
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
      <MenuPopper
        open={open}
        anchorRef={anchorRef}
        handleClose={handleClose}
        handleKeyDown={handleKeyDown}
      />
    </>
  );
}

export default Header;
