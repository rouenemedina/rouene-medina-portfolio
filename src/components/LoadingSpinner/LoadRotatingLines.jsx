import React, { useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import "./LoadRotatingLines.scss";

const LoadRotatingLines = () => {
  const [loading, setLoading] = useState(true);
  
  return (
    <div className="loading">
      {loading ? (
        <RotatingLines
          visible={true}
          height="96"
          width="96"
          color="grey"
          strokeWidth="5"
          strokeColor="white"
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
