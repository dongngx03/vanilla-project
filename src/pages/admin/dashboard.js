import Nav from "@/components/admin/Nav"


const dashboard = () => {
    return /*html */ `
        <div class="tw-w-full tw-h-screen tw-flex tw-justify-center">
            <div class="tw-w-1/4 tw-h-full tw-border-r ">
                ${Nav()}
            </div>

            <div class="tw-w-3/4 tw-h-full tw-px-10 tw-py-9">
                <span class="tw-font-extrabold tw-text-2xl">Hướng dẫn sử dụng Dashboard </span>
                <div class="tw-mt-5 ">
                    <span class="tw-text-xl tw-font-semibold">Product</span>
                    <ul>
                        <li>
                            <span> - Thêm, sửa, xóa sản phẩm </span>
                        </li>
                        <li>
                            <span> - Thống kê về sản phẩm </span>
                        </li>
                    </ul>
                </div>

                <div class="tw-mt-5 ">
                    <span class="tw-text-xl tw-font-semibold">Member</span>
                    <ul>
                        <li>
                            <span> - Thêm, xóa người dùng </span>
                        </li>
                        <li>
                            <span> - Thống kê về người dùng </span>
                        </li>
                    </ul>
                </div>

                <div class="tw-mt-5 ">
                    <span class="tw-text-xl tw-font-semibold">Admin</span>
                    <ul>
                        <li>
                            <span> - Thêm, admin</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
  `
}

export default dashboard