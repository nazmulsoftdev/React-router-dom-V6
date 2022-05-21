import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

function Tutorials() {
  const navigate = useNavigate();
  const { title } = useParams();
  const location = useLocation();

  const tutorialStyle = {
    margin: "30px",
  };

  return (
    <div style={tutorialStyle}>
      <h3>{title}</h3>
      <img src={location.state.blogImage} alt="blogImage.png" />
      <p>{location.state.content.slice(0, 200)}</p>
      <p>{location.state.content.slice(201, location.state.content.length)}</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

export default Tutorials;
