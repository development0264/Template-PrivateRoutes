import { LOGIN_REQUEST, LOGOUT_REQUEST, USER_NAME_REQUEST } from "./Types"

export const loginHandler = (data) => {
    return { LOGIN_REQUEST, payload: data }
}
export const logoutHandler = () => {
    return { LOGOUT_REQUEST }
}
export const requestUserName = (data) => {
    console.log("action->", data)
    return { type: USER_NAME_REQUEST, payload: data }
}