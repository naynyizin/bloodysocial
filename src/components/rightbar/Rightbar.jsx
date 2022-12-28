import "./rightbar.css";
import Onlinefri from "../onlinefri/Onlinefri";
import { Users } from "../../Data";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthday-container">
          <img className="birthday-img" src={"/assets/gift.png"} alt="" />
          <span className="birthday-text">
            <b>N3zuk0</b> and <b>2 other friend</b> have a birthday
          </span>
        </div>
        <img className="ad-img" src={"/assets/ad.png"} alt="adimg" />

        <h4 className="rightbar-title">Online Friends</h4>
        <ul className="rightbar-fri-list">
          {Users.filter((user) => user.id !== 1)
            .reverse()
            .map((fuser) => (
              <Onlinefri key={fuser.id} user={fuser} />
            ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbar-f-title">User Infomation</h4>
        <div className="rightinfo">
          <div className="rightinfo-item">
            <span className="rightinfo-key">City : </span>
            <span className="rightinfo-value">Wano</span>
          </div>
          <div className="rightinfo-item">
            <span className="rightinfo-key">From : </span>
            <span className="rightinfo-value">Grand Line</span>
          </div>
          <div className="rightinfo-item">
            <span className="rightinfo-key">Relationship : </span>
            <span className="rightinfo-value">FA Bitch!</span>
          </div>
        </div>
        <h4 className="rightbar-f-title">User Friends</h4>
        <div className="rightbar-followings">
          <div className="rightbar-following">
            <img
              className="rightbar-following-img"
              src="/assets/person/2.jpeg"
              alt="rightbarimg"
            />
            <span className="rightbar-following-name">Quill</span>
          </div>
          <div className="rightbar-following">
            <img
              className="rightbar-following-img"
              src="/assets/person/3.jpeg"
              alt="rightbarimg"
            />
            <span className="rightbar-following-name">Nova</span>
          </div>
          <div className="rightbar-following">
            <img
              className="rightbar-following-img"
              src="/assets/person/4.jpeg"
              alt="rightbarimg"
            />
            <span className="rightbar-following-name">Rikimaru</span>
          </div>
          <div className="rightbar-following">
            <img
              className="rightbar-following-img"
              src="/assets/person/5.jpeg"
              alt="rightbarimg"
            />
            <span className="rightbar-following-name">Greedy A.M</span>
          </div>
          <div className="rightbar-following">
            <img
              className="rightbar-following-img"
              src="/assets/person/7.jpeg"
              alt="rightbarimg"
            />
            <span className="rightbar-following-name">Zwe Gyi</span>
          </div>
          <div className="rightbar-following">
            <img
              className="rightbar-following-img"
              src="/assets/person/6.jpeg"
              alt="rightbarimg"
            />
            <span className="rightbar-following-name">Fucking Kid</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbar-wrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
