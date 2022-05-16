// Config
import axios from "axios";
// Modules
import React, { useEffect, useState } from "react";
// Components
import DisplayDropdown from "./DisplayDropdown";

const Dropdown = () => {
  const [dropdown, setDropdown] = useState([]);

  // API call with category endpoint
  useEffect(() => {
    axios({
      url: "https://opentdb.com/api_category.php",
      method: "GET",
      dataResponse: "json",
    }).then((response) => {
      const responseData = response.data.trivia_categories;
      setDropdown(responseData);
    });
  }, []);

  return (
    <div>
      <DisplayDropdown getCategory={dropdown} />
    </div>
  );
};

export default Dropdown;
