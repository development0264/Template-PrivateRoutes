import { LOGIN_REQUEST, LOGOUT_REQUEST } from "./Types"

export const loginHandler = (data) => {
    return { LOGIN_REQUEST, payload: data }
}
export const logoutHandler = () => {
    return { LOGOUT_REQUEST }
}