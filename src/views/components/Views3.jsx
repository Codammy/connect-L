import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import groupIcon from "../public/assets/user1.png";
import { faCircleMinus, faCirclePlus } from "@fortawesome/free-solid-svg-icons";

function Community({ community, TYPE }) {
    const { gName, groupDesc, topMessage, members, time } = { ...community }
    const n = Math.ceil(Math.random() * 5)
    const elem = Array(n).fill("id")

    return (
        <>
            <div className="forums">
                <header>
                    <div className="title"><h4>{TYPE}</h4></div>
                    <div className="remove-item">
                        <div className="item one" title="add">
                            <FontAwesomeIcon icon={faCirclePlus} color="green"/>
                        </div>
                        <div className="item two" title="remove">
                            <FontAwesomeIcon icon={faCircleMinus} color="green"/>
                        </div>
                    </div>
                </header>
                {
                    elem.map((each) => {
                        return <main>
                                <div className="name"><p>{gName}</p></div>
                                <div className="purpose"><p>- {groupDesc}</p></div>
                                <div className="latest">
                                    <div className="messages"><small>latest: {topMessage}</small></div>
                                    <div className="member"><small style={{color: "green"}}>members - {members}</small></div>
                                    <div className="time"><small>{}</small></div>
                                </div>
                                <div className="group-icon">
                                    <img src={groupIcon} alt="group-icon" width={50} height={50} />
                                </div>
                            </main>
                    })
                }
            </div>
            <span className="differ"></span>
        </>)
}
export default function Communities() {
    const forums = [
        {
            gName: "Grow Your Mind",
            groupDesc: "Daily tweets on how to live a good life",
            topMessage: "Native thinking requires grit mindset",
            members: 90,
            time: "12:43"
        }
    ]
    return (
        <>
            <Community community={{ ...forums[0] }} TYPE="Forums" />
            <Community community={{ ...forums[0] }} TYPE="Interest groups" />
            <Community community={{ ...forums[0] }} TYPE="Mentorship programme" />
            <Community community={{ ...forums[0] }} TYPE="Project collaboration spaces" />
        </>
    );
}