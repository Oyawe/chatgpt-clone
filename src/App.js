import './App.css';
import gptLogo from './assets/chatgpt.svg'
import addbtn from './assets/add-30.png'
import msg from './assets/message.svg'
import home from './assets/home.svg'
import saved from './assets/bookmark.svg'
import rocket from './assets/rocket.svg'
import sendbtn from './assets/send.svg'
import user from './assets/user-icon.png'
import gptImgLogo from './assets/chatgptLogo.svg'

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
        <div className="chats">
          <div className="chat">
            <img className='chat-img' src={user} alt="" /><p className='txt'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis recusandae labore accusamus quia eaque aliquam illum dignissimos doloremque voluptatum rem.</p>
          </div>
          <div className="chat bot">
            <img className='chat-img' src={gptImgLogo} alt="" /><p className='txt'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et natus tempore doloribus tempora velit? Temporibus eum molestias aliquid minima obcaecati, accusamus ea reprehenderit soluta enim cumque distinctio ad praesentium voluptas error delectus! Numquam, sunt voluptatum! Iure neque ex enim tenetur suscipit id animi facere tempore, modi at adipisci, sed odit laudantium. Nostrum ullam deserunt autem velit commodi omnis perferendis alias dicta totam quam! Quod fuga rem, dolor impedit hic commodi doloremque reiciendis quis nemo. Debitis deserunt, excepturi autem voluptatibus voluptatem cupiditate provident quod in, beatae nostrum ad ab quidem dignissimos at laboriosam molestiae necessitatibus, est quam possimus eum aliquid? Doloremque.</p>
          </div>
        </div>
        <div className="chat-footer">
          <div className="inp">
            <input type="text" placeholder="Type a message" />
            <button className="send"><img src={sendbtn} alt="send" /></button>
          </div>
          <p>ChatGPT may produce inaccurate information about people, places or facts. ChatGPT August 20 Version</p>
        </div>
      </div>
    </div>
  );
}

export default App;
