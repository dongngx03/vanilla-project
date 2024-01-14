

const SignIn = () => {
  return /*html */ `
    <div class="tw-w-full tw-h-screen d-flex justify-content-center align-items-center">
        <div class="tw-w-1/2 tw-h-auto tw-bg-gray-50 tw-p-3 tw-rounded-lg tw-shadow-lg">
            <h3 class="text-center">Đăng nhập</h3>
            <form>
                <div class="mb-3">
                    <label>Email</label>
                    <input  type="text" class="form-control"/>
                </div>
                <div class="mb-3">
                    <label>password</label>
                    <input  type="password" class="form-control"/>
                </div>
                <div class="mb-3">
                    <button class="btn btn-primary">
                        Đăng nhập
                    </button>
                </div>
            </form>
        </div>
    </div>
  `
}

export default SignIn