

const Nav = () => {
  return /*html */`
    <div class="tw-w-full tw-h-full tw-bg-white">
        <div class="tw-w-full tw-h-auto tw-py-3 text-center tw-border-b">
            <a href="/admin" class="tw-text-2xl tw-font-semibold tw-decoration-0 tw-text-black">My Dashboard</a>
        </div>

        <div class="tw-w-full tw-h-auto tw-px-10 ">
            <div class="tw-w-full tw-h-auto tw-py-2 tw-flex tw-justify-start tw-mt-2 tw-border-b">
                <div class="dropdown">
                    <button class=" dropdown-toggle tw-text-xl" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fa-solid fa-laptop"></i> Product
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="/admin/productlist">Product list</a></li>
                        <li><a class="dropdown-item" href="#">Add product</a></li>
                        <li><a class="dropdown-item" href="#">Product statistics</a></li>
                    </ul>
                </div>  
            </div>  

            <div class="tw-w-full tw-h-auto tw-py-2 tw-flex tw-justify-start tw-mt-2 tw-border-b">
                <div class="dropdown">
                    <button class=" dropdown-toggle tw-text-xl" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fa-solid fa-user"></i> Member
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">Member list</a></li>
                        <li><a class="dropdown-item" href="#">Add member</a></li>
                        <li><a class="dropdown-item" href="#">Member statistics</a></li>
                    </ul>
                </div>  
            </div>  

            <div class="tw-w-full tw-h-auto tw-py-2 tw-flex tw-justify-start tw-mt-2 tw-border-b">
                <div class="dropdown">
                    <button class=" dropdown-toggle tw-text-xl" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fa-solid fa-lock"></i> Admin
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">Admin list</a></li>
                        <li><a class="dropdown-item" href="#">Add admin</a></li>
                    </ul>
                </div>  
            </div>  

            <div class="tw-w-full tw-h-auto tw-py-2 tw-flex tw-justify-start tw-mt-2 tw-border-b">
                <button class="tw-text-xl">
                    <i class="fa-solid fa-right-from-bracket"></i>
                    Logout
                </button>
            </div>  

            <div class="tw-w-full tw-h-auto tw-py-2 tw-flex tw-justify-start tw-mt-2 tw-border-b">
                <a href="/" class="tw-text-xl">
                    Exit
                </a>
            </div>  
        </div>
    </div>
  `
}

export default Nav