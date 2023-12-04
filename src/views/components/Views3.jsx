import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import forumIcon from "../public/assets/forums.png";
import groupIcon from "../public/assets/groups.png";
import mentorIcon from "../public/assets/mentorship.png";
import collabIcon from "../public/assets/project-collaboration.png";
import { faCircleMinus, faCirclePlus } from "@fortawesome/free-solid-svg-icons";


function Community({ community, TYPE }) {
    const { gName, groupDesc, topMessage, members, logo } = { ...community }
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
                                    <img src={logo} alt="group-icon" width={50} height={50} />
                                </div>
                            </main>
                    })
                }
            </div>
            <span className="differ"></span>
        </>)
}
export default function Communities() {
    const dt = new Date()
    const tm = `${dt.getHours() < 10 ? '0'+ dt.getHours(): dt.getHours()}:${dt.getMinutes() < 10 ? '0'+ dt.getMinutes(): dt.getMinutes()}`
    const forums = [
        {
            gName: "Grow Your Mind",
            groupDesc: "Daily tweets on how to live a good life",
            topMessage: "Native thinking requires grit mindset",
            logo: forumIcon,
            members: 90,
            time: tm
        }
    ]
    const groups = [
        {
            gName: "Grow Your Mind",
            groupDesc: "Daily tweets on how to live a good life",
            topMessage: "Native thinking requires grit mindset",
            logo: groupIcon,
            members: 90,
            time: tm
        }
    ]
    const programme = [
        {
            gName: "Grow Your Mind",
            groupDesc: "Daily tweets on how to live a good life",
            topMessage: "Native thinking requires grit mindset",
            logo: mentorIcon,
            members: 90,
            time: tm
        }
    ]
    const collaboration = [
        {
            gName: "Grow Your Mind",
            groupDesc: "Daily tweets on how to live a good life",
            topMessage: "Native thinking requires grit mindset",
            logo: collabIcon,
            members: 90,
            time: tm
        }
    ]
    return (
        <>
            <Community community={{ ...forums[0] }} TYPE="Forums" />
            <Community community={{ ...groups[0] }} TYPE="Interest groups" />
            <Community community={{ ...programme[0] }} TYPE="Mentorship programme" />
            <Community community={{ ...collaboration[0] }} TYPE="Project collaboration spaces" />
        </>
    );
}
