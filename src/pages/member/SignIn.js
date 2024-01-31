
import userApi from "@/services/userApi";
import { router, useEffect } from "@/utilities"
import Swal from "sweetalert2"


const SignIn = () => {
    // validate from signin
    const validate = (user) => {
        const errEmail = document.getElementById('err-email');
        const errPw = document.getElementById('err-pw');
        if (user.email === "") {
            errEmail.innerText = "Bạn chưa nhập email"
            return false
        } else {
            errEmail.innerText = ""
        }

        if (user.pw === "") {
            errPw.innerText = "Bạn chưa nhập mật khẩu "
            return false
        } else {
            errPw.innerText = ""
        }

        return true
    }
    // get value from form 
    useEffect(() => {
        const email = document.getElementById('email');
        const pw = document.getElementById('pw');
        const form = document.getElementById('form');

        form.addEventListener('click', (e) => {
            e.preventDefault();

            const user = {
                email: email.value,
                pw: pw.value
            }

            if (validate(user)) {
                userApi.signIn({
                    email: email.value,
                    password: pw.value
                })
                    .then(res => {
                        console.log(res);
                        if (res.status === 200) {
                            Swal.fire({
                                title: 'Thành công',
                                text: 'Đăng nhập thành công ',
                                icon: 'success',
                                confirmButtonText: 'Tiếp tục',
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    sessionStorage.setItem('user', JSON.stringify(res.data))
                                    router.navigate('/')
                                }
                            })
                        }
                    })
                    .catch((res) => {
                        if (res?.response?.status === 400) {

                            Swal.fire({
                                title: 'Lỗi',
                                text: res?.response?.data,
                                icon: 'error',
                                confirmButtonText: 'Đóng',
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    router.navigate('signin')
                                }
                            })
                            
                        }
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
    <div class="tw-bg-[#FAFAFA] tw-w-full  tw-h-screen d-flex justify-content-center align-items-center tw-px-10 tw-gap-16 tw-flex-row-reverse">
        <div id="form-register" class="tw-w-1/3 tw-h-auto tw-bg-gray-50 tw-p-3 tw-rounded-lg tw-shadow-lg tw-flex tw-flex-col tw-gap-4">
            <span class="tw-text-center tw-font-semibold tw-text-2xl">Đăng nhập</span>
            <form id="form">
                <div class="mb-3">
                    <label class="tw-font-semibold">Email</label>
                    <input  type="text" class="form-control" id="email"/>
                    <span class="tw-text-xs tw-text-red-700" id="err-email"></span>
                </div>
                <div class="mb-3">
                    <label class="tw-font-semibold" >password</label>
                    <input  type="password" class="form-control" id="pw"/>
                    <span class="tw-text-xs tw-text-red-700" id="err-pw"></span>
                </div>
                <div class="mb-3 d-flex flex-column tw-gap-3">
                    <span >Bạn chưa có tài khoản? </span>
                    <a class="tw-font-semibold" href="/signup">Đăng ký</a>
                    <button class="btn btn-dark" type="submit">
                        Đăng nhập
                    </button>
                </div>
            </form>
        </div>

        <div id="img-register" class="tw-w-1/2 tw-h-auto ">
            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/s9-case-unselect-gallery-1-202309?wid=2560&hei=1640&fmt=p-jpg&qlt=80&.v=1693525062134" />
        <div>
    </div>
  `
}

export default SignIn