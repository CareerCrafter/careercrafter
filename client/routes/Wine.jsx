import React from "react";

const Wine = () => {
  const fakeWineData = [
    { key: "wine1", region: "napa", score: "7/10" },

    { key: "wine2", region: "napa", score: "7/10" },
    { key: "wine3", region: "napa", score: "7/10" },
    { key: "wine4  ", region: "napa", score: "7/10" },
  ];
  const wineListJsx = fakeWineData.map((wine, i) => {
    return <li className="vino">{wine.key}</li>;
  });

  return (
    <div className="routecontainersleft">
      <div>{wineListJsx}</div>
    </div>
  );
};

export default Wine;
