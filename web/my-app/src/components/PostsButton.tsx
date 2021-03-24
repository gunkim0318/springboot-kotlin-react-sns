import React, {
  KeyboardEvent,
  MouseEvent,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { Button, MenuItem } from "@material-ui/core";
import { MyPopper } from "./MyPopper";
import { deletePostsAsync } from "../modules/posts";
import { useDispatch } from "react-redux";

type PostsButtonType = {
  id: number;
  handleReplyUpdate: () => void;
  children: ReactNode;
};

export const PostsButton = ({
  id,
  handleReplyUpdate,
  children,
}: PostsButtonType) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);
  const dispatch = useDispatch();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (e: MouseEvent<EventTarget>) => {
    setOpen(false);
  };
  const handleDelete = () => {
    dispatch(deletePostsAsync.request(id));
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
    <>
      {" "}
      <Button
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
        <MenuItem onClick={handleReplyUpdate}>수정</MenuItem>
        <MenuItem onClick={handleDelete}>삭제</MenuItem>
      </MyPopper>
    </>
  );
};
