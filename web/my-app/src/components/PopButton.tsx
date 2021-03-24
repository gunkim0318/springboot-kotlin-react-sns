import React, {KeyboardEvent, MouseEvent, ReactNode, useEffect, useRef, useState} from 'react'
import {Button, MenuItem} from "@material-ui/core";
import {MyPopper} from "./MyPopper";
import {Link} from "react-router-dom";

type PopButtonType = {
    children: ReactNode;
}

export const PopButton = ({children}: PopButtonType) => {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef<HTMLButtonElement>(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: MouseEvent<EventTarget>) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) {
            return;
        }

        setOpen(false);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Tab") {
            event.preventDefault();
            setOpen(false);
            return;
        }
    };
    const prevOpen = useRef(open);
    useEffect(() => {
        if (prevOpen.current && !open) {
            anchorRef.current!.focus();
        }

        prevOpen.current = open;
    }, [open]);
    return (
        <>          <Button
            ref={anchorRef}
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
        >
            {children}
        </Button>
            <MyPopper
                open={open}
                anchorRef={anchorRef}
                handleClose={handleClose}
                handleKeyDown={handleKeyDown}
            >
                <Link to="/profile">
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                </Link>
                <Link to="/account">
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                </Link>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </MyPopper>
        </>
    )
}