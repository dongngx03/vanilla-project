import axiosClient from "./axiosClient"
const productApi = {
    getAll() {
        const url = 'product';
        return axiosClient.get(url);
    },
    getDetail(id) {
        const url = `product/${id}`;
        return axiosClient.get(url);
    },
    getType(type) {
        const url = `product?type=${type}`;
        return axiosClient.get(url);
    },
    create(product) {
        const url = `product`
        return axiosClient.post(url,product)
    }
}

export default productApi