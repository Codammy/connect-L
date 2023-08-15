import { Nav, History } from "./Views"
import "./nav.css"

export  function Chat() {
  return <>
        <div className="chats">
          <header className="chat-title"><h3>Messages</h3></header>
            <History />
          </div>
</>
}
export function Current(params) {
  return <main className="current"></main>
}
export default function Msg() {
  return (
<>
    <Nav />
    <Chat/>
    <Current />
</>
  )
}
