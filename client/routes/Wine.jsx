import React, { useState } from "react";
import DisplayWine from "../components/SelectWine.jsx";

const Wine = () => {
  const fakeWineData = [
    { key: "wine1", region: "napa", score: "7/10" },
    { key: "wine2", region: "napa", score: "7/10" },
    { key: "wine3", region: "napa", score: "7/10" },
    { key: "wine4  ", region: "napa", score: "7/10" },
  ];
  const [displayWineData, setDisplayWineData] = useState({});

  const wineListJsx = fakeWineData.map((wine, i) => {
    return (
      <ol
        className={`vino`}
        key={`vino${i}`}
        onClick={() => setDisplayWineData(wine)}
      >
        {wine.key}
      </ol>
    );
  });

  return (
    <div className="hey">
      <div className="routecontainersleft">
        <ul>{wineListJsx}</ul>
      </div>
      <DisplayWine wine={displayWineData} />
    </div>
  );
};

export default Wine;
