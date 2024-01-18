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
        const img = document.getElementById('img-phone');
        const left = document.getElementById('left')
        const top = document.getElementById('top')
        const bot = document.getElementById('bot')

        setTimeout(() => {
            img.style.transform = "translateX(-0px)";
            img.style.transition = "0.8s all";
            img.style.opacity = '1';

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
        <div class="tw-w-full tw-h-auto tw-flex tw-justify-center tw-py-1">
            <img id="img-phone" class="" src="https://www.apple.com/v/iphone-15/c/images/overview/closer-look/all_colors__d4w03v51nwcy_large.jpg"/>
        </div>

        <div class='tw-w-full tw-h-[900px] tw-bg-[#fffff] tw-flex tw-mt-10 tw-px-2 tw-gap-5'>
            <div id="left" class="tw-w-1/4 tw-h-full  tw-rounded-lg tw-shadow-md tw-bg-[#FFFFFF]">
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
            </div>

            <div class="tw-w-3/4 tw-h-full d-flex tw-flex-col tw-gap-5">
                <div id="bot" class="tw-w-full tw-h-full  tw-rounded-lg tw-shadow-md tw-bg-[#F5F5F7] tw-overflow-auto d-flex tw-flex-wrap tw-justify-center tw-p-10 tw-gap-5">
                ${
                    iphone?.map(p => {
                      return /*html */`
                          <a href="/detail/${p.id}" class="custoom-hover tw-w-[350px] tw-h-[450px] tw-bg-white tw-rounded-3xl tw-shadow-xl tw-flex tw-flex-col tw-justify-between text-decoration-none tw-text-black">
                            <div class="d-flex flex-column tw-pt-5 tw-px-6">
                              <span class="tw-text-[#BF4800] tw-font-semibold">NEW</span>
                              <h4 class="">${p.name}</h4>
                            </div>
        
                            <div class=" tw-pb-8">
                              <img class="tw-object-cover" src="${p.img}" />
                            </div>
        
                            <div class="tw-px-6 d-flex tw-justify-between align-items-center tw-pb-3">
                              <span class="tw-font-semibold">Giá: ${formatNumberWithCommas(p.price)} đ</span>
                              <button class="tw-bg-[#0077ED] tw-text-white tw-w-[4rem] tw-h-[2.3rem] tw-font-semibold tw-rounded-full tw-shadow-md">Buy</button>
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

export default Iphone