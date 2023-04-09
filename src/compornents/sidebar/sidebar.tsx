import React from "react";
import "./Sidebar.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import SidebarChannel from "./SidebarChannel";
import MicIcon from '@mui/icons-material/Mic';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarLeft">
        <div className="sidebarIcon">
          <img src="./logo192.png" alt="" />
        </div>{" "}
        <div className="sidebarIcon">
          <img src="./logo192.png" alt="" />
        </div>
      </div>

      <div className="sidebarRight">
        <div className="sidebarTop">
          <h3>Discord</h3>
          <ExpandMoreIcon />
        </div>
        <div className="sidebarChannels">
          <div className="sidebarChannelHeader">
            <div className="sidebarHeader">
              <ExpandMoreIcon />
              <h4>プログラミングチャンネル</h4>
            </div>
            <AddIcon className="sidebarAddIcon" />
          </div>
          <div className="sidebarChannelList">
            <SidebarChannel />
          </div>
          <div className="sidebarFooter">
            <div className="sidebarAccount">
              <img src="./icon.png" alt="" />
              <div className="accountName">
                <h4>Shincode</h4>
                <span>#81262</span>
              </div>
            </div>

            <div className="sidebarVoice">
              <MicIcon/>
              <HeadsetMicIcon/>
              <SettingsIcon/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
