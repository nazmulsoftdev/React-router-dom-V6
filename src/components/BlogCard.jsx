import React from "react";
import { Link } from "react-router-dom";

function BlogCard({ readBlog }) {
  const truncateStr = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return readBlog.map((item) => {
    const { id, name, blogImg, content } = item;
    return (
      <div key={id}>
        <h4>{name}</h4>
        <img src={blogImg} alt="blogImg.png" width="500px" />
        <p>{truncateStr(content, 300)}</p>
        <Link to={name}>Read more</Link>
      </div>
    );
  });
}

export default BlogCard;
