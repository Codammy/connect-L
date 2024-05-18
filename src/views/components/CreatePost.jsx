import "../public/styles/create-post.css";
import { FcAddImage } from "react-icons/fc";
import { Showcase } from "./Views";
import { GrArticle } from "react-icons/gr";
import { BsFillSendArrowUpFill } from "react-icons/bs";
import { IoSendOutline } from "react-icons/io5";
import { useState } from "react";
export default function CreatePost() {
  const [sendStatus, setSendStatus] = useState("none");
  const [sendStatus1, setSendStatus1] = useState("");
  const [postContent, setPostContent] = useState("");
  return (
    <div className="post-container">
      Create something exciting...
      <section className="contain-post">
        <textarea
          rows={"1"}
          value={postContent}
          onInput={(e) => setPostContent(e.value)}
        ></textarea>
        <BsFillSendArrowUpFill
          className="send"
          display={sendStatus}
          color="green"
          title="Post"
          onMouseLeave={() => {
            setSendStatus("none");
            setSendStatus1("");
          }}
          onClick={() => {
            setPostContent("");
          }}
          style={{ marginLeft: "10px", fontSize: "25px" }}
        />
        <IoSendOutline
          className="to-send"
          color="green"
          display={sendStatus1}
          onMouseOver={() => {
            setSendStatus("");
            setSendStatus1("none");
          }}
          style={{ marginLeft: "10px", fontSize: "25px" }}
        />{" "}
        <div className="other-post-format">
          <span className="i">
            <FcAddImage style={{ fontSize: "inherit" }} title="Upload Image" />
          </span>
          <span className="i">
            <GrArticle
              style={{ fontSize: "inherit" }}
              title="Write Article"
              color="green"
            />
          </span>
        </div>
      </section>
      <Showcase style={{ fontSize: "inherit" }} />
    </div>
  );
}
