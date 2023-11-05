// thư viện navigo 
import Navigo from "navigo";
const router = new Navigo('/', { linksSelector: "a", hash:true});
// hàm render ra màn hình 
const render = (content, target) => {
    target.innerHTML = content();   
}


export { render, router };