import React from "react";

export default function AddWine() {
  const handleSubmit = () => {
    e.preventDefault();
    const postData = async () => {
      try {
        const response = await fetch("/api/winelist", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      } catch (err) {
        console.log("error");
      }
    };
  };

  return (
    <div className="routecontainers" onSubmit={handleSubmit}>
      <form className="wineform">
        <label>
          WINE: <input name="username" type="text" />
        </label>{" "}
        <label>
          ALCOHOL %: <input name="username" type="text" />
        </label>{" "}
        <label>
          REGION: <input name="username" type="text" />
        </label>{" "}
        <label>
          SCORE: <input name="username" type="text" />
        </label>{" "}
        <label>
          NOTES: <input name="username" type="text" />
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
