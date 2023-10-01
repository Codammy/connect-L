import { Nav, History, AppName } from "./Views"
import "./nav.css"


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

  return ( 
  <>
  <div className="learn">
    <div className="wrapper">
      {
        select.map(each => {
          return (
            <div className="contain justify-text-center">
            <div className="item .justify-text-center" key={each.short}>
                  <span className="short-desc"> {each.short}</span>
              </div>
                  <span className="long-desc">{each.long}</span>
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
    <Nav />
    <Connections />
    <Learning contents={contents} />
  </>
}
