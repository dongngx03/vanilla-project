import axiosClient from "./axiosClient";
const userApi = {
    signIn(user) {
        const url = "signin";
        return axiosClient.post(url, user)
    },
    signUp(user) {
        const url = "signup";
        return axiosClient.post(url, user)
    }
}

export default userApi