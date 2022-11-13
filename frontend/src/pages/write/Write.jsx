import "./write.css";
// import Writepic from "../../assets/images/everst.jpg";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [categories, setCategories] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      categories,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}

      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />

          <select className="writeOptionPostCats">
            <option onChange={(e) => setCategories(e.target.value)}>
              Selelct A Category
            </option>
            <option
              name="music"
              onChange={(e) => setCategories(e.target.value)}
            >
              Music
            </option>
            <option
              name="sports"
              onChange={(e) => setCategories(e.target.value)}
            >
              Sports
            </option>
            <option
              name="politics"
              onChange={(e) => setCategories(e.target.value)}
            >
              Politics
            </option>
            <option name="tech" onChange={(e) => setCategories(e.target.value)}>
              Tech
            </option>
          </select>
          {/* <input
            type="text"
            placeholder="Category"
            className="writeInput postCats"
            autoFocus={true}
            onChange={(e) => setCategories(e.target.value)}
          /> */}
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
