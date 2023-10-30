import Nav from "./components/Nav"
import { History } from "./components/Views2"
import "./public/styles/nav.css"
import "./public/styles/msg.css"
import { useState } from "react"
import { nanoid } from "nanoid"

function ActiveMessage({ messages, HandleActiveMessage }) {
  function HandleRenderMessage(textArea) {
    if (textArea.value === '' || textArea.value.trim() === '')
      return
    const sentTime = new Date()
    messages.push({
      active: "reciever",
      body: textArea.value,
      time: `${sentTime.getHours()}:${sentTime.getMinutes()}`
    })
    textArea.value = ''
    HandleActiveMessage(<ActiveMessage messages={messages} HandleActiveMessage={HandleActiveMessage} />)
  }
  return (
    <section className="active-message">
      {
        messages.map(msg => {
          return (
            <aside key={nanoid()} className={msg.active === "sender" ? "sender" : "reciever"} id={nanoid()}>
              <div className="body"><p>{msg.body}</p></div>
              <div className="time"><p>{msg.time}</p></div>
            </aside>
          )
        })}
      <div className="new-message">
        <textarea name="message" id="text" cols="30" rows="1" placeholder="Send new message..."></textarea>
        <h4 onClick={
          () => HandleRenderMessage(document.getElementById('text'))
        }>Send</h4>
      </div>
    </section>
  )
}
export function Chat({ HandleActiveMessage }) {
  return <>
    <div className="chats">
      <header className="chat-title"><h3>Messages</h3></header>
      <History HandleActiveMessage={HandleActiveMessage} />
    </div>
  </>
}

export function Current({ activeMessage }) {
  return <main className="current curr" id="curr">
    {activeMessage}
  </main>
}

export default function Msg() {
  let messages = [
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
    setActiveMessage(<ActiveMessage messages={messages} HandleActiveMessage={HandleActiveMessage} />)
  }
  return (
    <>
      <Nav messages='indicate-current-page' />
      <Chat HandleActiveMessage={HandleActiveMessage} />
      <Current activeMessage={activeMessage} />
    </>
  )
}
