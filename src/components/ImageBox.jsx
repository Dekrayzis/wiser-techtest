import React from "react";
import { Link } from "react-router-dom";

const ImageBox = ({ imgUrl, label, id }) => {
  return (
    <Link to={`/details/${id}`} className="imageLink__box">
      <div
        className="image-box"
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <span className="image-label">{label}</span>
      </div>
    </Link>
  );
};

export default ImageBox;
