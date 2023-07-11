import React, { useState } from "react";

const DisplayWine = ({ wine }) => {
  return (
    <>
      <div className="selectwinecontainer">
        <div>{JSON.stringify(wine)}</div>
      </div>
    </>
  );
};

export default DisplayWine;
``