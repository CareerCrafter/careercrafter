import React from "react";
import { useState } from "react";
export default function AddWine() {
  const [formData, setFormData] = useState({
    name: "",
    alcohol_percent: "",
    region: "",
    score: "",
    notes: "",
    date: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = async () => {
      console.log('postin')
      try {
        console.log('postin2')
        const response = await fetch("/api/winelist", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      } catch (err) {

        console.log("error");
      }
    };
    postData();
  };

  return (
    <div className="routecontainers" onSubmit={handleSubmit}>
      <form className="wineform">
        <label>
          WINE:{" "}
          <input
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
