import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import state from "./redux/state";
import Friendbar from "./components/Friends/Friendbar";

const App = (p) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <div className="sidebar">
                <Navbar/>
                <Friendbar state={p.state.sidebar.friends}/>
            </div>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path='/profile' element={<Profile state={p.state.profilePage}/>}/>
                    <Route path='/dialogs/*' element={<Dialogs state={p.state.dialogsPage}/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;