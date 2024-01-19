
import userApi from "@/services/userApi";
import { useEffect, useState, router } from "@/utilities"
import Swal from "sweetalert2"

const SignUp = () => {
    // validate signUp
    const validation = (userInfor) => {
        const errName = document.getElementById('err-name');
        const errPw = document.getElementById('err-pw');
        const errCpw = document.getElementById('err-cpw');
        if (userInfor.name == "") {
            errName.innerText = "Bạn chưa nhập trường này "
            return false
        } else {
            errName.innerText = ""
        }

        if (userInfor.password == '') {
            errPw.innerText = "Bạn chưa nhập trường này "
            return false
        }
        else if (Array.from(userInfor.password).length <= 8) {
            errPw.innerText = "Mật khẩu phải nhiều hơn 8 ký tự "
            return false
        }
        else {
            errPw.innerText = ""
        }

        if (userInfor.cpw == '') {
            errCpw.innerText = "Bạn chưa nhập trường này "
            return false

        } else if (userInfor.cpw !== userInfor.password) {
            errCpw.innerText = " Mật khẩu không trùng khớp "
            return false
        }
        else {
            errCpw.innerText = ""
        }

        return true

    }
    // get value
    useEffect(() => {
        const name = document.getElementById('input-name');
        const email = document.getElementById('input-email');
        const pw = document.getElementById('input-pw');
        const cpw = document.getElementById('input-cpw');
        const form = document.getElementById('form');

        form.addEventListener('click', (e) => {
            e.preventDefault();
            const user = {
                name: name.value,
                email: email.value,
                password: pw.value,
                cpw: cpw.value,
            }

            if (validation(user)) {
                userApi.signUp({
                    email: email.value,
                    name: name.value,
                    password: pw.value,
                    permission: "Member"
                })
                    .then(res => {
                        if (res.status === 201) {
                            Swal.fire({
                                title: 'Thành công',
                                text: 'Tạo tài khoản thành công',
                                icon: 'success',
                                confirmButtonText: 'Tiếp tục',
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    router.navigate('signin')
                                }
                            })
                        }
                    })
                    .catch(() => {
                        Swal.fire({
                            title: 'Lỗi',
                            text: 'Email đã tồn tại, vui lòng chọn email khác',
                            icon: 'error',
                            confirmButtonText: 'Đóng',
                        }).then((result) => {
                            if (result.isConfirmed) {
                                router.navigate('signup')
                            }
                        });
                    })
            }

        })
        // UI animation
        const formRegister = document.getElementById('form-register');
        const imgRegister = document.getElementById('img-register');
        setTimeout(() => {
            formRegister.style.transform = "translateX(0px)"
            formRegister.style.transition = "0.8s all"
            formRegister.style.opacity = '1';

            imgRegister.style.transform = "translateX(0px)"
            imgRegister.style.transition = "0.8s all"
            imgRegister.style.opacity = '1'
        }, 500)


    })


    return /*html */ `
    <div class="tw-w-full tw-h-screen d-flex justify-content-center align-items-center tw-px-10 tw-gap-16">
        <div id="form-register" class="tw-w-1/3 tw-h-auto tw-bg-gray-50 tw-p-3 tw-rounded-lg tw-shadow-lg tw-flex tw-flex-col tw-gap-4">
        <span class="tw-text-center tw-font-semibold tw-text-2xl">Đăng Ký</span>
            <form action="" id="form">
                <div class="mb-3">
                    <label class="tw-font-semibold">Name</label>
                    <input 
                        type="text"
                        class="form-control"
                        id="input-name"
                    />
                    <span class="tw-text-xs tw-text-red-700" id="err-name"></span>
                </div>
                <div class="mb-3">
                    <label class="tw-font-semibold">Email</label>
                    <input
                        type="email"
                        class="form-control"
                        id="input-email"
                        
                    />
                    <span class="tw-text-xs tw-text-red-700" id="err-email"></span>
                </div>
                <div class="mb-3">
                    <label class="tw-font-semibold">Password</label>
                    <input  
                        type="password" 
                        class="form-control"
                        id="input-pw"
                    />
                    <span class="tw-text-xs tw-text-red-700" id="err-pw"></span>
                </div>
                <div class="mb-3">
                    <label class="tw-font-semibold" >Confirm</label>
                    <input 
                        type="password" 
                        class="form-control"
                        id="input-cpw"
                    />
                    <span class="tw-text-xs tw-text-red-700" id="err-cpw"></span>
                </div>
                <div class="mb-3 d-flex flex-column tw-gap-3">
                    <span>Bạn đã có tài khoản? </span>
                    <a class="tw-font-semibold" href="/signin">Đăng nhập</a>
                    <button class="btn btn-dark" type="submit">
                        Đăng ký
                    </button>
                </div>
            </form>
        </div>

        <div id="img-register" class="tw-w-1/2 tw-h-auto ">
            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MW4W3ref_AV1?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1702935181068" />
        <div>
    </div>
  `
}

export default SignUp