import profileImg from "../public/assets/user1.png";

export function History({HandleActiveMessage}) {
  const unreadDms = 1
  const sentTime = "11:47"
    const values = Array(10).fill("id");
    return (
      <div className="people" onClick={HandleActiveMessage}>
        {values.map((val, i) => {
          return <section key={val + i++} className="history">
            <div className="sender-img">
              <img src={profileImg} alt="sendersImage" width={50} height={50}/>
            </div>
            <div className="sender-name"><h4>adedamola Jacobs</h4></div>
            <div className="short-msg"><small>How are you doing?</small></div>
            <div className="unread common"><small>{unreadDms}</small></div>
            <div className="sentTime common"><small>{sentTime}</small></div>
          </section>;
        })}
      </div>
    );
  }


