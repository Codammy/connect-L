import Nav from "./components/Nav"
import { History } from "./components/Views2"
import "./public/styles/nav.css"
import "./public/styles/msg.css"
import { useState } from "react"
import { nanoid } from "nanoid"
import { useEffect } from "react"

function ActiveMessage({ messages }) {
  return (
    <section className="active-message">
      {
    messages.map(msg =>{
      return (
              <aside className={msg.active === "sender" ? "sender" : "reciever"} id={nanoid()}>
    <div className="body"><p>{msg.body.toString("Base16")}</p></div>
    <div className="time"><p>{msg.time}</p></div>
  </aside>
      )
    })      }
    <div className="new-message">
      <textarea name="message" id="text" cols="30" rows="1" placeholder="Send new message..."></textarea>
      <h4>Send</h4>
    </div>
    </section>
  )
}
export function Chat({HandleActiveMessage}) {
  return <>
    <div className="chats">
      <header className="chat-title"><h3>Messages</h3></header>
      <History HandleActiveMessage={HandleActiveMessage} />
    </div>
  </>
}

export function Current({activeMessage}) {
  return <main className="current">
    {activeMessage}
  </main>
}

export default function Msg() {
  const messages = [
    {
      active: "sender",
      body: "Hello user, welcome to your first interactive message.",
      time: "17:59"
    },
    {
      active: "reciever",
      body: "What's your name ?",
      time: "17:59"
    },
    {
      active: "sender",
      body: "Call me Codam ☺\n Virtual assistant",
      time: "18:00"
    },
  ]
  const [activeMessage, setActiveMessage] = useState(
    <h1 className="justify-text-center">No active messages</h1>)

  function HandleActiveMessage() {
    setActiveMessage(<ActiveMessage messages={messages} />)
  }
  return (
    <>
      <Nav messages='indicate-current-page' />
      <Chat HandleActiveMessage={HandleActiveMessage}/>
      <Current activeMessage={activeMessage} />
    </>
  )
}
