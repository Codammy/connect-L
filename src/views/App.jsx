import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "./components/Nav";
import { Main, Aside, AppName } from "./components/Views";
import "./public/styles/App.css";
import "./public/styles/nav.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CreatePost from "./components/CreatePost";

export default function WideScreen() {
  return (
    <div className="App">
      <div className="w-name">
        <AppName />
      </div>
      <div className="aside">
        <Aside />
      </div>
      <div className="nav">
        <Nav feeds="indicate-current-page" />
      </div>
      <div className="main">
        <div className="create-post">
          <FontAwesomeIcon icon={faPlus} color="white" size="sm" />
        </div>
        <CreatePost />

        <Main />
      </div>
    </div>
  );
}
