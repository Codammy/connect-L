import {Nav, Main, Aside, AppName } from "./routes/Views"

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
      <Nav />
    </div>
    <div className='main'>
        <div className='create-post'></div>
      <Main/>
    </div>
  </div>  )
}
