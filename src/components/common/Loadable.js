import {Suspense} from "react";
import Preloader from "./Preloader/Preloader";

const Loadable = (Component) => (props) =>
    (
        <Suspense fallback={<Preloader />}>
            <Component {...props} />
        </Suspense>
    )

export default Loadable