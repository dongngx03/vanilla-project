import axios from "axios";

const api_base = "http://localhost:3000"


const signUp = async (name, email, pw) => {
    try {

        const check = await axios.get(`${api_base}/users?email=${email}`);
        console.log(check);
        if (check.data.length > 0) {
            return false
        }

        await axios.post(
            `${api_base}/users`,
            {
                name,
                email,
                pw
            }
        )
        return true
    } catch (error) {
        console.log(error);
    }
}

const getUsers = async () => {
    try {
        const res = await axios.get(`${api_base}/users`);

        return res.data
    } catch (error) {
        console.log(error);
    }
}

const getOneUser = async (email) => {
    try {
        // tìm email 
        const check = await fetch(`${api_base}/users?email=${email}`);

        const data = await check.json();
        if (data.length >0) {
            return data
        } else {
            return false
        }

    } catch (error) {
        console.log(error);
    }
}

export { signUp, getUsers, getOneUser }