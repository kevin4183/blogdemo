import "./sidebar.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ProfilePic from "../../assets/images/tripadvisor.jpg";

const Sidebar = () => {
  const [cats, setCats] = useState([]);
  const getCats = async () => {
    const res = await axios.get("/categories");
    setCats(res.data);
  };

  useEffect(() => {
    getCats();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        {/* {post.photo && <img src={post.photo} alt="" />} */}
        <img src={ProfilePic} alt="" />
        <p>
          My name is Michelle Holmes, I'm a Travel consultant. I assist clients
          with the planning and partaking of their travel needs. We research
          various destinations and means of travel and consider the prices,
          customs, and weather conditions. Clients share insight including their
          specifications and wishes, and travel consultants research and suggest
          appropriate travel packages or services. We organize travel from
          beginning to end and book tickets, accommodation, secure rental
          transportation, and arrange for meals when requested.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c, i) => (
            <Link key={i} to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <a href="https://twitter.com/Nna4183"><i className="sidebarIcon fa-brands fa-square-twitter"></i></a>
          <a href="https://www.linkedin.com/in/nnandi-anwa-70455624b/"><i className="sidebarIcon fa-brands fa-linkedin"></i></a>
          <a href="https://www.instagram.com/officialslimxy_p/"><i className="sidebarIcon fa-brands fa-square-instagram"></i></a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
