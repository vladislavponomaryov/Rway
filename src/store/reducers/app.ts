import {getAuthUserData} from "./auth";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

let initialState = {
    initialized: false
}

export type InitialStateType = typeof initialState

const app = (state = initialState, action:any): InitialStateType => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

type InitializedSuccessType = {
    type: typeof INITIALIZED_SUCCESS
}
export const initializedSuccess = (): InitializedSuccessType => ({type: INITIALIZED_SUCCESS})

export const initializeApp = () => (dispatch:any) => {
   let promise = dispatch(getAuthUserData());

   promise.then(() => {
       dispatch(initializedSuccess());
   })
}

export default app;