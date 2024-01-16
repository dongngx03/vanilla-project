import Footer from "@/components/member/Footer"
import Header from "@/components/member/Header"
import { formatNumberWithCommas, getDetail } from "@/services/product"
import { useEffect, useState } from "@/utilities"


const Detail = ({ data }) => {
  const [product, setProduct] = useState('')
  useEffect(() => {
    getDetail(data.id)
      .then(res => {
        setProduct(res)
      })
   
   
  }, []);

  useEffect(() => {
    const buy = document.getElementById('buy');
    buy.addEventListener('click', (e) => {
      e.preventDefault();
      console.log(e.currentTarget.dataset.id);
    })
  })

  const { id, name, desc, price, img, technical} = product;

  

  return /*html */`
    ${Header()}
    <div class="tw-w-full tw-h-auto tw-bg-[#fffff] tw-mb-10">
        <hr>
        <div class="tw-w-full tw-h-screen d-flex tw-px-36">
            <div class="tw-h-full tw-w-1/2 d-flex tw-justify-center align-items-center">
              <img class="tw-object-cover tw-w-full" src="${img}" />
            </div>

            <div class="tw-w-1/2 tw-h-full tw-overflow-auto tw-flex tw-flex-col scroll">
              <span class="tw-text-3xl tw-font-semibold">${name}</span>
              <div class="tw-w-full tw-h-auto tw-py-3 tw-flex tw-justify-between align-items-center">
                <span class="tw-text-lg tw-font-medium tw-text-red-700">${formatNumberWithCommas(parseInt(price))} đ</span>
                <div class="d-flex tw-gap-2">
                  <button id="buy" data-id="${id}" class="tw-bg-[#0077ED] tw-text-white tw-w-[4rem] tw-h-[2.3rem] tw-font-semibold tw-rounded-full tw-shadow-md">Buy</button>
                  <button data-id="${id}" class="tw-bg-black tw-text-white tw-w-[4rem] tw-h-[2.3rem] tw-font-semibold tw-rounded-full tw-shadow-md">Cart</button>
                </div>
              </div>
              
              <div class="tw-w-full tw-h-auto tw-flex tw-justify-between align-items-center tw-gap-7 tw-border-b tw-border-[#D2D2D7] tw-py-4">
                <svg height="55" class="as-svgicon" viewBox="0 0 35 35" width="55" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h35v35h-35z" fill="none"></path><path d="m12.6631 22.3228a.5.5 0 0 1 0 .707l-4.9697 4.9702h4.3066a.5.5 0 0 1 0 1h-5.5a.5.5 0 0 1 -.5-.5v-5.5a.5.5 0 0 1 1 0v4.2792l4.9561-4.9564a.5.5 0 0 1 .707 0zm16.3369-15.8228a.5.5 0 0 0 -.5-.5h-5.5a.5.5 0 0 0 0 1h4.314l-4.974 4.9741a.5.5 0 0 0 .7071.7071l4.9529-4.9527v4.2832a.5.5 0 0 0 1 0v-5.5l-.0012-.0058zm-14.5474 12.1035a2.2014 2.2014 0 0 1 -2.3554 2.2227c-1.4688 0-2.5362-1.08-2.5362-3.252 0-2.1347.9893-3.4 2.5616-3.4a2.09 2.09 0 0 1 2.2421 1.7129h-1.1347a1.02 1.02 0 0 0 -1.085-.7861c-.94 0-1.4892.8262-1.499 2.3428h.0752a1.7449 1.7449 0 0 1 1.6435-.9454 2.0325 2.0325 0 0 1 2.0879 2.1051zm-1.1123.03a1.2525 1.2525 0 1 0 -2.5049-.0225 1.2528 1.2528 0 1 0 2.5049.0225zm2.9366.7607a.6834.6834 0 1 0 .7031.6807.6712.6712 0 0 0 -.7031-.6804zm1.2773-3.8984v1.0684l1.5771-1.1172h.0752v5.2256h1.1329v-6.3406h-1.1294zm4.3779 1.4805h.8037l.7342-2.6443h-1.1033zm1.8936 0h.8043l.8086-2.6446h-1.1032z" fill="#1d1d1f"></path></svg>
                <span class="tw-font-semibold">${technical?.screen}</span>
              </div>

              <div class="tw-w-full tw-h-auto tw-flex tw-justify-between align-items-center tw-gap-7 tw-border-b tw-border-[#D2D2D7] tw-py-4">
                <svg height="55" class="as-svgicon" viewBox="0 0 35 35" width="55" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h35v35h-35z" fill="none"></path><path d="m28.9999 6.0098v.9902h-13.7563c-4.5381 0-8.2435 3.6299-8.2435 8.0791v13.9209h-.9869v-13.9209c0-5.001 4.1406-9.0693 9.2305-9.0693h13.7563zm-1.0073 8.4844v8.998c0 3.0322-2.4673 5.5-5.5 5.5h-7.9878c-3.0327 0-5.5-2.4678-5.5-5.5v-8.998c0-3.0322 2.4673-5.4941 5.5-5.4941h7.9878c3.0327 0 5.5 2.4619 5.5 5.4941zm-.9926 0c0-2.4814-2.026-4.5-4.5074-4.5h-7.9878c-2.4814 0-4.5048 2.0186-4.5048 4.5v8.998c0 2.4814 2.0233 4.5078 4.5048 4.5078h7.9878c2.4814 0 4.5074-2.0264 4.5074-4.5078zm-12.25 5.5013c-1.7949 0-3.25 1.455-3.25 3.25s1.4551 3.25 3.25 3.25 3.25-1.4551 3.25-3.25-1.4551-3.25-3.25-3.25zm0-8.5c-1.7949 0-3.25 1.455-3.25 3.25s1.4551 3.25 3.25 3.25 3.25-1.4551 3.25-3.25-1.4551-3.25-3.25-3.25zm7.5 4.2546c-1.7949 0-3.25 1.4551-3.25 3.25s1.4551 3.25 3.25 3.25 3.25-1.4551 3.25-3.25-1.4551-3.25-3.25-3.25zm0 7.7454c-.8284 0-1.5.6716-1.5 1.5s.6716 1.5 1.5 1.5 1.5-.6716 1.5-1.5-.6716-1.5-1.5-1.5zm-1.5-10.5c0-.8284.6716-1.5 1.5-1.5s1.5.6716 1.5 1.5-.6716 1.5-1.5 1.5-1.5-.6716-1.5-1.5zm1 0c0 .2757.2243.5.5.5s.5-.2243.5-.5-.2243-.5-.5-.5-.5.2243-.5.5z"></path></svg>
                <span class="tw-font-semibold">${technical?.cameraBefore}</span>
              </div>

              <div class="tw-w-full tw-h-auto tw-flex tw-justify-between align-items-center tw-gap-7 tw-border-b tw-border-[#D2D2D7] tw-py-4">
                <svg height="55" class="as-svgicon" viewBox="0 0 35 35" width="55" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h35v35h-35z" fill="none"></path><path d="m29 10v19h-1v-19a2.968 2.968 0 0 0 -3-3h-15a2.968 2.968 0 0 0 -3 3v19h-1v-19a3.9572 3.9572 0 0 1 4-4h15a3.9573 3.9573 0 0 1 4 4zm-8.75-2h-5.5a1.3922 1.3922 0 0 0 -1.25 1.5 1.3922 1.3922 0 0 0 1.25 1.5h5.5a1.3922 1.3922 0 0 0 1.25-1.5 1.3922 1.3922 0 0 0 -1.25-1.5z" fill="#1d1d1f"></path></svg>
                <span class="tw-font-semibold">${technical?.CameraSelfie}</span>
              </div>

              <div class="tw-w-full tw-h-auto tw-flex tw-justify-between align-items-center tw-gap-7 tw-border-b tw-border-[#D2D2D7] tw-py-4">
                <svg height="55" viewBox="0 0 35 35" width="55" class="as-svgicon" aria-hidden="true" role="img"><path d="m0 0h35v35h-35z" fill="none"></path><path d="m24.5 29h-14a4.505 4.505 0 0 1 -4.5-4.5v-14a4.505 4.505 0 0 1 4.5-4.5h14a4.505 4.505 0 0 1 4.5 4.5v14a4.505 4.505 0 0 1 -4.5 4.5zm-14-22a3.5042 3.5042 0 0 0 -3.5 3.5v14a3.5042 3.5042 0 0 0 3.5 3.5h14a3.5042 3.5042 0 0 0 3.5-3.5v-14a3.5042 3.5042 0 0 0 -3.5-3.5zm2.6543 7.9707h1.2129l1.7158 4.9326h-1.0869l-.3652-1.1963h-1.74l-.3652 1.1963h-1.084zm-.0273 2.9639h1.2675l-.6015-1.9795h-.0616zm4.453-1.9893h-.06l-1.2109.8408v-.93l1.2754-.8857h1.0293v4.9326h-1.0338zm2.2929 2.6318-.0029-.0478h.9365l.0069.0234a.851.851 0 0 0 .875.6534.8621.8621 0 0 0 .8994-.9024v-.0068a.8579.8579 0 0 0 -.8965-.8926.9343.9343 0 0 0 -.625.2129.8708.8708 0 0 0 -.2285.2734h-.8858l.2295-2.92h3.0821v.82h-2.2792l-.1231 1.4053h.0616a1.185 1.185 0 0 1 1.0527-.5361 1.5442 1.5442 0 0 1 1.583 1.6162v.0068a1.7258 1.7258 0 0 1 -1.8731 1.7461 1.65 1.65 0 0 1 -1.8125-1.4518z"></path></svg>
                <span class="tw-font-semibold">${technical?.CPU}/${technical?.RAM}/${technical?.Memory}</span>
              </div>

              <div class="tw-w-full tw-h-auto tw-flex tw-justify-between align-items-center tw-gap-7 tw-border-b tw-border-[#D2D2D7] tw-py-4">
               <svg height="55" viewBox="0 0 35 35" width="55" class="as-svgicon" aria-hidden="true" role="img">
                  <g stroke="none" fill="none" fill-rule="evenodd" transform="translate(5 10)">
                  <g transform="translate(-30.000000, -739.000000)" fill="#1D1D1F">
                  <g transform="translate(24.000000, 639.000000)">
                  <g transform="translate(3.000000, 87.000000)">
                  <g transform="translate(0.000000, 3.000000)">
                  <g transform="translate(3.000000, 10.000000)">
                  <path d="M21.5,2 L4.5,2 C3.121,2 2,3.121 2,4.5 L2,10.5 C2,11.879 3.121,13 4.5,13 L21.5,13 C22.879,13 24,11.879 24,10.5 L24,4.5 C24,3.121 22.879,2 21.5,2"></path>
                  <path d="M25,10.5 C25,12.43 23.43,14 21.5,14 L4.5,14 C2.57,14 1,12.43 1,10.5 L1,4.5 C1,2.57 2.57,1 4.5,1 L21.5,1 C23.43,1 25,2.57 25,4.5 L25,10.5 Z M21.5,0 L4.5,0 C2.019,0 0,2.019 0,4.5 L0,10.5 C0,12.981 2.019,15 4.5,15 L21.5,15 C23.981,15 26,12.981 26,10.5 L26,4.5 C26,2.019 23.981,0 21.5,0 L21.5,0 Z"></path>
                  <path d="M27,5 C27.851,5.041 29,6.027 29,7.495 C29,8.973 27.851,9.949 27,10 L27,5 Z"></path>
                  </g>
                  </g>
                  </g>
                  </g>
                  </g>
                  </g>
                </svg>
                <span class="tw-font-semibold">${technical?.battery}</span>
              </div>

              <div class="tw-w-full tw-h-auto tw-flex tw-justify-between align-items-center tw-gap-7 tw-border-b tw-border-[#D2D2D7] tw-py-4 tw-mb-10">
                <span>${desc}</span>
              </div>
              
            </div>
        </div>
    </div>
    
    ${Footer()}
  `
}

export default Detail

