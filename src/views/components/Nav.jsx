import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faSquarePollHorizontal,
  faL,
  faInbox,
} from "@fortawesome/free-solid-svg-icons";
import { } from "@fortawesome/free-regular-svg-icons";

export default function Nav({feeds, messages, learning}) {
  const navColor = (active)=> {
    if (window.screen.width <= 800)
      return window.location.pathname === active ? "green" : "#ccc"
    return 'green'
    }
  return (
    <nav className="contain-nav slide-up">
      <ul>
        <li>
          <Link to="/Feeds">
            <FontAwesomeIcon icon={faSquarePollHorizontal} color={navColor('/Feeds')}/>
          </Link>
            <span className={feeds}></span>
        </li>
        <li>
          <Link to="/Msg">
            <FontAwesomeIcon icon={faInbox} color={navColor('/Msg')} />
          </Link>
            <span className={messages}></span>
        </li>
        <li>
          <Link to="/Learn">
            <FontAwesomeIcon icon={faL} color={navColor('/Learn')} />
          </Link>
            <span className={learning}></span>
        </li>
        <li>
          <Link>
            <FontAwesomeIcon icon={faBell} color={navColor('')} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}