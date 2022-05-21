import React from "react";
import { Link } from "react-router-dom";

function TutorialCard({ tutorialData }) {
  const truncateStr = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return tutorialData.map((item) => {
    const { id, title, blogImage, content } = item;
    return (
      <div key={id}>
        <h3>{title}</h3>
        <img src={blogImage} alt="blogImage.png" />
        <p>{truncateStr(content, 200)}</p>
        <Link to={title} state={{ blogImage, content }}>
          Read more
        </Link>
      </div>
    );
  });
}

export default TutorialCard;
