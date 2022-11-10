import logo from './logo.svg';
import audi from './audi-rs3lms.jpg';
import './App.css';


const App = () => {
  return (
    <div className='app-wrapper'>
        <header className='header'>
            <div className='logo'>
                <img src='https://assets.turbologo.ru/blog/ru/2019/12/18163124/audi-emblem-958x575.png'/>
            </div>
        </header>
        <nav className='nav'>
            <div>
                Profile
            </div>
            <div>
                Messages
            </div>
            <div>
                News
            </div>
            <div>
                Music
            </div>
            <div>
                Settings
            </div>
        </nav>
        <div className='content'>
            <div className='main-image'>
                <img src='https://car-images.bauersecure.com/wp-images/2709/04-audi-rs3lms.jpg'/>
            </div>
            <div className='avatar'>
                <img src='https://c4.wallpaperflare.com/wallpaper/146/911/592/audi-headlight-abbot-sportback-rs7-hd-wallpaper-preview.jpg'/>
                ava+description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    post 1
                </div>
                <div>
                    post 2
                </div>
                <div>
                    post 3
                </div>
            </div>
            Main content
        </div>
    </div>
  );
}
export default App;
