import Nav from "./components/Nav"
import { History } from "./components/Views2"
import "./public/styles/nav.css"
import "./public/styles/msg.css"

export  function Chat() {
  return <>
        <div className="chats">
          <header className="chat-title"><h3>Messages</h3></header>
            <History />
          </div>
</>
}
export function Current() {
  return <main className="current">
    <h1 className="justify-text-center">No active messages</h1>
  </main>
}
export default function Msg() {
  return (
<>
    <Nav messages='indicate-current-page'/>
    <Chat/>
    <Current />
</>
  )
}
