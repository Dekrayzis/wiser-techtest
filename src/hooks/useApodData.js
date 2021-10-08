/* eslint-disable no-nested-ternary */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { baseUrl } from "../constants";

const useApodData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getRandomImages = async () => {
      try {
        const result = await (await fetch(`${baseUrl}&count=6&thumbs=true`)).json();  
        dispatch({ type: "apod_data", payload: result });

        //-- cache data in case user manually refreshes screen.
        window.localStorage.setItem("apod-data", JSON.stringify(result));
      } catch (error) {
        console.error(error);
      }
    };
    getRandomImages();
  }, [dispatch]);

};

export default useApodData;
