import './App.css';
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route, Routes} from "react-router-dom";
import Friendbar from "./components/Friends/Friendbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "./hoc/withRouter";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {

        if (!this.props.initialized) return <Preloader/>

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <div className="sidebar">
                    <Navbar/>
                    <Friendbar state={this.props.state.sidebar.friends}/>
                </div>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/profile/' element={<ProfileContainer/>}>
                            <Route path=':userId' element={<ProfileContainer/>}/>
                        </Route>
                        <Route path='/dialogs/*' element={<DialogsContainer store={this.props.store}/>}/>
                        <Route path='/users' element={<UsersContainer/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                        <Route path='/login' element={<LoginContainer/>}/>
                    </Routes>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps,{initializeApp})
)(App);