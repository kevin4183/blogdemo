import { Link } from "react-router-dom";
import "./topbar.css";
import DefaultPic from "../../assets/images/person4.png";
import { useContext } from "react";
import { Context } from "../../context/Context";

const Topbar = () => {
  const { user, dispatch } = useContext(Context);
  // const defaultPic = "http://localhost:5050/images/blank-profile.webp";
  const PF = "http://localhost:5050/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <a href="https://twitter.com/Nna4183"> <i className="topIcon fa-brands fa-square-twitter"></i></a>
       <a href="https://www.linkedin.com/in/nnandi-anwa-70455624b/"> <i className="topIcon fa-brands fa-linkedin"></i></a>
        <a href="https://www.instagram.com/officialslimxy_p/"> <i className="topIcon fa-brands fa-square-instagram"></i></a>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link navName" to="/settings">
            <span>{user.username}</span>
            <img
              className="topImage"
              src={user.profilePic ? PF + user.profilePic : DefaultPic}
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default Topbar;
