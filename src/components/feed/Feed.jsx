import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import { Posts } from "./../../Data";

console.log(Posts);

export default function Feed() {
  return (
    <div className="feed-container">
      <div className="feed-wrapper">
        <Share />
        {Posts.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
}
