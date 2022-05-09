import { useEffect, useState } from 'react';
import axios from 'axios';
import DisplayDropdown from './DisplayDropdown';

const Dropdown = () => {
    const [dropdown, setDropdown] = useState([])

    // API call
    useEffect(() => {
        axios({
            url: "https://opentdb.com/api_category.php",
            method: "GET",
            dataResponse: "json",
        }).then((response) => {
            const responseData = response.data.trivia_categories
            // console.log(responseData)
            setDropdown(responseData)
        })
    }, [])

    return (
        <div>
            < DisplayDropdown 
                getCategory={dropdown}
            />
            
            {/* <form action="">
                <label htmlFor="category">Choose a category</label>

                <select name="category" id="category">
                    <option value="test">test</option>
                    <option value="">{categoryName}</option>
                </select>
            </form> */}
        </div>
    )
}

export default Dropdown