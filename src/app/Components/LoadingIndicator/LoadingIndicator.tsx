import React from "react";

const LoadingIndicator: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <span className="loading loading-ring loading-lg text-center"></span>
    </div>
  );
}

export default LoadingIndicator;
