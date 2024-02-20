import Nav from "@/components/admin/Nav"
import productApi from "@/services/productApi";
import { router, useEffect, useState } from "@/utilities"
import Swal from "sweetalert2";


const AddProduct = () => {

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
        if(informationProduct?.img === "") {
            error.innerText = "Vui lòng nhập link ảnh sản phẩm "
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
        // người dùng nhập ảnh vào để thử 
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
        const btnSubmit = document.querySelector('#submit-add');
        const imgtest = document.getElementById('imgtest')

        img.addEventListener('change', () => {
            imgtest.src = img.value
        })

        // thêm sản phẩm 
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
                await productApi.create(newProduct)
                    .then(res => {
                        Swal.fire({
                            title: 'Thành công',
                            text: "Thêm sản phẩm thành công",
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

    return  /*html */`
    <div class="tw-w-full tw-h-screen tw-flex ">
        <div class="tw-w-1/4 tw-h-full tw-border-r">
            ${Nav()}
        </div>

        <div class="tw-w-3/4 tw-h-full ">
          <div class="tw-w-full tw-p-5 ">
            <span class="tw-text-xl tw-font-semibold">Thêm mới sản phẩm </span>
          </div>
          <div class="tw-w-full tw-h-full tw-overflow-auto tw-p-6 ">
            <form class="tw-w-full tw-h-auto">
                <div class="mb-3">
                    <label>Name</label>
                    <input id="name" class="form-control" type="text"  />
                </div>
                <div class="mb-3">
                    <label>Desc</label>
                    <input id="desc" class="form-control" type="text"  />
                </div>
                <div class="mb-3">
                    <label>Price</label>
                    <input id="price" class="form-control" type="number"  />
                </div>
                <div class="mb-3">
                    <label>Type</label>
                    <input id="type" class="form-control" type="text" />
                </div>
                <div class="mb-3">
                    <label>Img</label>
                    <img id="imgtest" src="" class="tw-w-[100px]"/>
                    <input id="img" class="form-control" type="text" placeholder="hãy điền link ảnh vào đây, ở đây chúng tôi không hỗ trở tải ảnh lên trình duyệt"/>
                </div>
                <div class="mb-3">
                    <label>screen</label>
                    <input id="screen" class="form-control" type="text" />
                </div>
                <div class="mb-3">
                    <label>cameraBefore</label>
                    <input id="cameraBefore" class="form-control" type="text" />
                </div>
                <div class="mb-3">
                    <label>CameraSelfie</label>
                    <input id="cameraSelfie" class="form-control" type="text" />
                </div>
                <div class="mb-3">
                    <label>RAM</label>
                    <input id="RAM" class="form-control" type="text" />
                </div>
                <div class="mb-3">
                    <label>Memory</label>
                    <input id="Memory" class="form-control" type="text" />
                </div>
                <div class="mb-3">
                    <label>CPU</label>
                    <input id="CPU" class="form-control" type="text" />
                </div>
                <div class="mb-3">
                    <label>battery</label>
                    <input id="battery" class="form-control" type="text" />
                </div>
                <div class="mb-3">
                    <button type="submit" id="submit-add" class="btn btn-primary">Add</button>
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

export default AddProduct