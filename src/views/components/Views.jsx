import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profileImg from "../public/assets/user1.png";
import { nanoid } from "nanoid";
import { faEnvelope, faInstitution, faThumbsUp as love, faBookmark as save } from "@fortawesome/free-solid-svg-icons";
import { faComment, faBookmark, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";

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
      <Shortcuts shorts={shorts} />
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
      <EachPost />
      <EachPost />
      <EachPost />
      <EachPost />
      <EachPost />
      <div className="load-icon">
        <p>Api integration underway...</p>
      </div>
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
        <img src={profileImg} alt="" width={80} height={80} style={{ borderRadius: "50%" }} />
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
export function Showcase() {
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
  return (<section className="developer-info">
    <div className="contact common-attr">
      <span>
        <a href="https://www.linkedin.com/in/damilola-abdulmalik"><FontAwesomeIcon icon={faLinkedin} size="xl" color="gray"/></a>
      </span>
      <span>
        <a href="https://www.twitter.com/damilolaabdulm1"><FontAwesomeIcon icon={faXTwitter} size="xl" color="gray"/></a>
      </span>
      <span>
        <a href="https://damisco005@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="xl" color="gray"/></a>
      </span>
    </div>
    <div className="bio common-attr">
      <span>
        <a href="https://github.com/codammy"><FontAwesomeIcon icon={faGithub} size="xl" color="gray"/></a>
      </span>
      <span>
        <a href="https://federalpolyilaro.edu.ng"><FontAwesomeIcon icon={faInstitution} size="xl" color="gray"/></a>
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
  )
}
export function EachPost() {
  const comments = [
    {
      id: 1,
      name: "Oguntola Damilola",
      body: "Nice keep on the hard work"
    },
    {
      id: 2,
      name: "Oguntola Damilola",
      body: "Nice keep on the hard work"
    },
    {
      id: 3,
      name: "Oguntola Damilola",
      body: "Nice keep on the hard work"
    },
  ]
  return (
    <article className="each-post">
      <WhoPost />
      <span className="division"></span>
      <PostBody />
      {/* <span className="division"></span> */}
      <PostAction nOfLikes={15} comments={comments} />
    </article>
  );
}
export function PostBody() {
  return (
    <section className="post">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates obcaecati eos iusto quis, tenetur adipisci soluta ex quae beatae repellat reprehenderit aliquid commodi veniam omnis distinctio ipsam consequatur accusantium impedit officiis labore aut nihil officia non quasi. Natus accusantium animi aliquid, illum unde, tempora minima molestiae maxime distinctio aut nihil similique.</p>
    </section>
  )
}
export function WhoPost() {
  const postEvent = ['Visual art', 'Skills', 'blog', 'Photo', 'Opportuinity', 'Photo', 'Progress', 'links', 'feeling']
  return (
    <section className="who-post">
      <div className="img">
        <img src={profileImg} alt="" width={40} height={40} style={{ borderRadius: "50%" }} /></div>
      <div className="other-info">
        <div className="name"><p>Mr Genius</p></div>
        <div className="time"><small>14:45</small></div>
      </div>
      <div className="post-type">
        <span><big>•</big></span>
        <span>{postEvent[Math.floor(Math.random() * 9)]}</span>
      </div>
    </section>)
}

export function PostAction({ nOfLikes, comments }) {
  const [like, useLIke] = useState(faThumbsUp)
  const [nLike, useNLIke] = useState(nOfLikes)
  const [bookmark, useBookmark] = useState(faBookmark)

  function HandleLikePost() {
    useLIke(like === faThumbsUp ? love : faThumbsUp)
    useNLIke(like === faThumbsUp ? nLike + 1 : nLike - 1)
  }
  function HandleBookmarkPost() {
    useBookmark(bookmark === faBookmark ? save : faBookmark)
  }
  return (
    <section className="post-action">
      <div className="act">
        <span>
          <small style={{ margin: "0px 5px" }}>{nLike}</small>
        </span>
        <FontAwesomeIcon icon={like} size="lg" color="green" onClick={HandleLikePost}></FontAwesomeIcon>
      </div>
      <div className="act">
      <FontAwesomeIcon icon={faComment} size="lg" color="green"></FontAwesomeIcon>
      </div>
      <div className="act">
      <FontAwesomeIcon icon={bookmark} size="lg" color="green" onClick={HandleBookmarkPost}></FontAwesomeIcon>
      </div>
    </section>
  );
}
