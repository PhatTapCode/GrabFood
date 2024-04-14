import { memo } from "react";
import "./style.scss";
import { CiGps } from "react-icons/ci";
import { MdWhereToVote } from "react-icons/md";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="background">
        <img
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="container">
        <div className="Searchcontainer">
          <div className="HeaderSearch">
            <div className="TimeDay">Good Morning</div>
            <div className="TextHeader">
              Where should we deliver your food today ?
            </div>
          </div>
          <div className="Address">
            <MdWhereToVote style={{ fontSize: "24px" }} />
            <input class="w-full outline-0 pl-2 pr-2" />
            <CiGps />
          </div>
          <button type="button">
            <span>Tìm kiếm</span>
          </button>
        </div>
      </div>
      <div className="BorderLine"></div>
      <div className="container">
        <div class="flex  mt-32">
          <div class="w-full">
            <h1 class="font-bold md:text-4xl text:xl p-4 ml-10 ">
              GrabFood Promo in
              <span class="text-green-grab"> Location</span>
            </h1>
          </div>
        </div>
        <div class="grid grid-cols-4 gap-4 ml-9 p-6">
          <div class="Mon1">
            <Link to="./pages/users/listStorePage">
              <div class="absolute bg-green-grab p-[3px] text-[10px] text-white font-bold rounded-sm mt-4 px-2">
                Promo
              </div>
              <div class="hinh1 ">
                <img
                  class="rounded-md"
                  src="https://food-cms.grab.com/compressed_webp/merchants/VNGFVN000002qn/hero/29f794daa7344f13be62f45927aba2de_1663539629745752204.webp"
                  alt=""
                />
              </div>
              <div class="tenmon mt-5">Bánh Mì Huỳnh Hoa</div>
              <div class="motathem mt-5">
                Bánh mì - xôi, Ăn vặt, Gà rán - Burger
              </div>
              <div class="flex max-sm:text-sm max-[400px]:text-[10px] text-[#707070] mt-5 gap-5">
                <div class="flex">
                  <img
                    width="23"
                    class="max-sm:w-[18px]"
                    src="https://food.grab.com/vn/en/static/images/icons/icon-star.svg"
                    alt=""
                  />
                  <span>5</span>
                </div>
                <div class="flex">
                  <img
                    class="max-sm:w-[18px]"
                    src="https://food.grab.com/vn/en/static/images/icons/icon-clock.svg"
                    alt=""
                  />
                  <span>20 mins</span>
                </div>
                <span> 0 km</span>
              </div>
              <div class="flex max-sm:text-sm justify-center max-[400px]:text-[12px] mt-5">
                <img
                  class="max-sm:w-[18px]"
                  src="https://food.grab.com/vn/en/static/images/icons/icon-promo-tag.svg"
                  alt=""
                />
                <span>Ưu đãi đến 10k</span>
              </div>
            </Link>
          </div>
          <div class="Mon1">
            <Link to="./pages/users/listStorePage">
              <div class="absolute bg-green-grab p-[3px] text-[10px] text-white font-bold rounded-sm mt-4 px-2">
                Promo
              </div>
              <div class="hinh1 ">
                <img
                  class="rounded-md"
                  src="https://food-cms.grab.com/compressed_webp/merchants/5-CY23VYM1BFAKTE/hero/664c082cfdac4cd990f4d6da07869985_1691126915041133532.webp"
                  alt=""
                />
              </div>
              <div class="tenmon mt-5">Mì Trộn Tên Lửa</div>
              <div class="motathem mt-5">Bún - Phở - Cháo, gà rán - Burger</div>
              <div class="flex max-sm:text-sm max-[400px]:text-[10px] text-[#707070] mt-5 gap-5">
                <div class="flex">
                  <img
                    width="23"
                    class="max-sm:w-[18px]"
                    src="https://food.grab.com/vn/en/static/images/icons/icon-star.svg"
                    alt=""
                  />
                  <span>5</span>
                </div>
                <div class="flex">
                  <img
                    class="max-sm:w-[18px]"
                    src="https://food.grab.com/vn/en/static/images/icons/icon-clock.svg"
                    alt=""
                  />
                  <span>20 mins</span>
                </div>
                <span> 0 km</span>
              </div>
              <div class="flex max-sm:text-sm justify-center max-[400px]:text-[12px] mt-5">
                <img
                  class="max-sm:w-[18px]"
                  src="https://food.grab.com/vn/en/static/images/icons/icon-promo-tag.svg"
                  alt=""
                />
                <span>Ưu đãi đến 10k</span>
              </div>
            </Link>
          </div>
          <div class="Mon1">
            <Link to="./pages/users/listStorePage">
              <div class="absolute bg-green-grab p-[3px] text-[10px] text-white font-bold rounded-sm mt-4 px-2">
                Promo
              </div>
              <div class="hinh1 ">
                <img
                  class="rounded-md"
                  src="https://food-cms.grab.com/compressed_webp/merchants/VNGFVN000001yv/hero/a66500e3-db39-4dfa-a167-1278767f6d1a__store_cover__2024__01__15__08__51__53.webp"
                  alt=""
                />
              </div>
              <div class="tenmon mt-5">Cơm Tấm & Bún Thịt Nướng</div>
              <div class="motathem mt-5">Cơm</div>
              <div class="flex max-sm:text-sm max-[400px]:text-[10px] text-[#707070] mt-5 gap-5">
                <div class="flex">
                  <img
                    width="23"
                    class="max-sm:w-[18px]"
                    src="https://food.grab.com/vn/en/static/images/icons/icon-star.svg"
                    alt=""
                  />
                  <span>5</span>
                </div>
                <div class="flex">
                  <img
                    class="max-sm:w-[18px]"
                    src="https://food.grab.com/vn/en/static/images/icons/icon-clock.svg"
                    alt=""
                  />
                  <span>20 mins</span>
                </div>
                <span> 0 km</span>
              </div>
              <div class="flex max-sm:text-sm justify-center max-[400px]:text-[12px] mt-5">
                <img
                  class="max-sm:w-[18px]"
                  src="https://food.grab.com/vn/en/static/images/icons/icon-promo-tag.svg"
                  alt=""
                />
                <span>Ưu đãi đến 10k</span>
              </div>
            </Link>
          </div>
          <div class="Mon1">
            <Link to="./pages/users/listStorePage">
              <div class="absolute bg-green-grab p-[3px] text-[10px] text-white font-bold rounded-sm mt-4 px-2">
                Promo
              </div>
              <div class="hinh1 ">
                <img
                  class="rounded-md"
                  src="https://food-cms.grab.com/compressed_webp/merchants/5-C2UJBEW1PFTVHA/hero/90b8594dc390420e82fb041efcbc76c4_1670797020033360500.webp"
                  alt=""
                />
              </div>
              <div class="tenmon mt-5">Hương Ký 9</div>
              <div class="motathem mt-5">Cơm, Bún, Phở</div>
              <div class="flex max-sm:text-sm max-[400px]:text-[10px] text-[#707070] mt-5 gap-5">
                <div class="flex">
                  <img
                    width="23"
                    class="max-sm:w-[18px]"
                    src="https://food.grab.com/vn/en/static/images/icons/icon-star.svg"
                    alt=""
                  />
                  <span>5</span>
                </div>
                <div class="flex">
                  <img
                    class="max-sm:w-[18px]"
                    src="https://food.grab.com/vn/en/static/images/icons/icon-clock.svg"
                    alt=""
                  />
                  <span>20 mins</span>
                </div>
                <span> 0 km</span>
              </div>
              <div class="flex max-sm:text-sm justify-center max-[400px]:text-[12px] mt-5">
                <img
                  class="max-sm:w-[18px]"
                  src="https://food.grab.com/vn/en/static/images/icons/icon-promo-tag.svg"
                  alt=""
                />
                <span>Ưu đãi đến 10k</span>
              </div>
            </Link>
          </div>
        </div>
        <Link to="./pages/users/listStorePage">
          <button type="button" class="ant-btn ant-btn-block ml-12">
            <span>See all promotions</span>
          </button>
        </Link>
        <h1 class="font-bold md:text-4xl text:3xl w-full p-4 pb-0 ml-10">
          There's something for everyone!
        </h1>
        <div class="grid grid-cols-4 gap-4 ml-9 p-6">
          <Link to="">
            <div class="Monthem">
              <img
                class="anhmonphu round-md"
                src="https://food-cms.grab.com/compressed_webp/cuisine/157/icons/eb8ea703d1f84b218b79b0f860e99425_1562559054203677203.webp"
                alt=""
              />
              <h3 class="tieudephu">Ăn vặt</h3>
            </div>
          </Link>
          <Link to="">
            <div class="Monthem">
              <img
                class="anhmonphu round-md"
                src="https://food-cms.grab.com/compressed_webp/cuisine/147/icons/Salad_1641af887e2b4092a81f8e27ccdac0dc_1547819244890107512.webp"
                alt=""
              />
              <h3 class="tieudephu">Rau trộn</h3>
            </div>
          </Link>
          <Link to="">
            <div class="Monthem">
              <img
                class="anhmonphu round-md"
                src="https://food-cms.grab.com/compressed_webp/cuisine/40/icons/upload-photo-icon_f71f7805786348b694d2a9a886b85cee_1549034196325788582.webp"
                alt=""
              />
              <h3 class="tieudephu">Cháo</h3>
            </div>
          </Link>
          <Link to="">
            <div class="Monthem">
              <img
                class="anhmonphu round-md"
                src="https://food-cms.grab.com/compressed_webp/collections/68/icons/upload-photo-icon_3d16a293ac324b7e9aed94d783a57864_1548575050539497623.webp"
                alt=""
              />
              <h3 class="tieudephu">Weekend Treats</h3>
            </div>
          </Link>
          <Link to="">
            <div class="Monthem">
              <img
                class="anhmonphu round-md"
                src="https://food-cms.grab.com/compressed_webp/cuisine/43/icons/Chicken_d4725da9243a46e79740d2e70fd28314_1547819095170793371.webp"
                alt=""
              />
              <h3 class="tieudephu">Gà</h3>
            </div>
          </Link>
          <Link to="">
            <div class="Monthem">
              <img
                class="anhmonphu round-md"
                src="https://food-cms.grab.com/compressed_webp/cuisine/135/icons/Pizza_32aed38d4c1d4dbcb2fe711f0aeb6e15_1547819221409327403.webp"
                alt=""
              />
              <h3 class="tieudephu">Pizza</h3>
            </div>
          </Link>
          <Link to="">
            <div class="Monthem">
              <img
                class="anhmonphu round-md"
                src="https://food-cms.grab.com/compressed_webp/cuisine/62/icons/FastFood_4710e425c3d24db2aa4280aa207a22d3_1547819143037208832.webp"
                alt=""
              />
              <h3 class="tieudephu">Gà rán - Burger</h3>
            </div>
          </Link>
          <Link to="">
            <div class="Monthem">
              <img
                class="anhmonphu round-md"
                src="https://food-cms.grab.com/compressed_webp/collections/38/icons/upload-photo-icon_11130fe9f9154c09b507516072864902_1548777275151458249.webp"
                alt=""
              />
              <h3 class="tieudephu">Đồ ún lạnh</h3>
            </div>
          </Link>
          <Link to="">
            <div class="Monthem">
              <img
                class="anhmonphu round-md"
                src="https://food-cms.grab.com/compressed_webp/cuisine/83/icons/cedda467431a49bd88fb1fdf40a4c4a0_1562559607379193479.webp"
                alt=""
              />
              <h3 class="tieudephu">Hủ tiếu</h3>
            </div>
          </Link>
          <Link to="">
            <div class="Monthem">
              <img
                class="anhmonphu round-md"
                src="https://food-cms.grab.com/compressed_webp/cuisine/16/icons/upload-photo-icon_3408dc71ae96497c82a6f5fb35763840_1549033935837593141.webp"
                alt=""
              />
              <h3 class="tieudephu">Bánh mì</h3>
            </div>
          </Link>
          <Link to="">
            <div class="Monthem">
              <img
                class="anhmonphu round-md"
                src="https://food-cms.grab.com/compressed_webp/cuisine/144/icons/Rice_e191965ccd6848a3862e6a695d05983f_1547819238893335910.webp"
                alt=""
              />
              <h3 class="tieudephu">Cơm</h3>
            </div>
          </Link>
          <Link to="">
            <div class="Monthem">
              <img
                class="anhmonphu round-md"
                src="https://food-cms.grab.com/compressed_webp/cuisine/29/icons/a928e8df0b8b4dfc856ac176c2cf6ecb_1662695866769706068.webp"
                alt=""
              />
              <h3 class="tieudephu">Trà sữa</h3>
            </div>
          </Link>
          <Link to="">
            <div class="Monthem">
              <img
                class="anhmonphu round-md"
                src="https://food-cms.grab.com/compressed_webp/collections/36/icons/upload-photo-icon_e816de4ec50a4e7a95fc6cc52e3072cd_1548575711684762474.webp"
                alt=""
              />
              <h3 class="tieudephu">Hiso Party</h3>
            </div>
          </Link>
          <Link to="">
            <div class="Monthem">
              <img
                class="anhmonphu round-md"
                src="https://food-cms.grab.com/compressed_webp/cuisine/50/icons/fcaf978fac204ecaab2c5fa0f7e6e4ce_1562559545238776223.webp"
                alt=""
              />
              <h3 class="tieudephu">Cơm tấm</h3>
            </div>
          </Link>
        </div>
        <div class=" p-4">
          <h1 class="font-bold text-4xl w-full mb-4 mt-10 ml-10">
            Why GrabFood?
          </h1>
          <ul class="p-4 text-sm ml-10 text-xl">
            <li class="list-image-[url(https://food.grab.com/static/images/tick.svg)] mt-3">
              <span class="font-bold">Quickest </span> - GrabFood provides the
              fastest food delivery in the market.
            </li>
            <li class="list-image-[url(https://food.grab.com/static/images/tick.svg)] mt-3">
              <span class="font-bold">Easiest </span> - Now grabbing your food
              is just a few clicks or taps away. Order online or download our
              Grab super app for a faster and more rewarding experience.
            </li>
            <li class="list-image-[url(https://food.grab.com/static/images/tick.svg)] mt-3">
              <span class="font-bold">Food for all cravings </span> - From local
              fare to restaurant favourites, our wide selection of food will
              definitely satisfy all your cravings.
            </li>
            <li class="list-image-[url(https://food.grab.com/static/images/tick.svg)] mt-3">
              <span class="font-bold">Pay with ease </span> - It’s easy to get
              your meals delivered to you. It’s even easier to pay for it with
              GrabPay.
            </li>
            <li class="list-image-[url(https://food.grab.com/static/images/tick.svg)] mt-3">
              <span class="font-bold">More Rewarding </span> - earn GrabRewards
              points for every order you make and use them to redeem more
              goodies.
            </li>
          </ul>
          <h1 class="font-bold text-4xl w-full mb-4 mt-10 ml-10">
            Frequently Asked Questions
          </h1>
          <h1 class="font-bold text-2xl w-full mb-4 mt-10 ml-10">
            What is GrabFood?
          </h1>
          <p class="text-xl ml-10">
            {" "}
            GrabFood is the fastest Food Delivery service in Vietnam. We have
            curated all your favorite dishes, restaurants, and cuisines to help
            you grab your food in the easiest &amp; quickest way possible. Find
            and order your favorite cuisines across Vietnam - order food online
            in just a few taps, from Lifted Coffee &amp; Brunch - Hàng Gà for
            Breakfast, Maazi Indian - Nhà Hàng Ấn Độ for Lunch, Bún Cá Chấm Gốc
            Đa - Vũ Thạnh for Dinner! We are here to satisfy your hunger with a
            wide selection of merchant partners in Vietnam.
          </p>
          <button class="p-3 text-[#676767]  border-[1px] rounded-md border-[#2a612f] font-bold mt-3 mb-3 hover:border-green-grab hover:text-green-grab w-full">
            Read more
          </button>
          <div class="hidden">
            <hr class="border-[#F7F7F7]" />
            <h1 class="font-bold text-2xl w-full mb-4 mt-10">
              How to order Grabfood online?
            </h1>
            <p class="text-sm">
              Here is the easiest way to order food from GrabFood in Singapore:
            </p>
            <ol class="text-sm">
              <li class="p-3">
                <span class="font-bold ">
                  Search your favorite restaurant or the dish
                </span>
                <span>
                  {" "}
                  - Enter your address on the home page. Look at the GrabFood
                  Listed Restaurants and Food spots near you. Pick your favorite
                  restaurant and browse through the menu and select the dish you
                  want to order.
                </span>
              </li>
              <li class="p-3">
                <span class="font-bold">Checkout &amp; Payment</span>
                <span>
                  {" "}
                  - Once sure that you are ordering enough, click on the "ORDER
                  NOW" tab and enter your final food delivery address. Choose
                  the payment method that best suits you, and checkout.
                </span>
              </li>
              <li class="p-3">
                <span class="font-bold">Delivery </span>
                <span>
                  - GrabFood has designed a seamless customer journey for you,
                  so you can enjoy your food hassle-free. We will send you an
                  instant email and SMS confirming your order and expected
                  delivery time. Your food is then on its way.
                </span>
              </li>
            </ol>
            <hr class="border-[#F7F7F7]" />
            <h1 class="font-bold text-2xl w-full mb-4 mt-10">
              Does GrabFood provide food delivery 24x7?
            </h1>
            <p class="text-sm">
              We understand only one language - food, so yes, we do.. Please
              note, though we are here as your 24x7 food partners, few of our
              listed restaurants may have late-night food delivery restrictions
              or may be unavailable for orders. But we have listed the ones that
              love your late-night binging in our Late Night Delivery Section.
            </p>
            <h1 class="font-bold text-2xl w-full mb-4 mt-10">
              Does GrabFood accept Cash?
            </h1>
            <p class="text-sm">
              Sure, we do! GrabFood accepts all forms of payments for food
              delivery services, including cash on delivery.
            </p>
          </div>
        </div>
      </div>
      <div class="bg-[#F7F7F7] flex justify-center">
          <div class="w-[1200px]">
            <div class="grid lg:grid-cols-2 grid-cols-1 bg-[#F7F7F7] p-24">
              <div class="flex items-center flex-col">
                <img
                  class="w-[150px]"
                  src="https://food.grab.com/static/page-home/bottom-food-options.svg" alt=""
                />
                <h1 class="font-bold text-[18px] mt-3 mb-2">
                  Curated restaurants
                </h1>
                <p class="text-[12px] w-[400px] text-center">
                  From small bites to big meals, we won't limit your appetite.
                  Go ahead and order all you want.
                </p>
              </div>
              <div class="flex items-center flex-col">
                <img
                  class="w-[150px] h-[150px]"
                  src="https://food.grab.com/static/images/ilus-cool-features-app.svg" alt=""
                />
                <h1 class="font-bold text-[18px]  text-center mt-3 mb-2">
                  More cool features available on the app
                </h1>
                <p class="text-[12px] w-[400px] text-center">
                  Download Grab app to use other payment methods and enjoy
                  seamless communication with your driver.
                </p>
                <div class="flex mt-4 gap-6">
                  <a>
                    <img src="https://food.grab.com/static/images/logo-appstore.svg" />
                  </a>
                  <a>
                    <img src="https://food.grab.com/static/images/logo-playstore.svg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default memo(HomePage);
