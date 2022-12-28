import "./closefri.css";

export default function Closefri({ user }) {
  return (
    <li className="fri-list-item">
      <img src={user.profilePicture} alt="" />
      <span className="fri-name">{user.username}</span>
    </li>
  );
}
