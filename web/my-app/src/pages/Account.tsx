import React from "react";
import MyHeader from "../components/organisms/MyHeader";
import { AccountTemplate } from "../components/templates/AccountTemplate";
import { AccountFormContainer } from "../containers/AccountFormContainer";

const Account = () => {
  return (
    <>
      <MyHeader />
      <AccountTemplate>
        <AccountFormContainer />
      </AccountTemplate>
    </>
  );
};

export default Account;
