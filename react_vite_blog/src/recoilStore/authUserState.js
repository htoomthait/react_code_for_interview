import { atom } from "recoil";

const authUserState = atom({
    key: 'authUserState',
    default: {
        id : 0,
        email: '',
        accessToken: '',
        refreshToken: '',
        loginStatus: false,
    }
})

export default authUserState;