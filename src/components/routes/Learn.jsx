import { Nav, History, AppName } from "./Views"
import "./nav.css"


export  function Connections(params) {
  return <>
        <div className="chats connection">
          <header className="chat-title"><h3>Communities</h3></header>
            <History />
          </div>
</>
}
export function Learning(contents) {
  const select = contents.contents.content;

  return <div className="learn">
    <div className="wrapper">
      {
        select.map(each=>{
          return (
          <div className="item" key={each.short}><div className="justify-text-center"> {each.short}</div><span>{each.long}</span></div>
          )
        })
      }
    </div>
  </div>
}
export default function Learn(contents) {
  return <>
    <div className="m-name">
      <AppName />
    </div>
      <Nav />
    <Connections/>
    <Learning contents={contents}/>
      </>
}
