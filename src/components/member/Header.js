
const Header = () => {
    return /*html */`
        <Header class="tw-w-full tw-h-[4rem] tw-bg-gray-200">
            <div class="tw-w-full tw-h-full d-flex">
                <div class="tw-w-1/2 tw-h-full d-flex justify-content-center align-items-center gap-1">
                    <input type="text" class="tw-w-2/3 tw-h-1/2 tw-rounded-lg tw-shadow-lg"/>
                    <button class="tw-bg-white tw-rounded-lg tw-shadow-lg tw-w-[4rem] tw-h-1/2">Search</button>
                </div>

                <div class="tw-w-1/2 tw-h-full d-flex justify-content-end tw-pr-5 align-items-center tw-gap-4">
                    <a href="" class="tw-bg-white tw-rounded-lg tw-shadow-lg tw-w-[4rem] tw-h-1/2 text-center text-decoration-none tw-text-black">User</a>
                    <a href="" class="tw-bg-white tw-rounded-lg tw-shadow-lg tw-w-[4rem] tw-h-1/2 text-center text-decoration-none tw-text-black">Cart</a>
                    <a href="" class="tw-bg-white tw-rounded-lg tw-shadow-lg tw-w-[4rem] tw-h-1/2 text-center text-decoration-none tw-text-black">LogOut</a>
                </div>
            </div>
        </Header>
  `
}

export default Header