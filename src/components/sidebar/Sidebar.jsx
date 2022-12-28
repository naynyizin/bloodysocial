import "./sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircle,
  Group,
  Bookmark,
  Help,
  Work,
  Event,
  School,
} from "@mui/icons-material";
import Closefri from "../closefri/Closefri";
import { Users } from "../../Data";

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-wrapper">
        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <RssFeed className="side-icon" />
            <span className="sidebar-list-text">Feed</span>
          </li>
          <li className="sidebar-list-item">
            <Chat className="side-icon" />
            <span className="sidebar-list-text">Chats</span>
          </li>
          <li className="sidebar-list-item">
            <PlayCircle className="side-icon" />
            <span className="sidebar-list-text">Videos</span>
          </li>
          <li className="sidebar-list-item">
            <Group className="side-icon" />
            <span className="sidebar-list-text">Groups</span>
          </li>
          <li className="sidebar-list-item">
            <Bookmark className="side-icon" />
            <span className="sidebar-list-text">Bookmarks</span>
          </li>
          <li className="sidebar-list-item">
            <Help className="side-icon" />
            <span className="sidebar-list-text">Questions</span>
          </li>
          <li className="sidebar-list-item">
            <Work className="side-icon" />
            <span className="sidebar-list-text">Jobs</span>
          </li>
          <li className="sidebar-list-item">
            <Event className="side-icon" />
            <span className="sidebar-list-text">Events</span>
          </li>
          <li className="sidebar-list-item">
            <School className="side-icon" />
            <span className="sidebar-list-text">Courses</span>
          </li>
        </ul>
        <button type="button" className="more-btn">
          Show More
        </button>

        <hr className="sidebar-hr" />

        <ul className="sidebar-fri-list">
          {Users.filter((user) => user.id !== 1).map((fuser) => (
            <Closefri key={fuser.id} user={fuser} />
          ))}
        </ul>
      </div>
    </div>
  );
}
