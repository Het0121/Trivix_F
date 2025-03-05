import React from "react";
import { Tab } from "semantic-ui-react";

const TabExampleSecondaryPointing = ({ panes }) => (
  <Tab
    menu={{
      secondary: true,
      pointing: true,
      textAlign: "center",
      className: "centered-tabs",
    }}
    panes={panes}
  />
);

export default TabExampleSecondaryPointing;
