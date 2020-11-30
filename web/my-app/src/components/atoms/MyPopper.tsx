import {
    ClickAwayListener,
    Grow,
    MenuList,
    Paper,
    Popper,
} from "@material-ui/core";
import React, {ReactNode, RefObject} from "react";

type MyPopperType = {
    children: ReactNode;
    open: boolean;
    anchorRef: RefObject<HTMLButtonElement>;
    handleClose: (event: React.MouseEvent<EventTarget>) => void;
    handleKeyDown: (event: React.KeyboardEvent) => void;
};

export const MyPopper = ({
                             children,
                             open,
                             anchorRef,
                             handleClose,
                             handleKeyDown
                         }: MyPopperType) => {
    return (
        <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
        >
            {({TransitionProps, placement}) => (
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
                                {children}
                            </MenuList>
                        </ClickAwayListener>
                    </Paper>
                </Grow>
            )}
        </Popper>
    );
};
