import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { render, router } from "./utilities/index";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/member/Home";
import SignIn from "./pages/member/SignIn";
import SignUp from "./pages/member/SignUp";
import Detail from "./pages/member/Detail";
import Iphone from "./pages/member/Iphone";
import MacBook from "./pages/member/MacBook";
import Cart from "./pages/member/Cart";
import dashboard from "./pages/admin/dashboard";
import ProductList from "./pages/admin/product/ProductList";
import UpdateProduct from "./pages/admin/product/UpdateProduct";
import AddProduct from "./pages/admin/product/AddProduct";

const app = document.getElementById('app');

// get permission
const permission
    = JSON.parse(sessionStorage.getItem('user'))
        ?.user?.permission;

// common router
const commonRoutes = () => {
    return router
        .on('/', () => render(Home, app))
        .on('/signin', () => render(SignIn, app))
        .on('/signup', () => render(SignUp, app))
        .on('/detail/:id', (data) => render(() => Detail(data), app))
        .on('/iphone', () => render(Iphone, app))
        .on('/macbook', () => render(MacBook, app))

}

// member, admin, other
if (permission === "Member") {
    commonRoutes()
        .on('/cart', () => render(Cart, app))
        .notFound(() => render(NotFound, app))
        .resolve()
}
else if (permission === "Admin") {
    commonRoutes()
        .on('/admin', () => render(dashboard, app))
        .on('/admin/productlist', () => render(ProductList, app))
        .on('/admin/updateproduct/:id', (data) => render(() => UpdateProduct(data), app))
        .on('/admin/addproduct', () => render(AddProduct, app))
        .notFound(() => render(NotFound, app))
        .resolve()
}
else {
    commonRoutes()
        .notFound(() => render(NotFound, app))
        .resolve()
}


// member








