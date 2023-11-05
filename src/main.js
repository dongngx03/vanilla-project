// boostrap 
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
// components
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
// function, object, data
import { render, router } from "./utilities/index";

// pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";



//gọi root app
const app = document.getElementById('app');
const header = document.getElementById('header');
const footer = document.getElementById('footer');


render(Header, header);// header
render(Footer, footer);// 



// đăng ký router 
router.on('/', () => render(Home, app))
router.on('/about', () => render(About, app))
router.resolve();







