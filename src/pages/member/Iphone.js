import Header from "@/components/member/Header"
import productApi from "@/services/productApi";
import { useEffect, useState, formatNumberWithCommas } from "@/utilities"


const Iphone = () => {
    const [iphone, setIphone] = useState([]);

    
    useEffect(() => {
        productApi.getType('iphone')
            .then(res => setIphone(res.data))
    }, [])

    console.log(iphone);

    useEffect(() => {
        // UI
        const left = document.getElementById('left')
        const top = document.getElementById('top')
        const bot = document.getElementById('bot')

        setTimeout(() => {
            left.style.transform = "translateX(0px)";
            left.style.transition = "1s all";
            left.style.opacity = '1';

            bot.style.transform = "translateY(0px)";
            bot.style.transition = "1s all";
            bot.style.opacity = '1';
        }, 500)
    })

    console.log(iphone);
    return /*html */`
    ${Header()}
    <div class="tw-w-full tw-h-auto tw-bg-[#FFFFFF]">
        <div class='tw-w-full tw-h-screen tw-bg-[#fffff] tw-flex tw-mt-10 tw-px-2 tw-gap-5'>
            <div id="left" class="tw-w-1/4 tw-h-full  tw-rounded-lg tw-shadow-md tw-bg-[#FFFFFF] tw-overflow-auto tw-border">
                <div class="tw-w-full tw-h-auto tw-p-3">
                    <span class="tw-text-xl tw-from-neutral-500 ">Tầm giá </span>
                    <div class="tw-w-full tw-h-auto tw-flex tw-flex-wrap tw-gap-2 tw-justify-start tw-border-b tw-py-3">
                        <button class=" tw-w-[7.5rem] tw-h-[2.5rem] tw-border tw-border-gray-200 tw-bg-[white] tw-rounded-lg tw-mt-2 tw-font-light"> < 10 triệu</button>
                        <button class=" tw-w-[7.5rem] tw-h-[2.5rem] tw-border tw-border-gray-200 tw-bg-[white] tw-rounded-lg tw-mt-2 tw-font-light"> 10 -- 20 </button>
                        <button class=" tw-w-[7.5rem] tw-h-[2.5rem] tw-border tw-border-gray-200 tw-bg-[white] tw-rounded-lg tw-mt-2 tw-font-light"> 10 -- 15 </button>
                        <button class=" tw-w-[7.5rem] tw-h-[2.5rem] tw-border tw-border-gray-200 tw-bg-[white] tw-rounded-lg tw-mt-2 tw-font-light"> 15 -- 20 </button>
                        <button class=" tw-w-[7.5rem] tw-h-[2.5rem] tw-border tw-border-gray-200 tw-bg-[white] tw-rounded-lg tw-mt-2 tw-font-light"> 20 -- 25 </button>
                        <button class=" tw-w-[7.5rem] tw-h-[2.5rem] tw-border tw-border-gray-200 tw-bg-[white] tw-rounded-lg tw-mt-2 tw-font-light"> 25 -- 30 </button>
                        <button class=" tw-w-[7.5rem] tw-h-[2.5rem] tw-border tw-border-gray-200 tw-bg-[white] tw-rounded-lg tw-mt-2 tw-font-light"> 30 -- 35</button>
                        <button class=" tw-w-[7.5rem] tw-h-[2.5rem] tw-border tw-border-gray-200 tw-bg-[white] tw-rounded-lg tw-mt-2 tw-font-light"> 35 -- 40</button>
                        <button class=" tw-w-[7.5rem] tw-h-[2.5rem] tw-border tw-border-gray-200 tw-bg-[white] tw-rounded-lg tw-mt-2 tw-font-light"> > 40 triệu</button>
                    </div>
                </div>

                <div class="tw-w-full tw-h-auto tw-p-3">
                    <span class="tw-text-xl tw-from-neutral-500 "> Dung lượng </span>
                    <div class="tw-w-full tw-h-auto tw-flex tw-flex-wrap tw-gap-2 tw-justify-start tw-border-b tw-py-3">
                        <button class=" tw-w-[7.5rem] tw-h-[2.5rem] tw-border tw-border-gray-200 tw-bg-[white] tw-rounded-lg tw-mt-2 tw-font-light"> 32GB</button>
                        <button class=" tw-w-[7.5rem] tw-h-[2.5rem] tw-border tw-border-gray-200 tw-bg-[white] tw-rounded-lg tw-mt-2 tw-font-light"> 64GB</button>
                        <button class=" tw-w-[7.5rem] tw-h-[2.5rem] tw-border tw-border-gray-200 tw-bg-[white] tw-rounded-lg tw-mt-2 tw-font-light"> 128GB</button>
                        <button class=" tw-w-[7.5rem] tw-h-[2.5rem] tw-border tw-border-gray-200 tw-bg-[white] tw-rounded-lg tw-mt-2 tw-font-light"> 320GB</button>
                        <button class=" tw-w-[7.5rem] tw-h-[2.5rem] tw-border tw-border-gray-200 tw-bg-[white] tw-rounded-lg tw-mt-2 tw-font-light"> 320GB</button>
                        <button class=" tw-w-[7.5rem] tw-h-[2.5rem] tw-border tw-border-gray-200 tw-bg-[white] tw-rounded-lg tw-mt-2 tw-font-light"> 1T</button>
                    </div>
                </div>

                <div class="tw-w-full tw-h-auto tw-p-3">
                    <span class="tw-text-xl tw-from-neutral-500 "> Dung lượng </span>
                    <div class="tw-w-full tw-h-auto tw-flex tw-flex-wrap tw-gap-2 tw-justify-start tw-border-b tw-py-3">
                        <button class=" tw-w-[7.5rem] tw-h-[2.5rem] tw-border tw-border-gray-200 tw-bg-[white] tw-rounded-lg tw-mt-2 tw-font-light"> 32GB</button>
                        <button class=" tw-w-[7.5rem] tw-h-[2.5rem] tw-border tw-border-gray-200 tw-bg-[white] tw-rounded-lg tw-mt-2 tw-font-light"> 64GB</button>
                        <button class=" tw-w-[7.5rem] tw-h-[2.5rem] tw-border tw-border-gray-200 tw-bg-[white] tw-rounded-lg tw-mt-2 tw-font-light"> 128GB</button>
                        <button class=" tw-w-[7.5rem] tw-h-[2.5rem] tw-border tw-border-gray-200 tw-bg-[white] tw-rounded-lg tw-mt-2 tw-font-light"> 320GB</button>
                        <button class=" tw-w-[7.5rem] tw-h-[2.5rem] tw-border tw-border-gray-200 tw-bg-[white] tw-rounded-lg tw-mt-2 tw-font-light"> 320GB</button>
                        <button class=" tw-w-[7.5rem] tw-h-[2.5rem] tw-border tw-border-gray-200 tw-bg-[white] tw-rounded-lg tw-mt-2 tw-font-light"> 1T</button>
                    </div>
                </div>

                <div class="tw-w-full tw-h-auto tw-p-3">
                    <span class="tw-text-xl tw-from-neutral-500 "> Dung lượng </span>
                    <div class="tw-w-full tw-h-auto tw-flex tw-flex-wrap tw-gap-2 tw-justify-start tw-border-b tw-py-3">
                        <button class=" tw-w-[7.5rem] tw-h-[2.5rem] tw-border tw-border-gray-200 tw-bg-[white] tw-rounded-lg tw-mt-2 tw-font-light"> 32GB</button>
                        <button class=" tw-w-[7.5rem] tw-h-[2.5rem] tw-border tw-border-gray-200 tw-bg-[white] tw-rounded-lg tw-mt-2 tw-font-light"> 64GB</button>
                        <button class=" tw-w-[7.5rem] tw-h-[2.5rem] tw-border tw-border-gray-200 tw-bg-[white] tw-rounded-lg tw-mt-2 tw-font-light"> 128GB</button>
                        <button class=" tw-w-[7.5rem] tw-h-[2.5rem] tw-border tw-border-gray-200 tw-bg-[white] tw-rounded-lg tw-mt-2 tw-font-light"> 320GB</button>
                        <button class=" tw-w-[7.5rem] tw-h-[2.5rem] tw-border tw-border-gray-200 tw-bg-[white] tw-rounded-lg tw-mt-2 tw-font-light"> 320GB</button>
                        <button class=" tw-w-[7.5rem] tw-h-[2.5rem] tw-border tw-border-gray-200 tw-bg-[white] tw-rounded-lg tw-mt-2 tw-font-light"> 1T</button>
                    </div>
                </div>
            </div>

            <div id="bot" class="tw-w-3/4 tw-h-full tw-border tw-rounded-lg tw-overflow-auto tw-shadow-md tw-bg-[#FFFFF]tw-p-2 tw-flex tw-justify-center tw-flex-wrap tw-gap-2 tw-py-3">
              ${
                iphone?.map((phone) => {
                    return /*html */`
                        <a id="fillProduct" href="/detail/${phone?.id}" class="tw-w-[14.5rem] tw-h-[20rem] text-decoration-none text-dark">
                            <img class="tw-w-full tw-h-2/3 tw-object-cover" src="${phone?.img}" />
                            <div id="block" class="tw-w-full tw-h-1/3 tw-flex tw-flex-col align-items-center tw-gap-1">
                                <span class="tw-text-lg">${phone?.name}</span>
                                <span class="tw-font-semibold">Giá: ${formatNumberWithCommas(phone?.price)}đ</span>
                                
                            </div>
                            <div id="none" class="tw-w-full tw-h-1/3 tw-opacity-0 tw-hidden">
                                <span class="tw-font-light tw-text-blue-500 tw-text-lg">Click để xem chi tiết</span>
                            </div>
                        </a>
                    `
                }).join("")
              }
               
            </div>
        </div>
    </div>
  `
}

export default Iphone