import React, { useState, useEffect } from "react";
import "./index.css";

const TopLoadingBar = ({
  progress,
  color,
  height,
  transitionDuration,
  transitionTimingFunction,
}) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(progress);
  }, [progress]);

  return (
    <div
      className="top-loading-bar"
      style={{
        width: `${width}%`,
        backgroundColor: color,
        height: height,
        transition: `width ${transitionDuration} ${transitionTimingFunction}`,
      }}
    ></div>
  );
};

TopLoadingBar.defaultProps = {
  color: "#007bff",
  height: "2px",
  transitionDuration: "0.3s",
  transitionTimingFunction: "ease",
};

export default TopLoadingBar;
