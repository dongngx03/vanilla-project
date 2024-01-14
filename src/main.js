// boostrap 
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

/* Bất kỳ các import khác mà bạn có thể muốn thêm */

// function, object, data
import { render, router } from "./utilities/index";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/member/Home";
import SignIn from "./pages/member/SignIn";
import SignUp from "./pages/member/SignUp";

//gọi root app
const app = document.getElementById('app');


// member
router.on('/', () => render(Home, app))
router.on('/signin', () => render(SignIn, app))
router.on('/signup', () => render(SignUp, app))
// 404
router.notFound(() => render( NotFound, app))
router.resolve();







