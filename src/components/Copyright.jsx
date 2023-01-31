import React from "react";

const Copyright = () => {
  return (
    <div className="flex justify-center p-5">
      Copyright
      {" " + new Date().getFullYear()}
    </div>
  );
};

export default Copyright;
