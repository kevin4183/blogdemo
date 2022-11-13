import Heropic from "../../assets/images/blog-post-1-cover.jpg";

import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        {/* <span className="headerTitleSm">Travel & Life Style</span> */}
        <h1 className="headerTitleSm">We Offer You The Best Travel & Life Style!</h1>
        {/* <span className="headerTitleLg">Take A Tour Now</span> */}
      </div>
      <img className="headerImg" src={Heropic} alt="" />
    </div>
  );
};

export default Header;
