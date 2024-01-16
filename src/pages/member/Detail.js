import Footer from "@/components/member/Footer"
import Header from "@/components/member/Header"
import { useEffect } from "@/utilities"


const Detail = ({data}) => {
    useEffect(() => {
        console.log(data);
    });
  return /*html */`
    ${Header()}
    <div class="tw-w-full tw-h-auto tw-bg-[#F5F5F7]">
        <h1>${data.id}</h1>
    </div>
    ${Footer()}
  `
}

export default Detail