import { memo } from "react";
import "./style.scss";
import { FaBagShopping } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";

const Header = () => {
  return (
    <div className="top_header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="logo">
              <img src="https://i.pinimg.com/originals/3c/f6/f5/3cf6f59ad06905af2ae9540061388912.png" />
            </div>
          </div>
          <div className="col-6 container_right">
            <div className="chuyenmuc">
              <div className="giohang">
                <FaBagShopping />
              </div>
              <div className="login">Đăng nhập/ Đăng ký</div>
              <div className="ngonngu">
                VI <FaChevronDown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
