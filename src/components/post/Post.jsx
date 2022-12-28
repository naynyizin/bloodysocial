import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../Data";
import { useState } from "react";

export default function Post({ post }) {
  const [like, setlike] = useState(post.like);
  const [islike, setislike] = useState(false);

  const likehandler = () => {
    setlike(islike ? like - 1 : like + 1);
    setislike(!islike);
  };

  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-top-left">
            <img
              className="post-pf-img"
              src={
                Users.filter((user) => user.id === post.id)[0].profilePicture
              }
              alt=""
            />
            <span className="post-user-name">
              {Users.filter((user) => user.id === post.id)[0].username}
            </span>
            <span className="post-date">{post.date}</span>
          </div>
          <div className="post-top-right">
            <MoreVert />
          </div>
        </div>
        <div className="post-center">
          <div className="post-text">{post?.desc}</div>
          <img className="post-img" src={post.photo} alt="postimg" />
        </div>
        <div className="post-bottom">
          <div className="post-bottom-left">
            <img
              className="like-icon"
              src={"/assets/like.png"}
              alt="posticon"
              onClick={likehandler}
            />
            <img
              className="like-icon"
              src={"/assets/heart.png"}
              alt="posticon"
              onClick={likehandler}
            />
            <span
              className="post-like-counter"
              style={{ color: islike ? "steelblue" : "black" }}
            >
              {like} people like it
            </span>
          </div>
          <div className="post-bottom-left">
            <span className="post-comment">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
