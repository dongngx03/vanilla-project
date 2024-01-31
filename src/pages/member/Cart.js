import Header from "@/components/member/Header"
import cartApi from "@/services/cartApi";
import { formatNumberWithCommas, router, useEffect, useState } from "@/utilities"
import Swal from "sweetalert2";


const Cart = () => {
    const [cart, setCart] = useState([]);
    const userId = JSON.parse(sessionStorage.getItem('user'));

    useEffect(() => {
        cartApi.getCartOfUser(userId?.user?.id, 1)
            .then((res) => setCart(res.data))
    }, [])

    useEffect(() => {
        const remove = document.querySelectorAll('.delete');
        remove.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const cartId = e.currentTarget.dataset.id;
                Swal.fire({
                    title: 'Chắc chắn',
                    text: 'Bạn có muốn xóa sản phẩm này khỏi giỏ hàng chứ',
                    icon: 'question',
                    cancelButtonText: "Thoát",
                    confirmButtonText: 'Đồng ý',
                }).then((result) => {
                    if (result.isConfirmed) {
                        cartApi.removeItem(cartId)
                            .then(() => {
                                cartApi.getCartOfUser(userId?.user?.id, 1)
                                    .then((res) => setCart(res.data))
                            })
                    }
                })
            })
        })


    })
    return /*html */`
    ${Header()}
    <div class="tw-w-full tw-h-screen tw-px-10 tw-overflow-auto scroll">
        ${
            cart.length === 0 ? `<div class="tw-w-full tw-h-1/2 tw-flex tw-flex-col tw-gap-5 tw-justify-center align-items-center"><img class="tw-w-[7rem]" src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/orderlist/5fafbb923393b712b964.png"><span class="text-danger tw-font-semibold tw-text-xl">Chưa có sản phẩm nào cả </span></div>` : ""
        }
        ${cart?.map(data => {
        return /*html */`
                <div class="tw-w-full tw-h-auto tw-flex tw-border-b tw-px-10 tw-py-4">
                    <div class="tw-w-1/6 tw-h-auto">
                        <img src="${data?.product?.img}" />
                    </div>
        
                    <div class="tw-w-5/6 tw-h-auto tw-flex tw-justify-evenly align-items-center">
                        <div class="tw-w-1/4 tw-flex tw-flex-col tw-gap-3 tw-justify-center">
                            <span class="tw-text-2xl tw-font-semibold">${data?.product?.name}</span>
                            <a class="tw-text-lg" href="/detail/${data?.productid}">Hiển thị chi tiết sản phẩm</a>
                        </div>
                        <div class="tw-w-1/4 tw-flex tw-justify-center">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Quantity</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
        
                        <div class="tw-w-1/4 tw-flex tw-flex-col tw-gap-3 tw-justify-center align-items-center">
                            <span class="tw-text-2xl tw-font-semibold">${formatNumberWithCommas(data?.product?.price)}đ</span>
                            <button id="" data-id="${data?.id}" class="delete tw-text-lg tw-text-red-500" href="">Xóa</button>
                        </div>
                        <div class="tw-w-1/4 tw-flex tw-justify-center">
                            <button id="buy" data-id="${data?.productid}" class="tw-bg-[#0077ED] tw-text-white tw-w-[4rem] tw-h-[2.3rem] tw-font-semibold tw-rounded-full tw-shadow-md">Buy</button>
                        </div>
                    </div>
                </div>
                `
    }).join("")
        }
    </div>
  `
}

export default Cart