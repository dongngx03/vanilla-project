import Footer from "@/components/member/Footer"
import Header from "@/components/member/Header"
import { formatNumberWithCommas, useEffect, useState } from "@/utilities"
import productApi from "@/services/productApi"

const Home = () => {
  const [product, setProduct] = useState([]);
  
  useEffect(() => {
      productApi.getAll()
        .then(res => setProduct(res.data))
  }, [])

  // hiệu ứng UI
  useEffect(() => {
      const img = document.getElementById('img-detail1');
      const infor = document.getElementById('infor-detail1')
      const p = document.getElementById('product-opa')
  
      setTimeout(() => {
          img.style.transform = "translateY(0px)";
          img.style.transition = "1s all";
          img.style.opacity = '1';
  
          infor.style.transform = "translateY(0px)";
          infor.style.transition = "1s all";
          infor.style.opacity = '1';

          p.style.transform = "translateY(0px)";
          p.style.transition = "1s all";
          p.style.opacity = '1';
  
      }, 500)
  })

  

  console.log(product);

  return /*html */ `

    ${Header()}

    <div class="tw-w-full tw-h-auto tw-bg-[#F5F5F7]">
        <div class="tw-w-full tw-h-[10rem] tw-p-28 d-flex tw-justify-between align-items-center">
          <h1 id="img-detail1">Shop iPhone</h1>

          <div id="infor-detail1" class="tw-flex tw-flex-col tw-gap-5">
            <div class="d-flex align-items-center tw-gap-2">
              <img class="tw-w-[40px] tw-h-[40px]" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-chat-specialist-icon-202309_AV3?wid=70&hei=70&fmt=jpeg&qlt=90&.v=1701194050300" />
              <div class="d-flex tw-flex-col">
                <span class="tw-font-bold">Need shopping help?</span>
                <a id="click" href="" class="text-decoration-none tw-text-sm">Ask an Iphone Specialist</a>
              </div>
            </div>

            <div class="d-flex align-items-center tw-gap-2">
              <button class="tw-w-[40px] tw-h-[40px]"><i class="fa-brands fa-apple fa-xl"></i></button>
              <div class="d-flex tw-flex-col">
                <span class="tw-font-bold" >Visit an Apple Store</span>
                <a href="" class="text-decoration-none tw-text-sm">Find one near you</a>
              </div>
            </div>
          </div>  
        </div>

        <div class="tw-w-full tw-h-[3rem] tw-px-28" >
            <h3>All models</h3>
        </div>

        <div id="product-opa" class="tw-w-full tw-h-auto tw-px-28 tw-pb-10 tw-pt-2 d-flex tw-gap-5 tw-flex-wrap">
          ${
            product?.map(p => {
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
    
    ${Footer()}
  `
}

export default Home