import './App.css';
import gptLogo from './assets/chatgpt.svg'
import addbtn from './assets/add-30.png'
import msg from './assets/message.svg'
import home from './assets/home.svg'
import saved from './assets/bookmark.svg'
import rocket from './assets/rocket.svg'

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="upperside">
          <div className="upper-side-top">
            <div className='logo-wrapper'><img src={gptLogo} alt="logo" className='logo' />
              <span className="brand">ChatGpt</span>
            </div>
            <button className="mid-btn"><img src={addbtn} alt="new chat" className="add-btn" />New Chat</button>
            <div className="upper-side-bottom">
              <button className="query"><img src={msg} alt="icon" />What is Programming ?</button>
              <button className="query"><img src={msg} alt="icon" />How to use an API ?</button>
            </div>
          </div>
        </div>

        <div className="lowerside">
          <div className="listItems">
            <img src={home} alt="home" className="list-items-img" />Home
          </div>
          <div className="listItems">
            <img src={saved} alt="saved" className="list-items-img" />Saved
          </div>
          <div className="listItems">
            <img src={rocket} alt="rocket" className="list-items-img" />Upgrade to Pro
          </div>
        </div>
      </div>

      <div className="main">

      </div>
    </div>
  );
}

export default App;
