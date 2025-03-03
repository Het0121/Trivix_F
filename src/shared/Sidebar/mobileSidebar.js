import React from "react";
import "semantic-ui-css/semantic.min.css";
import menuItems from "./ListData";
import {
  BottomNavContainer,
  MenuItem,
  NavItem,
} from "../../assets/Css/Sidebar/styled";
import CustomIcon from "../Icon";
import { theme } from "../../Theme/theme";
import { Header } from "semantic-ui-react";
import Cookies from "js-cookie";

// Styled Bottom Navigation Bar

const BottomNav = () => {
  const handleLogOut = () => {
    Cookies.remove("user");
  };
  return (
    <BottomNavContainer>
      {menuItems.map((item, index) => (
        <a href={item.url}>
          <NavItem key={index}>
            <CustomIcon
              name={item.icon}
              className={"menu-icon"}
              style={{
                fontSize: "20px",
                color: theme.colors.orange,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            />
            {/* {item.name} */}
          </NavItem>
        </a>
      ))}
      <MenuItem as="a" onClick={handleLogOut} href="/auth/login">
        <NavItem>
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
        </NavItem>
      </MenuItem>
    </BottomNavContainer>
  );
};

export default BottomNav;
