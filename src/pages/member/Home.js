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
      const session1 = document.getElementById('sesion-1')
      const session2 = document.getElementById('sesion-2')
  
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
  
      }, 1000)
      setTimeout(() => {
        session1.style.transform = "translateX(0px)";
        session1.style.transition = "1s all";
        session1.style.opacity = '1';

        session2.style.transform = "translateY(0px)";
        session2.style.transition = "1s all";
        session2.style.opacity = '1';

      },100)

  })

  

  console.log(product);

  return /*html */ `

    ${Header()}
    <div class="tw-w-full tw-h-auto tw-bg-[#F5F5F7]">
    
      <div id="sesion-2" class="tw-w-full tw-h-auto d-flex tw-justify-center tw-px-28 tw-relative tw-pt-3" >
        <a class="tw-absolute tw-top-40 tw-text-xl tw-font-semibold text-decoration-none" href="#">learn more / Buy</a>
        <span class="tw-top-[7.5rem] tw-text-xl tw-text-[white] tw-font-light tw-w-3/4 text-center tw-absolute">Smater. Brighter. Mighter</span>
        <img class="tw-absolute tw-top-16 tw-h-auto" src="https://www.apple.com/v/home/bi/images/logos/apple-watch-series-9/promo_logo_apple_watch_series_9__ckz0hbex0yeu_large.png" />
        <img class="tw-rounded-xl tw-shadow-lg" src="https://www.apple.com/v/home/bi/images/promos/apple-watch-series-9/promo_apple_watch_series_9_order__b3u85rm9zf6u_large.jpg"/>
      </div>

        <div class="tw-w-full tw-h-[10rem] tw-p-28 d-flex tw-justify-between align-items-center">
          <h1 id="img-detail1" class="tw-font-semibold">Apple Shop</h1>
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
        
        <div class="tw-w-full tw-h-[3rem] tw-px-28" >
          <h3>Watch</h3>
        </div>

        <div class="tw-w-full tw-h-auto d-flex tw-justify-center tw-px-28 tw-relative" >
          <a class="tw-absolute tw-top-32 tw-text-xl tw-font-thin " href="#">learn more / Buy</a>
          <img class="tw-absolute tw-top-16 tw-h-auto" src="https://www.apple.com/v/home/bi/images/logos/apple-watch-ultra-2/promo_logo_apple_watch_ultra2__ggg2x39rsvqu_large.png" />
          <img class="tw-rounded-xl tw-shadow-lg" src="https://www.apple.com/v/home/bi/images/promos/apple-watch-ultra-2/promo_apple_watch_ultra2_order__dyxqj5ia98om_large.jpg"/>
        </div>
        
        <div class="tw-w-full tw-h-[3rem] tw-px-28 tw-py-5" >
          <h3>Other</h3>
        </div>

        <div id="sesion-1" class="tw-w-full tw-h-auto tw-flex tw-justify-center tw-px-28 tw-bg-[#F5F5F7] tw-gap-3 tw-pt-3">
          <div class="tw-w-1/2 tw-relative d-flex tw-justify-center">

            <img class="tw-absolute tw-top-7" src="https://www.apple.com/v/home/bi/images/logos/apple-fitness-plus/promo_logo_fitness__ghrl68mizmqi_large.png" />
            <span class="tw-top-16 tw-font-light tw-text-lg tw-w-3/4 text-center tw-absolute">From HIIT to Yoga. From 5 to 45 minutes. There's something for everyone</span>
            <a class="tw-absolute tw-top-32 tw-text-xl tw-font-thin " href="#">learn more </a>

            <img class="tw-w-full tw-h-auto tw-object-cover tw-rounded-lg tw-shadow-lg" src="https://www.apple.com/v/home/bi/images/promos/apple-fitness-plus/promo_fitness_alt__ck26n46yeb2a_medium.jpg" />
          </div>
          <div class="tw-w-1/2 tw-relative d-flex tw-justify-center">

            <img class="tw-absolute tw-top-7" src="https://www.apple.com/v/home/bi/images/logos/iphone-tradein/logo_tradein__d1fpktgipvki_medium.png" />
            <span class="tw-top-16 tw-font-light tw-text-lg tw-w-3/4 text-center tw-absolute">New camera. New design. Newphoria </span>
            <a class="tw-absolute tw-top-32 tw-text-xl tw-font-thin " href="#">learn more </a>

            <img class="tw-w-full tw-h-auto tw-object-cover tw-rounded-lg tw-shadow-lg" src="https://www.apple.com/v/home/bi/images/promos/iphone-15/promo_iphone15_announce__fmxxi8r9fkuy_medium.jpg" />
          </div>
        </div>

        <div  class="tw-w-full tw-h-auto tw-flex tw-justify-center tw-px-28 tw-bg-[#F5F5F7] tw-gap-3 tw-pt-3">
          <div class="tw-w-1/2 tw-relative d-flex tw-justify-center">

            <img class="tw-absolute tw-top-7" src="https://www.apple.com/v/home/bi/images/logos/apple-card/logo__dcojfwkzna2q_small.png" />
            <span class="tw-top-16 tw-font-light tw-text-lg tw-w-3/4 text-center tw-absolute">Get up to 3% Daily Cash back with every purchase</span>
            <a class="tw-absolute tw-top-32 tw-text-xl tw-font-thin " href="#">apply now</a>

            <img class="tw-w-full tw-h-auto tw-object-cover tw-rounded-lg tw-shadow-lg" src="https://www.apple.com/v/home/bi/images/promos/apple-card/tile__cauwwcyyn9hy_medium.jpg" />
          </div>
          <div class="tw-w-1/2 tw-relative d-flex tw-justify-center">

            <img class="tw-absolute tw-top-7" src="https://www.apple.com/v/home/bi/images/logos/iphone-tradein/logo_tradein__d1fpktgipvki_medium.png" />
            <span class="tw-top-16 tw-font-light tw-text-lg tw-w-3/4 text-center tw-absolute">Get $180-$620 in credit when you trade in iPhone 11 or higher</span>
            <a class="tw-absolute tw-top-32 tw-text-xl tw-font-thin " href="#">See what your device is worth</a>

            <img class="tw-w-full tw-h-auto tw-object-cover tw-rounded-lg tw-shadow-lg" src="https://www.apple.com/v/home/bi/images/promos/iphone-tradein/promo_iphone_tradein__bugw15ka691e_medium.jpg" />
          </div>
        </div>

    </div>
    
    ${Footer()}
  `
}

export default Home