import "./nav.css"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell, faSquarePollHorizontal, faL, faInbox } from "@fortawesome/free-solid-svg-icons"
import {  } from "@fortawesome/free-regular-svg-icons"
import profileImg  from "../assets/user1.jpeg"

export function AppName() {
  return <>
  <header className="AppName">
    <span className="logo"></span>
    <span className="app-name"><h2>Connect-L</h2></span>
  </header>
  </>
}
export function Nav() {
    return (
        <nav className="contain-nav">
            <ul>
            <li><Link to="/Feeds"><FontAwesomeIcon icon={faSquarePollHorizontal} color="green"/></Link></li>
            <li><Link to="/Msg"><FontAwesomeIcon icon={faInbox} color="green"/></Link></li>
            <li><Link to="/Learn"><FontAwesomeIcon icon={faL} color="green"/></Link></li>
            <li><Link><FontAwesomeIcon icon={faBell} color="green"/></Link></li>
            </ul>
        </nav>
    )
}

export function Aside()
{
  const  shorts = ["LR", "NC", "CP", "MR", "SH", "CMT"]
  return <>
    <div className='bar'>
    <Side shorts={shorts}/>
    </div>
    <section className='developer-info' >
      <div className="content">
        <div className="item-1">
          <span><a href="#">LinkedIn</a></span><span><a href="#">Twitter X</a></span><span><a href="#">Mail</a></span>
        </div>
        <div className="item-2"><span><a href="#">Student</a> </span><span><a href="#">Peace-maker</a> </span></div>
        <div className="item-3"><span><a href="#">Nigerian</a> </span></div>
        <footer><small>connected learning</small></footer>
      </div>
    </section>
    </>
}

export function EachPost() {
  return <>
    <article className='each-post'>
    </article>
    </>
}

export function Side(shorts) {
  function createNew() {
     return <></>
  }
      let num = 0;
  return <>
    <section className='profile' >
      <div className="user-img">
        <img src={profileImg} alt="" />
      </div>
      <div className="user-info">
      <span className="user-name">Amazing Coder</span><br />
      <span className="followers"><b>Followers:</b> 99k,  <b>Conections:</b> 1M+</span><br />
      <span className="Student">Student</span>
      </div>
    </section>
    <section className='posts' >
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
    
    <section className='shortcut' >
      {
      shorts.shorts.map(each=>{return <button key={++num} className="item">{each}</button>})
      }
      <button className="add-shortcut item" onClick={createNew}> + </button>
    </section>
        </>
}
export function History(params) {
  const values = Array(10).fill("id")
  return <div className="people">
              {
              values.map((val, i) => {return <section key={val + i++} className="history"></section>})}
          </div>
}
export function Main({mode}) {
  return <main style={{height: "100%"}}>
    <div className="m-name">
          <AppName />
      </div>
        <EachPost />
        <EachPost />
        <EachPost />
    </main>
}