
const Header = () => {
    return /*html */`
        <Header class="tw-w-full tw-h-[50px] tw-bg-[#F5F5F7] d-flex tw-justify-between">
            <div class="tw-h-full d-flex justify-content-center align-items-center tw-pl-28 tw-gap-9">
                <a href="/" data-navigo class="text-dark"><i class="fa-brands fa-apple fa-lg"></i></a>
                <a href="/signin" data-navigo  class="text-decoration-none tw-text-black">Iphone</a>
                <a href="/signup" data-navigo class="text-decoration-none tw-text-black">Mac</a>
                <a href="" class="text-decoration-none tw-text-black">Watch</a>
                <a href="" class="text-decoration-none tw-text-black">AirPods</a>
            </div>
            
            <div class="tw-h-full d-flex justify-content-center align-items-center tw-gap-5 tw-pr-9">
               <div class="tw-relative">
                    <input type="text" class="tw-w-[15rem] tw-rounded-full tw-px-5"/>
                    <button class="tw-w-[2rem] tw-rounded-full tw-absolute tw-top-0 tw-right-1"><i class="fa-solid fa-magnifying-glass"></i></button>
               </div>

               <button><i class="fa-solid fa-user"></i></button>
               <button><i class="fa-solid fa-bag-shopping"></i></button>
               
            </div>
        </Header>
        <div class="tw-bg-white tw-h-[60px] tw-w-full d-flex tw-justify-center align-items-center">
            <span class="">Get $200–$650 in credit toward iPhone 15 or iPhone 15 Pro when you trade in iPhone 11 or higher.2</span>
        </div>
  `
}

export default Header