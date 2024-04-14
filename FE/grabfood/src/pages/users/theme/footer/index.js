import { memo } from "react";
import { AiOutlineFacebook } from "react-icons/ai";
import { CiInstagram } from "react-icons/ci";
import { FaSquareTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./style.scss";

const Footer = () => {
  return (
    <div class="bg-green-grab flex justify-center ">
      <div class="w-[1200px]"> 
        <div class="pl-15px pr-15px"> 
        <img class="w-[120px] m-5" src="https://food.grab.com/static/images/logo-grabfood-white2.svg"></img>
        <hr class="m-5 border-[#3AC377]"></hr>
        <div class ="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 text-white font-bold text-sm">
           <div className="col-lg-3">
              <ul>
                <li class="m-5 mb-0">
                  <Link to="https://www.grab.com/vn/food/">Về GradFood</Link>
                </li>
                <li class="m-5 mb-0">
                  <Link to="https://www.grab.com/vn/about/">Về Grab</Link>
                </li>
                <li class="m-5 mb-0">
                  <Link to="https://www.grab.com/vn/food-blog/">Blog</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <ul>
                <li class="m-5 mb-0">
                  <Link to="https://www.grab.com/vn/merchant/food/">
                    Mở quán trên GrabFood
                  </Link>
                </li>
                <li class="m-5 mb-0">
                  <Link to="https://www.grab.com/vn/driver/drive/">
                    Trở thành tài xế Grab
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <ul>
                <li class="m-5 mb-0">
                  <Link to="https://help.grab.com/passenger/en-vn/115002258448-GrabFood">
                    Trung tâm hỗ trợ
                  </Link>
                </li>
                <li class="m-5 mb-0">
                  <Link to="https://help.grab.com/passenger/en-vn/115002258448-GrabFood">
                    Câu hỏi thường gặp
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <div class="flex m-5 mb-0">
              <div class="down1">
              <Link to="https://www.facebook.com/GrabVN/">
                  <AiOutlineFacebook />
                </Link>
                <Link to="https://www.instagram.com/grabfoodvietnam/">
                  <CiInstagram />
                </Link>
                <Link to="https://twitter.com/grabvn">
                  <FaSquareTwitter />
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
          <hr class="m-5 mb-0  border-[#3AC377]"></hr>
          <div class="grid lg:grid-cols-3 grid-cols-1 mb-2 p-4">
          <div class="flex mt-4 gap-6 mb-3">
            <a><img src="https://food.grab.com/static/images/logo-appstore.svg"/></a>
            <a><img src="https://food.grab.com/static/images/logo-playstore.svg"/></a>
          </div><div class="w-full"></div><div class="mb-3 text-white text-[12px] gap-5 flex items-center">
            <span>© 2024 Grab</span>
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
          </div>
        </div>
        </div>
    </div>
  );
};

export default memo(Footer);
