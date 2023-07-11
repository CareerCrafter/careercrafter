import React, { useEffect, useState } from "react";
import DisplayWine from "../components/SelectWine.jsx";

const Wine = () => {
  const [displayWineData, setDisplayWineData] = useState();
  const [wineArray, setWineArray] = useState([]);

  let wineListJsx;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/winelist`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const wineData = await response.json();
        setWineArray(wineData);
        console.log("this is winedata", wineData);
      } catch (err) {
        console.log("error");
      }
    };
    fetchData();
  }, []);

  if (wineArray && wineArray.length > 0) {
    wineListJsx = wineArray.map((wine, i) => {
      return (
        <ol
          className={`vino`}
          key={`vino${i}`}
          onClick={() => setDisplayWineData(wine)}
        >
          {wine.name}
        </ol>
      );
    });
  }

  return (
    <div className="hey">
      <div className="routecontainersleft">
        <ul style={{ fontSize: "20px" }}>WINE VAULT</ul>
        <ul>{wineListJsx}</ul>
      </div>
      {displayWineData && <DisplayWine wine={displayWineData} />}
    </div>
  );
};

export default Wine;
