import React from "react";

const SideList = ({ data, onSelect }) => {
  const handleClick = (info) => {
    onSelect(info);
  };
  return (
    <>
      <div
        className="card text-left my-3"
        onClick={() => handleClick(data)}
        style={{ cursor: "pointer" }}>
        <img
          className="card-img-top"
          src={data?.snippet?.thumbnails.high.url}
          alt=""
          style={{ width: "100%", height: "300px" }}
        />
        <div className="card-body">
          <h4 className="card-title">{data?.snippet?.title}</h4>
          <p className="card-text">{data.snippet.description}</p>
        </div>
      </div>
    </>
  );
};
export default SideList;
