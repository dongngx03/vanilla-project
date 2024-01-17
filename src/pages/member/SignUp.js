
import { signUp } from "@/services/api"
import { useEffect, useState, router } from "@/utilities"
import Swal from "sweetalert2"

const SignUp = () => {

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

        if (userInfor.pw == '') {
            errPw.innerText = "Bạn chưa nhập trường này "
            return false
        }

        else if (Array.from(userInfor.pw).length <= 8) {
            errPw.innerText = "Mật khẩu phải nhiều hơn 8 ký tự "
            return false
        }
        else {
            errPw.innerText = ""
        }

        if (userInfor.cpw == '') {
            errCpw.innerText = "Bạn chưa nhập trường này "
            return false

        } else if (userInfor.cpw !== userInfor.pw) {
            errCpw.innerText = " Mật khẩu không trùng khớp "
            return false
        }
        else {
            errCpw.innerText = ""
        }

        return true

    }

    useEffect(() => {
        const name = document.getElementById('input-name');
        const email = document.getElementById('input-email');
        const pw = document.getElementById('input-pw');
        const cpw = document.getElementById('input-cpw');
        const form = document.getElementById('form');

        form.addEventListener('click', (e) => {
            e.preventDefault();
            const userInfor = {
                name: name.value,
                email: email.value,
                pw: pw.value,
                cpw: cpw.value
            }

            if (validation(userInfor)) {
                signUp(name.value, email.value, pw.value)
                    .then(res => {
                        if (res == true) {
                            Swal.fire({
                                title: 'Thành công',
                                text: 'Đăng ký thành công, tiếp tục để đăng nhập',
                                icon: 'success',
                                confirmButtonText: 'Tiếp tục',
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    router.navigate('signin')
                                }
                            });

                        } else {
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

                        }
                    })
            }

        })

    })


    return /*html */ `
    <div class="tw-w-full tw-h-screen d-flex justify-content-center align-items-center">
        <div class="tw-w-1/2 tw-h-auto tw-bg-gray-50 tw-p-3 tw-rounded-lg tw-shadow-lg">
            <h3 class="text-center">Đăng ký</h3>
            <form action="" id="form">
                <div class="mb-3">
                    <label>Name</label>
                    <input 
                        type="text"
                        class="form-control"
                        id="input-name"
                    />
                    <span class="tw-text-xs tw-text-red-700" id="err-name"></span>
                </div>
                <div class="mb-3">
                    <label>Email</label>
                    <input
                        type="email"
                        class="form-control"
                        id="input-email"
                        
                    />
                    <span class="tw-text-xs tw-text-red-700" id="err-email"></span>
                </div>
                <div class="mb-3">
                    <label>Password</label>
                    <input  
                        type="password" 
                        class="form-control"
                        id="input-pw"
                    />
                    <span class="tw-text-xs tw-text-red-700" id="err-pw"></span>
                </div>
                <div class="mb-3">
                    <label>Confirm</label>
                    <input 
                        type="password" 
                        class="form-control"
                        id="input-cpw"
                    />
                    <span class="tw-text-xs tw-text-red-700" id="err-cpw"></span>
                </div>
                <div class="mb-3 d-flex flex-column">
                    <span>Bạn đã có tài khoản? </span>
                    <a href="/signin">Đăng nhập</a>
                    <button class="btn btn-primary" type="submit">
                        Đăng ký
                    </button>
                </div>
            </form>
        </div>
    </div>
  `
}

export default SignUp