import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import menuItems from "./MobileList";
import {
  BottomNavContainer,
  MenuItem,
  NavItem,
} from "../../assets/Css/Sidebar/styled";
import CustomIcon from "../Icon";
import { theme } from "../../Theme/theme";
// import { Tooltip } from "semantic-ui-react";

const BottomNav = ({ handleLogOut }) => {
  const [activeItem, setActiveItem] = useState(window.location.pathname);

  const handleItemClick = (url) => {
    setActiveItem(url);
  };

  return (
    <BottomNavContainer>
      {menuItems.map((item, index) => (
        <MenuItem
          key={index}
          href={item.url}
          onClick={() => handleItemClick(item.url)}
          active={activeItem === item.url}
        >
          <NavItem>
            {/* <Tooltip content={item.name} position="top center"> */}
            <CustomIcon
              name={item.icon}
              className={"menu-icon"}
              style={{
                fontSize: "20px",
                color:
                  activeItem === item.url
                    ? theme.colors.active
                    : theme.colors.orange,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            />
            {/* </Tooltip> */}
          </NavItem>
        </MenuItem>
      ))}
      <MenuItem as="a" onClick={handleLogOut} href="/auth/login">
        <NavItem>
          {/* <Tooltip content="Log Out" position="top center"> */}
          <CustomIcon
            name={"log out"}
            style={{
              fontSize: "20px",
              color: theme.colors.orange,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
          {/* </Tooltip> */}
        </NavItem>
      </MenuItem>
    </BottomNavContainer>
  );
};

export default BottomNav;
