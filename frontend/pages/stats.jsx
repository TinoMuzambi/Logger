import { useEffect, useState } from "react";

import Stats from "../components/Stats";
import { API_BASE_URL } from "../utils";

const StatsPage = () => {
  const [feasibilities, setFeasibilities] = useState([]);

  const getFeasibilities = async () => {
    const res = await fetch(`${API_BASE_URL}/api/feasibilities`);
    const data = await res.json();

    console.log(data);
    setFeasibilities(data);
  };

  useEffect(() => {
    getFeasibilities();
  }, []);
  return (
    <main>
      <h1>Stats</h1>

      <Stats feasibilities={feasibilities} />
    </main>
  );
};

export default StatsPage;
