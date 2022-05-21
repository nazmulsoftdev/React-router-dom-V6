import React from "react";
import styled from "../assets/style/HomeCard.module.css";

function HomeCard({ learn }) {
  return learn.length === 0
    ? ""
    : learn.map((item, index) => {
        return (
          <div key={index} className={styled.HomeLessonCard}>
            <p>{item}</p>
          </div>
        );
      });
}

export default HomeCard;
