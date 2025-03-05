import React from "react";
import { TabPane } from "semantic-ui-react";
import TabExampleSecondaryPointing from "../../Profile/Components/Tabs";
import LoginFormAgency from "../Components/LoginForm";
import LoginFormTraveler from "../Components/TravelerLoginForm";

const LoginContainer = () => {
  const panes = [
    {
      menuItem: "Traveler",
      render: () => (
        <>
          <TabPane
            attached={false}
            style={{
              background: "transparent",
              border: "none",
              boxShadow: "none",
            }}
          >
            <LoginFormTraveler />
          </TabPane>
        </>
      ),
    },
    {
      menuItem: "Agency",
      render: () => (
        <TabPane
          attached={false}
          style={{
            background: "transparent",
            border: "none",
            boxShadow: "none",
          }}
        >
          <LoginFormAgency />
        </TabPane>
      ),
    },
  ];
  return (
    <>
      <TabExampleSecondaryPointing panes={panes} />
    </>
  );
};

export default LoginContainer;
