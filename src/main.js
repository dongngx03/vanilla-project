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
import AddProduct from "./pages/admin/AddProduct";
import Detail from "./pages/member/Detail";

//gọi root app
const app = document.getElementById('app');


// member
router.on('/', () => render(Home, app))
router.on('/signin', () => render(SignIn, app))
router.on('/signup', () => render(SignUp, app))
router.on('/detail/:id', (data) => render(() => Detail(data), app))

// admin
router.on('/admin/addproduct', () => render(AddProduct, app))
// 404
router.notFound(() => render(NotFound, app))
router.resolve();

export default app







