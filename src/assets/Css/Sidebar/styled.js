import styled from "styled-components";
import { Sidebar, Menu } from "semantic-ui-react";
import { theme } from "../../../Theme/theme";

// Sidebar Container
export const SidebarContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  ailgn-items: center;
`;

// Sidebar Content
export const StyledSidebar = styled(Sidebar)`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.orange};
  height: 100vh;
  width: 250px !important;
  padding: 0px;
`;

// Menu Toggle (If Needed)
export const MenuToggle = styled(Menu.Item)`
  cursor: pointer;
`;

// Sidebar Menu Items
export const MenuItem = styled(Menu.Item)`
  display: flex !important;
  align-items: center !important;
  gap: 15px !important;
  justify-content: center;
  padding: 12px !important;
  margin-left: -30px;
  color: ${theme.colors.orange};
  transition: all 0.3s ease-in-out;

  .menu-icon {
    color: ${theme.colors.orange};
    transition: color 0.3s ease-in-out;
    font-size: 15px !important;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 24px;
    margin-left: 30px;
  }

  .menu-header {
    color: ${theme.colorsblack};
    transition: color 0.3s ease-in-out;
    display: flex !important;
    align-items: center !important;
    font-size: 16px !important;
    font-weight: 500;
    margin: 0;
  }

  &:hover {
    background-color: ${theme.colors.orange};
    border-radius: 5px !important;

    .menu-icon,
    .menu-header {
      color: ${theme.colors.primary} !important;
    }
  }
`;

// Page Content Area
export const Content = styled.div`
  padding: 20px;
  height: 100%;
`;

export const BottomNavContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  background-color: white;
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${theme.colors.black};
  cursor: pointer;
  font-size: 14px;
  fontweight: bold;
  padding: 10px;
  &:hover {
    background-color: ${theme.colors.orange};
    .menu-icon {
      color: ${theme.colors.primary} !important;
    }
  }
`;
