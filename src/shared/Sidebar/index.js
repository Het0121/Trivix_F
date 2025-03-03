import React from "react";
import { Divider, Header, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import styled from "styled-components";
import {
  StyledSidebar,
  SidebarContainer,
  MenuItem,
} from "../../assets/Css/Sidebar/styled"; // Import the styled components
import BottomNav from "./mobileSidebar"; // Import the bottom navigation bar
import menuItems from "./ListData";
import CustomIcon from "../Icon";
import ProfileCard from "../../components/Cards/ProfileCards";
import { useDispatch } from "react-redux";
import { logout } from "../../modules/Auth/Actions/Actions";
import Cookies from "js-cookie";
// Hide sidebar on mobile screens
const ResponsiveSidebarContainer = styled(SidebarContainer)`
  @media (max-width: 1024px) {
    display: none;
    padding: 0px;
  }
`;

// Show bottom navigation only on mobile and tablet
const ResponsiveBottomNav = styled.div`
  display: none;
  @media (max-width: 1024px) {
    display: block; /* Show only on mobile and tablet screens */
  }
`;

const CustomeSidebar = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logout);
    Cookies.remove("user");
  };

  return (
    <>
      {/* Sidebar for Desktop */}
      <ResponsiveSidebarContainer>
        <StyledSidebar vertical visible width="thin">
          <Segment style={{ border: "none" }}>
            <Header as="h2" textAlign="center">
              Explorify
            </Header>
          </Segment>
          {menuItems.map((item, index) => (
            <a href={item.url}>
              <MenuItem key={index} as="a">
                <div
                  style={{
                    display: "flex",
                    width: "130px",
                    padding: 0,
                    gap: "15px",
                  }}
                >
                  <CustomIcon name={item.icon} className="menu-icon" />
                  <Header as="h4" className="menu-header">
                    {item.name}
                  </Header>
                </div>
              </MenuItem>
            </a>
          ))}
          <Divider />
          <MenuItem as="a" onClick={handleLogOut}>
            <div
              style={{
                display: "flex",
                width: "130px",
                padding: 0,
                gap: "15px",
              }}
            >
              <CustomIcon name={"log out"} className="menu-icon" />
              {/* <a href="/auth/login"> */}
              <Header as="h4" className="menu-header">
                Logout
              </Header>
              {/* </a> */}
            </div>
          </MenuItem>
          <div style={{ marginTop: "40px" }}>
            <ProfileCard />
          </div>
        </StyledSidebar>
      </ResponsiveSidebarContainer>

      {/* Bottom Navigation for Mobile & Tablet */}
      <ResponsiveBottomNav>
        <BottomNav />
      </ResponsiveBottomNav>
    </>
  );
};

export default CustomeSidebar;
