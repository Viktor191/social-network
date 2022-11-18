import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
/*import classes from "./Components/Dialogs/Dialogs.module.css";*/
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";


const App = (props) => {
    /*let posts = [
        {id:1, message:'Hi, how are you?', like:41},
        {id:2, message:'It is my first post', like:8},
        {id:3, message:'Test post', like:14},
    ]*/
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        {/*<Route path="/dialogs" element={<Dialogs dialogs={dialogs} messages={messages}/>} />*/}
                        <Route path="/profile" element={<Profile posts={props.appState.posts}/>}/>
                        <Route path="/dialogs/*" element={<Dialogs dialogs={props.appState.dialogs} messages={props.appState.messages}/>}/>  {/*если есть ссылки глубже, несколько уровней то нужно добьавить "/*"*/}
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;
