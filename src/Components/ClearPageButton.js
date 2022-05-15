import { useEffect, useState } from "react";

const ClearPageButton = () => {
  const buttonClick = () => {
    window.location.reload(false);
    console.log("buttonClick");
  };
  return <button onClick={buttonClick}>Refresh Page</button>;
};

export default ClearPageButton;
