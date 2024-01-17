import Header from "@/components/member/Header"
import { useEffect } from "@/utilities";


const MacBook = () => {
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
    })

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

        <div class='tw-w-full tw-h-screen tw-bg-[#ffff]'>

        </div>
    </div>
  `
}

export default MacBook