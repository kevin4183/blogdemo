import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    console.log("fetching posts...");
    const res = await axios.get("/posts");
    setPosts(res.data);
  };

  // fetches post on component mount
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
