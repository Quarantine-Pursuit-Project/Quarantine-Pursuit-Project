import { useEffect, useState } from 'react';
import axios from 'axios';

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
            console.log(responseData)
            setDropdown(responseData)
        })
    }, [])

    return (
        <div>
            <form action="">
                <h2>test if this works</h2>

                <label htmlFor="category">Choose a category</label>

                <select name="category" id="category">
                    <option value="test">test</option>
                    {/* dynamically populate dropdown */}

                </select>
            </form>
        </div>
    )
}

export default Dropdown