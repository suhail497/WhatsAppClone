export const initialState = {
    user: null
}
export const userActionTypes = {
    SET_USER: "SET_USER"
}

const reducer = (state, action) => {
    console.log("type", action)
    switch (action.type) {


        case userActionTypes.SET_USER:
            return {
                ...state,
                user: action.user
            }

        default:
            return state
    }
}

export default reducer

