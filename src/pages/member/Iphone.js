import Header from "@/components/member/Header"
import { useEffect } from "@/utilities"


const Iphone = () => {
    useEffect(() => {
        const img = document.getElementById('img-phone');

        setTimeout(() => {
            img.style.transform = "translateX(-0px)";
            img.style.transition = "0.8s all";
            img.style.opacity = '1';
        }, 500)
    })
    return /*html */`
    ${Header()}
    <div class="tw-w-full tw-h-auto tw-bg-[#FFFFFF]">
        <div class="tw-w-full tw-h-auto tw-flex tw-justify-center tw-py-1">
            <img id="img-phone" class="" src="https://www.apple.com/v/iphone-15/c/images/overview/closer-look/all_colors__d4w03v51nwcy_large.jpg"/>
        </div>

        <div class='tw-w-full tw-h-screen tw-bg-[#ffff]'>

        </div>
    </div>
  `
}

export default Iphone