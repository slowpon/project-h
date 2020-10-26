import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import {
  Chat,
  EmojiFlags,
  ExpandMoreOutlined,
  LocalHospital,
  People,
  Storefront,
  VideoLibrary
} from "@material-ui/icons";

function Sidebar(){
  return <div className="sidebar">
    <SidebarRow
        src="/logo.png"
        title="Hao"/>
    <SidebarRow
      Icon={LocalHospital}
      title="Animal Information Center"
    />
    <SidebarRow Icon={EmojiFlags} title="Pages" />
    <SidebarRow Icon={People} title="Friends" />
    <SidebarRow Icon={Chat} title="Messenger" />
    <SidebarRow Icon={Storefront} title="Marketplace" />
    <SidebarRow Icon={VideoLibrary} title="videos" />
    <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace" />


  </div>
}

export default Sidebar;