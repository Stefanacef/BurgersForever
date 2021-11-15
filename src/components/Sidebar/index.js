import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRout,
} from "./SidebarElements";
function Sidebar({isOpen,toggle}) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/">Burgers</SidebarLink>
        <SidebarLink to="/">Desert</SidebarLink>
        <SidebarLink to="/">Full Menu</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRout to="/">Order Now</SidebarRout>
      </SideBtnWrap>
    </SidebarContainer>
  );
}

export default Sidebar;
