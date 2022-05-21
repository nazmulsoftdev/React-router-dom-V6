import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BlogContent from "../db/BlogContent";

function Blogs() {
  const navigate = useNavigate();
  const { name } = useParams();
  const [blogImage, setblogImage] = useState("");
  const [blogContent, setblogContent] = useState("");

  useEffect(() => {
    const blogData = BlogContent.filter((blog) => blog.name === name);

    setblogImage(blogData[0].blogImg);
    setblogContent(blogData[0].content);
  }, []);

  // inline css

  const blogStyle = {
    margin: "30px",
  };

  return (
    <div style={blogStyle}>
      <h3>{name}</h3>
      <img src={blogImage} alt="blogImage.png" width="100%" />
      <p>{blogContent.slice(0, 200)}</p>
      <p>{blogContent.slice(201, blogContent.length)}</p>
      <button onClick={() => navigate(-1)}>Back to Blog</button>
    </div>
  );
}

export default Blogs;
