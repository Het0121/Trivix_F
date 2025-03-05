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
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
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
  // margin-left: 25px;
  border-radius &:hover {
    background-color: ${theme.colors.orange};
    .menu-icon {
      color: ${theme.colors.primary} !important;
    }
  }
`;
export const SidebarWrapper = styled.div`
  width: 250px;
  height: 100vh;
  background-color: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  position: fixed;
  left: 0;
  top: 0;
  box-shadow: 1px 0 3px rgba(0, 0, 0, 0.15);
`;
export const SidebarHeader = styled.h2`
  color: ${theme.colors.orange};
  font-size: 22px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 20px;
`;
export const SidebarMenu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;
export const SidebarItem = styled.a`
  width: 90%;
  display: flex;
  align-items: center;
  color: ${theme.colors.black};
  padding: 10px;
  gap: 10px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 800 !important;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  .menu-icon {
    color: ${theme.colors.orange}; /* Icon is now orange */
    font-size: 20px;
  }
  &:hover {
    background-color: ${theme.colors.orange};
    color: ${theme.colors.white};
    .menu-icon {
      color: ${theme.colors.white}; /* Icon turns white on hover */
    }
  }
`;
export const LogoutButton = styled(SidebarItem)`
  margin-top: auto;
  font-weight: bold;
  color: ${theme.colors.blue};
  .menu-icon {
    color: ${theme.colors.blue};
  }
  &:hover {
    background-color: ${theme.colors.blue};
    color: ${theme.colors.white};
    .menu-icon {
      color: ${theme.colors.white};
    }
  }
`;
