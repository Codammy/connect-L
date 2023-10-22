import { AppName } from "./components/Views"
import Nav from "./components/nav"
import { History } from "./components/Views2"
import "./public/styles/nav.css"
import "./public/styles/learn.css";

export function Connections() {
  return <>
    <div className="chats connection">
      <header className="chat-title"><h3>Communities</h3></header>
      <History />
    </div>
  </>
}
export function Learning(contents) {
  const select = contents.contents.content;
  function directPage(location) {
    location = location.replace(' ', '-')
    location = location.replace('\n', '-')
    window.location.href = `/learn/${location}`
  }
  return ( 
  <>
  <div className="learn">
    <div className="wrapper">
      {
        select.map(each => {
          return (
            <div className="contain justify-text-center" key={each.long} onClick={()=>directPage(each.long)}>
            <div className="item justify-text-center" key={each.short}>
                  <span className="short-desc"> {each.short}</span>
              </div>
                  <span className="long-desc" >{each.long}</span>
            </div>
          )
        })
      }
    </div>
  </div>
  </>
)}
export default function Learn(contents) {
  return <>
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
  </>
}
