import Routes from "./routes";

export const App = () => {
    return (
        <Routes />
    )
}
/*

class App extends Component {
    catchAllUnhandledErrors = (promiseRejectionEvent) => {
        console.log(promiseRejectionEvent);
    }
    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }
    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }

    render() {



        return (
            <>
            </>
        )
    }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

export default AppContainer;*/
