import "./onlinefri.css";

export default function Onlinefri({ user }) {
  return (
    <li className="rightbar-fri">
      <div className="rightbar-pf-container">
        <img src={user.profilePicture} alt="" />
        <div className="online-sign"></div>
      </div>
      <span className="rightbar-fri-name">{user.username}</span>
    </li>
  );
}
