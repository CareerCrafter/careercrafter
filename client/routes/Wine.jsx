import React, { useEffect, useState } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import DisplayWine from "../components/SelectWine.jsx";
import AuthConsumer from "../AuthProvider.jsx";

const Wine = () => {
  // 12345
  const navigate = useNavigate();
  const { session, supabase, user } = AuthConsumer(); 
  console.log(user);
  const location = useLocation();
  let params = new URLSearchParams(location.search);
  console.log({ location });

  console.log({ params });
  console.log({ params: params.get("id") });
  const queryId = params.get("id");

  console.log({ queryId });
  const [wineId, setWineId] = useState();
  console.log("wineId", wineId);
  const [wineArray, setWineArray] = useState([]);

  useEffect(() => {
    setWineId(Number(queryId));
  }, [queryId]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/winelist`, {
          method: "GET",
          headers: { 
            "Content-Type": "application/json",
            "user_id": "63957a70-4251-4dbd-9b3b-2909adf68b2f"
          }
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

  //create a variable called wine
  //look for wine_id within the wineData
  //once found pass into wine data
  const wine = wineArray?.find((wine) => wine.wine_id === wineId);
  console.log("wine object", wine);

  const navigateToWine = (id) => {
    navigate({
      search: `?id=${id}`,
    });``
  };

  const wineListJsx = wineArray.map((wine, i) => {
    return (
      <ol
        className={`vino`}
        key={`vino${i}`}
        onClick={() => navigateToWine(wine.wine_id)}
      >
        {wine.name}
      </ol>
    );
  });

  if (!wineArray.length > 0) {
    return null;
  }

  return (
    <div className="hey">
      <div className="routecontainersleft">
        <ul style={{ fontSize: "20px" }}>WINE VAULT</ul>
        <ul>{wineListJsx}</ul>
      </div>
      {wine && <DisplayWine wine={wine} />}
    </div>
  );
};

export default Wine;
