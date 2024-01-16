const api_base = "http://localhost:3000"

const getAllProduct = async () => {
    try {
        const res = await fetch(`${api_base}/product`);

        const data = await res.json();

        return data;
    } catch (error) {
        console.log(error);
    }
}

const getDetail = async (id) => {
    try {
        const res = await fetch(`${api_base}/product/${id}`);

        const data = await res.json();

        return data

    } catch (error) {
        console.log(error);
    }
}

function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

export { getAllProduct, getDetail, formatNumberWithCommas }