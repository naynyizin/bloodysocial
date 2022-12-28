import {
  PermMedia,
  Label,
  LocationOn,
  EmojiEmotions,
} from "@mui/icons-material";
import "./share.css";

export default function Share() {
  return (
    <div className="share-container">
      <div className="share-wrapper">
        <div className="share-top">
          <img src={"/assets/person/1.jpeg"} alt="" />
          <input
            type="text"
            placeholder="What's in your mind Naynyizin ?"
            className="share-input"
          />
        </div>

        <hr />

        <div className="share-bottom">
          <div className="option-container">
            <div className="share-option">
              <PermMedia htmlColor="tomato" />
              <span className="share-text">Photo or Video</span>
            </div>
            <div className="share-option">
              <Label htmlColor="blue" />
              <span className="share-text">Tag</span>
            </div>
            <div className="share-option">
              <LocationOn htmlColor="green" />
              <span className="share-text">Location</span>
            </div>
            <div className="share-option">
              <EmojiEmotions htmlColor="gold" />
              <span className="share-text">Feelings</span>
            </div>
          </div>
          <button className="share-btn">Share</button>
        </div>
      </div>
    </div>
  );
}
