import Header from "@/components/member/Header"
import productApi from "@/services/productApi";
import { formatNumberWithCommas, useEffect, useState } from "@/utilities";


const MacBook = () => {
    const [mac, setMac] = useState([])

    useEffect(() => {
        productApi.getType('macbook')
            .then((res) => setMac(res.data))
    }, [])


    // UI
    useEffect(() => {
        const img = document.getElementById('img-mac');
        const span = document.getElementById('span-mac')

        setTimeout(() => {
            img.style.transform = "translateX(-0px)";
            img.style.transition = "0.8s all";
            img.style.opacity = '1';

            span.style.transform = "translateX(0px)";
            span.style.transition = "0.8s all";
            span.style.opacity = '1';

        }, 500)

        const left = document.getElementById('left')
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

    console.log(mac);

    return /*html */`
    ${Header()}
    <div class="tw-w-full tw-h-auto tw-bg-[#FFFFFF]">
        <div class="tw-w-full tw-h-auto tw-flex tw-justify-between tw-py-1">
            <img id="img-mac" class="" src="https://www.apple.com/v/macbook-air-m1/f/images/overview/machine_learning__d8u6dxf5xawm_large.png"/>
            <div id="span-mac" class="tw-flex tw-flex-col align-items-center tw-justify-center tw-gap-5 tw-w-2/5 tw-pr-10">
                <span class="tw-text-5xl tw-font-semibold">The power of macOS on M1.</span>
                <span class="tw-text-lg tw-font-serif">macOS unlocks the potential of the M1 chip and transforms Mac with all-new ways to work and play. Connect, share, and create like never before using FaceTime and Messages. Explore the web on the streamlined Safari, the fastest browser in the world.2 And work across Mac and your other Apple devices with Universal Control. macOS also includes industry-leading privacy features and best‑in‑class security.</span>
            </div>
        </div>

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
                mac?.map((mac) => {
                    return /*html */`
                        <a id="fillProduct" href="/detail/${mac?.id}" class="tw-w-[14.5rem] tw-h-[20rem] text-decoration-none text-dark">
                            <img class="tw-w-full tw-h-2/3 tw-object-cover" src="${mac?.img}" />
                            <div id="block" class="tw-w-full tw-h-1/3 tw-flex tw-flex-col align-items-center tw-gap-1">
                                <span class="tw-text-lg">${mac?.name}</span>
                                <span class="tw-font-semibold">Giá: ${formatNumberWithCommas(mac?.price)}đ</span>
                                
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
    </div>
  `
}

export default MacBook