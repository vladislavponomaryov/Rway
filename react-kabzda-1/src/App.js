import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route, Routes} from "react-router-dom";
import Friendbar from "./components/Friends/Friendbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

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
                    <Route path='/profile' element={<Profile store={p.store}/>}/>
                    <Route path='/dialogs/*' element={<DialogsContainer store={p.store}/>}/>
                    <Route path='/users' element={<UsersContainer/> }/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;