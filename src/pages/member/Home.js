import Header from "@/components/member/Header"
import { useEffect, useState } from "@/utilities"
import { getUsers } from "@/services/api";

const Home = () => {
    const [user, setUser] = useState(0);

    useEffect(() => {
        getUsers()
            .then(res => setUser(res))
    }, [])

    console.log(user);
    return /*html */ `
    <div class="container-fluid">
        ${Header()}
        <div>
            
        </div>
    </div>
  `
}

export default Home