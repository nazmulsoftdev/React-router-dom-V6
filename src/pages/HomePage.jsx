import { useState } from "react";
import HomeCard from "../components/HomeCard";

function HomePage() {
  const [learn, setLearn] = useState([
    "Route pages",
    "useNavigate",
    "useParams",
    "useLocation",
    "useSearchParams",
    "Protected routing",
  ]);

  return (
    <div>
      <HomeCard learn={learn} />
    </div>
  );
}

export default HomePage;
