import React from "react";
import StoreContext from "./storeContext";

let storeContext = React.createContext(null);

export const Provider = (props) => {
    return <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
}

export default storeContext;