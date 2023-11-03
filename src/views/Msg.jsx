import Nav from "./components/Nav"
import { History } from "./components/Views2"
import "./public/styles/nav.css"
import "./public/styles/msg.css"
import { useState } from "react"
import { nanoid } from "nanoid"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import profileImg from "./public/assets/user1.png";
import { faArrowAltCircleLeft, faKeyboard } from "@fortawesome/free-solid-svg-icons"
import { faPaperPlane as lightPaperPlane } from "@fortawesome/free-regular-svg-icons"


function ActiveMessage({ messages, HandleActiveMessage }) {
  const [sendIcon, setSendIcon] = useState(lightPaperPlane)
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
      <div className="messenger">
          <span className="prev" onClick={()=>{
        const current = document.getElementById('curr')
        const nav = document.getElementsByClassName('contain-nav')[0]
                  current.classList.remove('slide-current')
                  nav.classList.remove('slide-bottom')
                  nav.classList.add('slide-up')
                  current.classList.add('curr')
                }
        }>
          <FontAwesomeIcon icon={faArrowAltCircleLeft}/>
          <span>Go back</span>
        </span>
        <div className="whom">
          <img src="" alt="" />
          <p>{messages.isName}</p>
        </div>
      </div>
      {
        messages.map(msg => {
          return (
            <aside key={nanoid()} className={msg.active === "sender" ? "sender" : "reciever"} id={nanoid()}>
              <div className="body"><p>{msg.body}</p></div>
              <div className="time"><p>{msg.time}</p></div>
            </aside>
          )
        })}
              <FontAwesomeIcon icon={faKeyboard} style={{margin: "5px", position:"fixed", bottom:"12%"}} color="#ccc" className="keyboard-focus" onClick={()=>{
          const keyboard = document.getElementsByClassName('new-message')[0]
            keyboard.classList.toggle('keyboard')
            keyboard.classList.toggle('hide-keyboard')
        }}/>
      <div className="new-message keyboard">
        <textarea name="message" id="text" cols="30" rows="1" placeholder="Send new message..."></textarea>
        <FontAwesomeIcon icon={sendIcon} onClick={
          () => HandleRenderMessage(document.getElementById('text'))
        } style={{margin: "auto 5px"}} color="green" size="xl"></FontAwesomeIcon>
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
      isName: "Adedamola Jacobs",
      body: "Hello user, welcome to your first interactive message.",
      time: "17:59"
    },
    {
      active: "reciever",
      isName: "Codam Fury",
      body: "What's your name ?",
      time: "17:59"
    },
    {
      active: "sender",
      isName: "Adedamola Jacobs",
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
