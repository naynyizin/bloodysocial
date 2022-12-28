import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <h2>B100DYSOCIAL</h2>
      </div>
      <div className="topbar-center">
        <div className="search-container">
          <Search className="search" />
          <input
            type="text"
            placeholder="Search your friend, post or video . . . . "
          />
        </div>
      </div>
      <div className="topbar-right">
        <div className="topbarLink-container">
          <div className="topbarLink">Homepage</div>
          <div className="topbarLink">Timeline</div>
        </div>
        <div className="t-icon-container">
          <div className="topbaricon">
            <Person className="t-icon" />
            <span className="iconbadge">1</span>
          </div>
          <div className="topbaricon">
            <Chat className="t-icon" />
            <span className="iconbadge">2</span>
          </div>
          <div className="topbaricon">
            <Notifications className="t-icon" />
            <span className="iconbadge">3</span>
          </div>
        </div>
        <Link to="/profile">
          <img src={"../../assets/person/1.jpeg"} alt="imgtapbar" />
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
