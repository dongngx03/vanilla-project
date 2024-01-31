import axiosClient from "./axiosClient";

const cartApi = {
    // check sản phẩm có tồn tại trong giỏ hàng 
    checkProductFromCart(userId, productId, status) {
        const url = `cart?userid=${userId}&productid=${productId}&status=${status}`;
        return axiosClient.get(url)
    },
    addCart(body) {
        const url = "cart";
        return axiosClient.post(url, body)
    },
    getCartOfUser(id, status) {
        const url = `cart?userid=${id}&status=${status}`;
        return axiosClient.get(url)
    },
    removeItem(id) {
        const url=`cart/${id}`
        return axiosClient.delete(url);
    }

}

export default cartApi

