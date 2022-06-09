import {useEffect, useState} from "react";

const getWindowDimensions = () => {
  if (typeof window !== "undefined") {
    const {innerWidth: width, innerHeight: height} = window;
    return {width, height};
  }
  return {};
};

export const useWindow = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  const handleResize = () => setWindowDimensions(getWindowDimensions());

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};
