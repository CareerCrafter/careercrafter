import React from "react";

export default function AddWine() {
  return (
    <div className="routecontainers">
      <form className="wineform">
        <label>
          WINE: <input name="username" type="text" />
        </label>{" "}
        <br />
        <label>
          REGION: <input name="username" type="text" />
        </label>{" "}
        <label>
          SCORE: <input name="username" type="text" />
        </label>{" "}
        <label>
          DATE: <input name="username" type="text" />
        </label>{" "}
        <br />
        <button type="submit">Add Wine</button>
      </form>
    </div>
  );
}
