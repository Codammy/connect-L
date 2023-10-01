import "./nav.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faSquarePollHorizontal,
  faL,
  faInbox,
} from "@fortawesome/free-solid-svg-icons";
import { } from "@fortawesome/free-regular-svg-icons";
import profileImg from "../assets/user1.png";
import { nanoid } from "nanoid";

export function Nav() {
  return (
    <nav className="contain-nav">
      <ul>
        <li>
          <Link to="/Feeds">
            <FontAwesomeIcon icon={faSquarePollHorizontal} color="green" />
          </Link>
            <span className="current-page"></span>
        </li>
        <li>
          <Link to="/Msg">
            <FontAwesomeIcon icon={faInbox} color="green" />
          </Link>
            <span className="current-page"></span>
        </li>
        <li>
          <Link to="/Learn">
            <FontAwesomeIcon icon={faL} color="green" />
          </Link>
            <span className="current-page"></span>
        </li>
        <li>
          <Link>
            <FontAwesomeIcon icon={faBell} color="green" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export function History() {
  const values = Array(10).fill("id");
  return (
    <div className="people">
      {values.map((val, i) => {
        return <section key={val + i++} className="history"></section>;
      })}
    </div>
  );
}
export function Aside() {
  const shorts = ["LR", "NC", "CP", "MR", "SH", "CMT"];
  return (
    <>
      <Side shorts={shorts} />
      <Copyright />
    </>
  );
}
export function Side(shorts) {
  return (
      <section className="bar">
      <User />
      <Shortcuts shorts={shorts}/>
      <Showcase />
      </section>
  );
}
export function Main({ mode }) {
  return (
    <main style={{ height: "100%" }}>
      <div className="m-name">
        <AppName />
      </div>
      <EachPost />
      <EachPost />
      <EachPost />
    </main>
  );
}
export function AppName() {
  return (
    <>
      <header className="AppName">
          <h2>Connect-L</h2>
      </header>
    </>
  );
}
export function Shortcuts(shorts) {
  function createNew() {
    return <></>;
  }
  console.log(shorts);
  return (
  <section className="shortcut">
    <p>Shortcuts</p>
    <div className="contain-items">
  {shorts.shorts.shorts.map((each) => {
    return (
      <button key={nanoid()} className="item">
        {each}
      </button>
    );
  })}
 <button className="add-shortcut item" onClick={createNew}>
    +
  </button>
  </div>
</section>
)
}
export function User() {
  return (
    <section className="profile">
      <div className="user-img">
        <img src={profileImg} alt="" width={80} height={80} style={{borderRadius: "50%" }} />
      </div>
      <div className="user-info">
        <p className="user-name">Amazing Coder</p>
        <span className="followers">
          <small>Followers: 99k,</small> <small>Conections: 1M+</small>
        </span>
        <span className="account-type"><small>Student</small></span>
      </div>
    </section>
  );
}
export function Showcase(){
  return <> 
       <section className="posts">
  <p>Showcase</p>
  <div className="to-post">
    <span className="create">Visual art</span>
    <span className="create">Skills</span>
    <span className="create">blog</span>
    <span className="create">Photo</span>
    <span className="create">Opportuinity</span>
    <span className="create">Photo</span>
    <span className="create">Progress</span>
    <span className="create">links</span>
    <span className="create">feeling</span>
  </div>
</section>
</>
}
export function Copyright() {
  return( <section className="developer-info">
          <div className="contact common-attr">
            <span>
              <a href="https://www.linkedin.com/in/damilola-abdulmalik">LinkedIn</a>
            </span>
            <span>
              <a href="https://www.twitter.com/damilolaabdulm1">Twitter X</a>
            </span>
            <span>
              <a href="https://damisco005@gmail.com">Mail</a>
            </span>
          </div>
          <div className="bio common-attr">
            <span>
              <a href="https://github.com/codammy">Student</a>{" "}
            </span>
            <span>
              <a href="https://">Peace-maker</a>{" "}
            </span>
          </div>
          <div className="city common-attr">
            <span>
              <a href="https://">Nigerian</a>{" "}
            </span>
          </div>
          <footer>
            <small>connected learning ©</small>
          </footer>
      </section>
)}
export function EachPost() {
  return (
      <article className="each-post">
        <WhoPost />
        <span className="division"></span>
        <PostBody />
        <span className="division"></span>
        <PostAction />
      </article>
  );
}
export function PostBody(){
  return (  
  <section className="post">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates obcaecati eos iusto quis, tenetur adipisci soluta ex quae beatae repellat reprehenderit aliquid commodi veniam omnis distinctio ipsam consequatur accusantium impedit officiis labore aut nihil officia non quasi. Natus accusantium animi aliquid, illum unde, tempora minima molestiae maxime distinctio aut nihil similique.</p>
</section>
)}
export function WhoPost(){
  return (  
  <section className="who-post">
  <div className="img">
    <img src={profileImg} alt="" width={40} height={40} style={{borderRadius: "50%" }}/></div>
  <div className="other-info">
      <div className="name"><p>Mr Genius</p></div>
      <div className="time"><small>14:45</small></div>
  </div>
</section>)}
export function PostAction() {
  return (
      <section className="post-action">
        <div className="reaction each">Like</div>
        <div className="comment each">Comment</div>
        <div className="share each">Share</div>
      </section>
  );
}