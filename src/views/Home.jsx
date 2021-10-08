import React from "react";
import { useSelector } from "react-redux";

import { ImageBox } from "../components";
import { updateKey } from "../helpers";

const Home = () => {
  const { apodData } = useSelector((state) => state.apodData);

  const render_Images = () => {
    return apodData.map(({ title, url, media_type, thumbnail_url }, idx) => (
      <ImageBox
        key={title + idx}
        label={title}
        imgUrl={media_type === "image" ? url : thumbnail_url}
        id={updateKey(title).toLowerCase()}
      />
    ));
  };

  return (
    <div className="home-page">
      <div className="container">
        <div className="row">
          <div className="image-list">
            {apodData.length > 0 && render_Images()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
