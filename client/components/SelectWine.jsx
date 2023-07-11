import React, { useState } from "react";

const DisplayWine = ({ wine }) => {
  const { name, alcohol_percent, region, score, notes, date } = wine;

  //
  return (
    <>
      <div className="selectwinecontainer">
        <div style={{ padding: "15px" }}>
          <div style={{ fontSize: "20px" }}>{`Wine: ${name}`}</div>
          <div style={{ fontSize: "20px" }}>{`AlC %: ${alcohol_percent}`}</div>
          <div style={{ fontSize: "20px" }}>{`Region: ${region}`}</div>
          <div style={{ fontSize: "20px" }}>{`Rating: ${score}`}</div>
          <div style={{ fontSize: "20px" }}>{`Notes: ${notes}`}</div>
          <div style={{ fontSize: "20px" }}>{`Date Added: ${date}`}</div>
        </div>
      </div>
    </>
  );
};

export default DisplayWine;

//[{"wine_id":1,"name":"testwine","alcohol_percent":"five","region":"France","score":8,"notes":"bitter","date":"July 11th","user_id":null},{"wine_id":5,"name":"dsf","alcohol_percent":"sdf","region":"sfsg","score":5,"notes":"dfg","date":"dfg","user_id":null},{"wine_id":6,"name":"dsf","alcohol_percent":"sdf","region":"sfsg","score":5,"notes":"dfg","date":"dfg","user_id":null},{"wine_id":7,"name":"pinot","alcohol_percent":"10","region":"oregon","score":10,"notes":"i love this","date":"7/11","user_id":null},{"wine_id":2,"name":"divine wine","alcohol_percent":"two","region":"Denmark","score":7,"notes":"sweet","date":"July 9th","user_id":null},{"wine_id":3,"name":"sublime wine","alcohol_percent":"two","region":"Egypt","score":7,"notes":"sweet","date":"July 4th","user_id":null},{"wine_id":4,"name":"lime wine","alcohol_percent":"5.7","region":"Brazil","score":10,"notes":"dry","date":"July 2nd","user_id":null}]
