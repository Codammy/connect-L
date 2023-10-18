import Nav from "./components/nav"
import {Main, Aside, AppName } from "./components/Views"
import "./public/styles/App.css"
import "./public/styles/nav.css";

export default function WideScreen() {
  return (
  <div className="App">
    <div className="w-name">
      <AppName />
    </div>
    <div className='aside'>
      <Aside />
    </div>
    <div className='nav'>
      <Nav feeds='indicate-current-page'/>
    </div>
    <div className='main'>
        <div className='create-post'><span>+</span></div>
      <Main/>
    </div>
  </div>  )
}
