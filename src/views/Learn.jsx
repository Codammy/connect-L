import { AppName } from "./components/Views"
import Nav from "./components/Nav"
import "./public/styles/nav.css"
import "./public/styles/learn.css";
import { Link } from "react-router-dom";
import Communities from "./components/Views3";

export function Connections() {
  return <>
      <header className="community-title"><h3>Communities</h3></header>
      <div className="communities">
      <Communities />
      </div>
  </>
}
export function Learning(contents) {
  const select = contents.contents.content;
   function directPage(location) {
     location = location.replace(' ', '-')
     location = location.replace('\n', '-')
     return `/learn/${location}`
   }
  return ( 
  <>
  <div className="learn">
    <div className="wrapper">
      {
        select.map(each => {
          return (
            <div className="contain justify-text-center" key={each.long}>
              <Link to={directPage(each.long)} >
            <div className="item justify-text-center" key={each.short}>
                  <span className="short-desc"> {each.short}</span>
              </div>
                  <span className="long-desc" >{each.long}</span>
            </Link>
            </div>
          )
        })
      }
      <div className="contain justify-text-center">
      <Link to= ''>
            <div className="item justify-text-center" >
                  <span className="short-desc">CMT</span>
              </div>
                  <span className="long-desc" >Community</span>
    </Link>
            </div>
    </div>

  </div>
  </>
)}
export default function Learn(contents) {
  return <article className="mother">
    <div className="m-name">
      <AppName />
    </div>

    <div>
    <Nav learning='indicate-current-page' />
    </div>

    <div>
    <Connections />
      </div>
    <Learning contents={contents} />
  </article>
}
