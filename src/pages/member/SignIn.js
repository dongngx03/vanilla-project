import { getOneUser } from "@/services/api"
import { router, useEffect } from "@/utilities"
import Swal from "sweetalert2"


const SignIn = () => {

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
                getOneUser(user.email)
                    .then(res => {
                        if (res) {
                            if (res[0].pw === user.pw) {
                                Swal.fire({
                                    title: 'Thành công',
                                    text: 'Đăng nhập thành công',
                                    icon: 'success',
                                    confirmButtonText: 'Tiếp tục',
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        localStorage.setItem('userId', res[0].id);
                                        localStorage.setItem('userName', res[0].name);
                                        router.navigate('/')
                                    }
                                });

                            } else {
                                Swal.fire({
                                    title: 'Lỗi',
                                    text: 'Sai mật khẩu, vui lòng thử lại ',
                                    icon: 'error',
                                    confirmButtonText: 'Đóng',
                                });
                            }
                        } else {
                            Swal.fire({
                                title: 'Lỗi',
                                text: 'Email không tồn tại, vui lòng thử lại',
                                icon: 'error',
                                confirmButtonText: 'Đóng',
                            });
                        }
                    })
            }


        })

    })
    return /*html */ `
    <div class="tw-w-full tw-h-screen d-flex justify-content-center align-items-center">
        <div class="tw-w-1/2 tw-h-auto tw-bg-gray-50 tw-p-3 tw-rounded-lg tw-shadow-lg">
            <h3 class="text-center">Đăng nhập</h3>
            <form id="form">
                <div class="mb-3">
                    <label>Email</label>
                    <input  type="text" class="form-control" id="email"/>
                    <span class="tw-text-xs tw-text-red-700" id="err-email"></span>
                </div>
                <div class="mb-3">
                    <label>password</label>
                    <input  type="password" class="form-control" id="pw"/>
                    <span class="tw-text-xs tw-text-red-700" id="err-pw"></span>
                </div>
                <div class="mb-3 d-flex flex-column">
                    <span>Bạn chưa có tài khoản? </span>
                    <a href="/signup">Đăng ký</a>
                    <button class="btn btn-primary" type="submit">
                        Đăng nhập
                    </button>
                </div>
            </form>
        </div>
    </div>
  `
}

export default SignIn