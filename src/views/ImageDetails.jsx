import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useWindowSize } from "../hooks";
import { mediaBreaks, updateKey } from "../helpers";

const ImageDetails = () => {
  const { id } = useParams();
  const { apodData } = useSelector((state) => state.apodData);
  const windowSize = useWindowSize();
  const [pageData, setPageData] = useState({});

  const isMobile =
    windowSize.width <= mediaBreaks.mobile || windowSize.height <= 696;

  useEffect(() => {

    //-- Populate from reducer.
    setPageData(
      apodData.find(({ title }) => updateKey(title).toLowerCase() === id)
    );
    // eslint-disable-next-line
  }, []);

  useEffect(() => {

    //-- Get cached data from local storage to repopulate screen due to api endpoint
    //-- Does not provide direct link to image information.
    if (apodData.length === 0 && JSON.stringify(pageData) === "{}") {

      const cachedData = JSON.parse(localStorage.getItem("apod-data"));
      const storedData = cachedData.find(({ title }) => updateKey(title).toLowerCase() === id);

      setPageData(storedData);

    }

    // eslint-disable-next-line
  }, [pageData]);

  const { explanation, title, url, media_type, thumbnail_url } = pageData;

  return (
    <div className="container detail-page">
      <div className="row">
        <div className="column">
          <h2>{title}</h2>
          {isMobile && (
            <div className="image-wrapper image-wrapper-mobile">
              <img
                className="apod-image"
                src={media_type === "image" ? url : thumbnail_url}
                alt={title}
              />
            </div>
          )}
          <p>{explanation}</p>
        </div>
        <div className="column">
          {!isMobile && (
            <div className="image-wrapper">
              <img
                className="apod-image"
                src={media_type === "image" ? url : thumbnail_url}
                alt={title}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageDetails;
