import Nav from "@/components/admin/Nav"
import productApi from "@/services/productApi";
import { router, useEffect, useState } from "@/utilities"
import Swal from "sweetalert2";


const UpdateProduct = ({ data }) => {
    const [product, setProduct] = useState('');

    const validation = (informationProduct, elementError) => {
        // bắn lỗi 
        const error = document.querySelector(elementError);

        if (informationProduct?.name === "") {
            error.innerText = "Vui lòng nhập tên sản phẩm "
            return false;
        }

        if(informationProduct?.desc === "") {
            error.innerText = "Vui lòng nhập mô tả sản phẩm "
            return false;
        }
        if(informationProduct?.price === "") {
            error.innerText = "Vui lòng nhập giá sản phẩm "
            return false;
        }
        if(informationProduct?.type === "") {
            error.innerText = "Vui lòng nhập loại sản phẩm  "
            return false;
        }
        if(informationProduct?.technical?.screen === "") {
            error.innerText = "Vui lòng nhập kích thước màn hình"
            return false;
        }
        if(informationProduct?.technical?.cameraBefore === "") {
            error.innerText = "Vui lòng nhập thống số camera trước "
            return false;
        }
        if(informationProduct?.technical?.CameraSelfie === "") {
            error.innerText = "Vui lòng nhập thống số cameraSelfie "
            return false;
        }
        if(informationProduct?.technical?.RAM === "") {
            error.innerText = "Vui lòng nhập thống số Ram "
            return false;
        }
        if(informationProduct?.technical?.Memory === "") {
            error.innerText = "Vui lòng nhập thống số bộ nhớ  "
            return false;
        }
        if(informationProduct?.technical?.CPU === "") {
            error.innerText = "Vui lòng nhập thống số CPU "
            return false;
        }
        if(informationProduct?.technical?.battery === "") {
            error.innerText = "Vui lòng nhập thống số pin "
            return false;
        }

        return true
    }

    useEffect(() => {
        productApi.getDetail(data?.id)
            .then(res => setProduct(res?.data))
    }, [])

    useEffect(() => {
        const img = document.querySelector('#img');
        const name = document.querySelector('#name');
        const desc = document.querySelector('#desc');
        const price = document.querySelector('#price');
        const type = document.querySelector('#type');
        const screen = document.querySelector('#screen');
        const cameraBefore = document.querySelector('#cameraBefore');
        const CameraSelfie = document.querySelector('#cameraSelfie');
        const RAM = document.querySelector('#RAM');
        const Memory = document.querySelector('#Memory');
        const CPU = document.querySelector('#CPU');
        const battery = document.querySelector('#battery');
        const btnSubmit = document.querySelector('#submit-update');
        const imgtest = document.getElementById('imgtest')

        img.addEventListener('change', () => {
            imgtest.src = img.value
        })

        // cập nhật sản phẩm 
        btnSubmit.addEventListener('click', async (e) => {
            e.preventDefault();
            const newProduct = {
                name : name.value,
                desc : desc.value,
                price : price.value,
                type : type.value,
                img : img.value,
                technical : {
                    screen : screen.value,
                    cameraBefore : cameraBefore.value,
                    CameraSelfie : CameraSelfie.value,
                    RAM : RAM.value,
                    Memory : Memory.value,
                    CPU : CPU.value,
                    battery : battery.value
                }
            }

            if(validation(newProduct, '#error-span')) {
                await productApi.update(newProduct, data?.id)
                    .then(res => {
                        Swal.fire({
                            title: 'Thành công',
                            text: "Cập nhật sản phẩm thành công ",
                            icon: 'success',
                            confirmButtonText: 'Đóng',
                        }).then((result) => {
                            if (result.isConfirmed) {
                                router.navigate('/admin/productlist')
                            }
                        })
                    })
            }
        })

        
    })

    console.log(product);
    return  /*html */`
    <div class="tw-w-full tw-h-screen tw-flex ">
        <div class="tw-w-1/4 tw-h-full tw-border-r">
            ${Nav()}
        </div>

        <div class="tw-w-3/4 tw-h-full ">
          <div class="tw-w-full tw-p-5 ">
            <span class="tw-text-xl tw-font-semibold">Chỉnh sửa sản phẩm mã số ${data?.id}</span>
          </div>
          <div class="tw-w-full tw-h-full tw-overflow-auto tw-p-6 ">
            <form class="tw-w-full tw-h-auto">
                <div class="mb-3">
                    <label>Name</label>
                    <input id="name" class="form-control" type="text" value="${product?.name}" />
                </div>
                <div class="mb-3">
                    <label>Desc</label>
                    <input id="desc" class="form-control" type="text" value="${product?.desc}" />
                </div>
                <div class="mb-3">
                    <label>Price</label>
                    <input id="price" class="form-control" type="number" value="${product?.price}" />
                </div>
                <div class="mb-3">
                    <label>Type</label>
                    <input id="type" class="form-control" type="text" value="${product?.type}"/>
                </div>
                <div class="mb-3">
                    <label>Img</label>
                    <img id="imgtest" src="${product?.img}" class="tw-w-[100px]"/>
                    <input id="img" class="form-control" type="text" placeholder="hãy điền link ảnh vào đây, ở đây chúng tôi không hỗ trở tải ảnh lên trình duyệt" value="${product?.img}"/>
                </div>
                <div class="mb-3">
                    <label>screen</label>
                    <input id="screen" class="form-control" type="text" value="${product?.technical?.screen}"/>
                </div>
                <div class="mb-3">
                    <label>cameraBefore</label>
                    <input id="cameraBefore" class="form-control" type="text" value="${product?.technical?.cameraBefore}"/>
                </div>
                <div class="mb-3">
                    <label>CameraSelfie</label>
                    <input id="cameraSelfie" class="form-control" type="text" value="${product?.technical?.CameraSelfie}"/>
                </div>
                <div class="mb-3">
                    <label>RAM</label>
                    <input id="RAM" class="form-control" type="text" value="${product?.technical?.RAM}"/>
                </div>
                <div class="mb-3">
                    <label>Memory</label>
                    <input id="Memory" class="form-control" type="text" value="${product?.technical?.Memory}"/>
                </div>
                <div class="mb-3">
                    <label>CPU</label>
                    <input id="CPU" class="form-control" type="text" value="${product?.technical?.CPU}"/>
                </div>
                <div class="mb-3">
                    <label>battery</label>
                    <input id="battery" class="form-control" type="text" value="${product?.technical?.battery}"/>
                </div>
                <div class="mb-3">
                    <button type="submit" id="submit-update" class="btn btn-primary">Update</button>
                </div>
                <div>
                    <span id="error-span" class="tw-text-red-700"></span>
                </div>
            </form>
          </div>
        </div>
    </div>
  `
}

export default UpdateProduct