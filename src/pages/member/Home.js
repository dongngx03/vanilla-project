import Footer from "@/components/member/Footer"
import Header from "@/components/member/Header"
import { formatNumberWithCommas, getAllProduct } from "@/services/product"
import { useEffect, useState } from "@/utilities"
import { router } from "@/utilities"

const Home = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getAllProduct()
      .then(res => {
        setProduct(res)
      })
  }, [])

  useEffect(() => {
    document.getElementById('click')
      .addEventListener('click', (e) => {
        e.preventDefault();
        router.navigate("signin")
      })
  })

  

  console.log(product);

  return /*html */ `
    ${Header()}
    <div class="tw-w-full tw-h-auto tw-bg-[#F5F5F7]">
        <div class="tw-w-full tw-h-[10rem] tw-p-28 d-flex tw-justify-between align-items-center">
          <h1>Shop iPhone</h1>

          <div class="tw-flex tw-flex-col tw-gap-5">
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

        <div class="tw-w-full tw-h-auto tw-px-28 tw-pb-10 tw-pt-2 d-flex tw-gap-5 tw-flex-wrap">
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