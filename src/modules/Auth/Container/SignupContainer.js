import React from "react";
import { TabPane } from "semantic-ui-react";
import TabExampleSecondaryPointing from "../../Profile/Components/Tabs";
import SignupAgency from "../Components/Signup";
import SignupTraveler from "../Components/TravelerSignupForm";
const SignupContainer = () => {
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
            <SignupTraveler />
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
          <SignupAgency />
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

export default SignupContainer;
