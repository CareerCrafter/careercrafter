import React, { useEffect } from "react";
import { useState } from "react";
import AuthConsumer from "../AuthProvider.jsx";

export default function AddWine() {
  const { user } = AuthConsumer();
  
  const [formData, setFormData] = useState({
    name: "2",
    alcohol_percent: "2",
    region: "test",
    score: 10,
    notes: "test",
    date: "test",
    user_id: ""
  });

  

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = async () => {
      console.log("postin");
      const bodyArgs = { ...formData}
      bodyArgs["user_id"] = user;

      console.log('body args', JSON.stringify(bodyArgs))
      try {
        
        const response = await fetch("/api/winelist", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(bodyArgs)
        });
        const s = await response.json();
        console.log(s);
      } catch (err) {
        console.log("error");
      } finally {
        setFormData({
          name: "",
          alcohol_percent: "",
          region: "",
          score: "",
          notes: "",
          date: "",
          user_id: "",
        });
      }
    };
    postData();
  };

  return (
    <div className="routecontainers">
      <form className="wineform" onSubmit={handleSubmit}>
        <label>
          WINE:{" "}
          <input
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
            }}
            name="name"
            type="text"
          />
        </label>{" "}
        <label>
          ALCOHOL %:{" "}
          <input
            value={formData.alcohol_percent}
            onChange={(e) => {
              setFormData({ ...formData, alcohol_percent: e.target.value });
            }}
            name="alcohol_percent"
            type="text"
          />
        </label>{" "}
        <label>
          REGION:{" "}
          <input
            value={formData.region}
            onChange={(e) => {
              setFormData({ ...formData, region: e.target.value });
            }}
            name="region"
            type="text"
          />
        </label>{" "}
        <label>
          SCORE:{" "}
          <input
            value={formData.score}
            onChange={(e) => {
              setFormData({ ...formData, score: e.target.value });
            }}
            name="score"
            type="text"
          />
        </label>{" "}
        <label>
          NOTES:{" "}
          <input
            value={formData.notes}
            onChange={(e) => {
              setFormData({ ...formData, notes: e.target.value });
            }}
            name="notes"
            type="text"
          />
        </label>{" "}
        <label>
          DATE:{" "}
          <input
            value={formData.date}
            onChange={(e) => {
              setFormData({ ...formData, date: e.target.value });
            }}
            name="date"
            type="text"
          />
        </label>{" "}
        <br />
        <button type="submit">Add Wine</button>
      </form>
    </div>
  );
}
