import Nav from "@/components/admin/Nav"
import productApi from "@/services/productApi";
import { useEffect, useState, formatNumberWithCommas, router } from "@/utilities"
import Swal from "sweetalert2";

const ProductList = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    productApi.getAll()
      .then((res) => setProductList(res.data))
  }, [])

  useEffect(() => {
    const removeBtn = document.querySelectorAll('.remove');
    removeBtn.forEach((removeItem) => {
      removeItem.addEventListener('click', async (e) => {
        //console.log(e.currentTarget.dataset?.id);
        const id = e.currentTarget.dataset?.id;
        Swal.fire({
          title: 'Xác nhận',
          text: "Bạn có chắc muốn xóa sản phẩm này ",
          icon: 'question',
          confirmButtonText: 'xác nhận',
        }).then((result) => {
          if (result.isConfirmed) {
            productApi.remove(id)
              .then(() => {
                router.navigate('/admin/productlist')
              })

          }
        })

      })
    })
  })

  console.log(productList);

  return /*html */` 
    <div class="tw-w-full tw-h-screen tw-flex ">
        <div class="tw-w-1/4 tw-h-full tw-border-r">
            ${Nav()}
        </div>

        <div class="tw-w-3/4 tw-h-full ">
          <div class="tw-w-full tw-p-5 ">
            <span class="tw-text-xl tw-font-semibold">Danh sách sản phẩm </span>
          </div>
          <div class="tw-w-full tw-h-full tw-overflow-auto">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">stt</th>
                  <th scope="col">Tên sản phẩm</th>
                  <th scope="col">Giá</th>
                  <th scope="col">Ảnh </th>
                  <th scope="col"> Thông tin chi tiết </th>
                  <th scope="col"> chức năng  </th>
                </tr>
              </thead>
              <tbody>
                ${productList?.map((product, index) => {
    return /*html */`
                      <tr>
                        <td>${index + 1}</td>
                        <td>${product?.name}</td>
                        <td>${formatNumberWithCommas(product?.price)} đ</td>
                        <td>
                          <img class="tw-w-[100px]" src="${product?.img}" />
                        </td> 
                        <td>
                          <a href="/detail/${product?.id}">Xem thêm</a>
                        </td>
                        <td class=" tw-justify-center align-items-center">
                          <a href="/admin/updateproduct/${product?.id}" class="btn btn-primary">Sửa</a>
                          <button data-id="${product?.id}" class="tw-text-red-500 remove">Xóa</button>
                        </td>
                      </tr>
                    `
  }).join("")
    }
              </tbody>
            </table>
          </div>
        </div>
    </div>
  `
}

export default ProductList