import Nav from "@/components/admin/Nav"

const ProductList = () => {
  return /*html */` 
    <div class="tw-w-full tw-h-screen tw-flex ">
        <div class="tw-w-1/4 tw-h-full tw-border-r">
            ${Nav()}
        </div>

        <div class="tw-w-3/4 tw-h-full ">
            <h1>Đây là trang danh sách sản phẩm  </h1>
        </div>
    </div>
  `
}

export default ProductList