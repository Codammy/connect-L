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
  return (
    <nav className="contain-nav">
      <ul>
        <li>
          <Link to="/Feeds">
            <FontAwesomeIcon icon={faSquarePollHorizontal} color="green" />
          </Link>
            <span className={feeds}></span>
        </li>
        <li>
          <Link to="/Msg">
            <FontAwesomeIcon icon={faInbox} color="green" />
          </Link>
            <span className={messages}></span>
        </li>
        <li>
          <Link to="/Learn">
            <FontAwesomeIcon icon={faL} color="green" />
          </Link>
            <span className={learning}></span>
        </li>
        <li>
          <Link>
            <FontAwesomeIcon icon={faBell} color="green" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}