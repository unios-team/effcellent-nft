import React from "react";
import {
  AppSidebarOverLay,
  AppSidebarWrapper,
  CloseButton,
  NavItem,
  NavMint,
  SidebarNavbar,
} from "./styles";
import { headerData } from "./data";
import { MintButton } from "../modules/mint";
type SidebarProps = {
  isshow: boolean;
  onClose: () => void;
};

export const AppSidebar: React.FC<SidebarProps> = ({ isshow, onClose }) => {
  return (
    <>
      <AppSidebarWrapper isshow={isshow ? "true" : undefined}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <SidebarNavbar>
          {headerData.map((item, key) => (
            <NavItem
              className={"sidebar"}
              key={key}
              href={item.to}
              target={item.label === "Gitbook" ? "_blank" : "_self"}
              onClick={onClose}
            >
              {item.label}
            </NavItem>
          ))}
          <div style={{ marginTop: "40px" }}>
            <MintButton />
          </div>
          <NavMint onClick={() => window.open("https://WithPaper.com")}>
            <img src="/assets/images/paper-icon.svg" alt="" />
            Mint
          </NavMint>
        </SidebarNavbar>
      </AppSidebarWrapper>
      <AppSidebarOverLay
        isshow={isshow ? "true" : undefined}
        onClick={onClose}
      />
    </>
  );
};
