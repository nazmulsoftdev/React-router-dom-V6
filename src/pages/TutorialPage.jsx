import { useState, useEffect } from "react";
import TutorialCard from "../components/TutorialCard";
import TutorialContent from "../db/TutorialContent";

function TutorialPage() {
  const [tutorialData, settutorialData] = useState([]);
  useEffect(() => {
    settutorialData(TutorialContent);
  }, []);
  return (
    <div className="tutorialWrap">
      <TutorialCard tutorialData={tutorialData} />
    </div>
  );
}

export default TutorialPage;
