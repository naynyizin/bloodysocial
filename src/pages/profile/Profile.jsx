import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profile-right">
          <div className="profile-right-top">
            <div className="profile-cover">
              <img
                className="cover-img"
                src="/assets/post/3.jpeg"
                alt="coverimg"
              />
              <img className="pf-img" src="/assets/person/1.jpeg" alt="pfimg" />
            </div>
            <div className="pf-info">
              <h4 className="pf-name">Naynyizin TheFvvker</h4>
              <span className="pf-desc">Nothing to Everything</span>
            </div>
          </div>
          <div className="profile-right-bottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
