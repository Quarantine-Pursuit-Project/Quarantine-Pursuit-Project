// Config
// Modules
import { useEffect, useState } from "react";
// Components

const ClearPageButton = () => {
  const buttonClick = () => {
    window.location.reload(false);
    console.log("buttonClick");
  };
  return <button onClick={buttonClick}>NEW GAME</button>;
};

export default ClearPageButton;
