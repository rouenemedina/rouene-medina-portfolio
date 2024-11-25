import React, { useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import "./LoadRotatingLines.scss";

const LoadRotatingLines = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="loading">
      {loading ? (
        <RotatingLines
          visible={true}
          height="96"
          width="96"
          color="grey"
          strokeWidth="5"
          strokeColor="blue" // Customize the color
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass="loading-wrapper"
        />
      ) : (
        <div>100%</div>
      )}
    </div>
  );
};

export default LoadRotatingLines;
