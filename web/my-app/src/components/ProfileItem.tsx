import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const ProfileItem = () => {
  return (
    <ListItem alignItems="flex-start">
      <ListItemText
        primary="어떤 기술을 가지고 계세요?"
        secondary={
          <React.Fragment>
            {"자바, 자바스크립트, 타입스크립트 등을 다룰 줄 압니다."}
          </React.Fragment>
        }
      />
    </ListItem>
  );
};

export default ProfileItem;
