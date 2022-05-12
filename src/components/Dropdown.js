import { useEffect, useState } from "react";
import axios from "axios";
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
