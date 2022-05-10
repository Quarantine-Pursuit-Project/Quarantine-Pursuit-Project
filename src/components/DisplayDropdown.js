import { useState} from 'react';

const DisplayDropdown = ({getCategory}) => {
    const [userSelectedCategory, setUserSelectedCategory] = useState()

    const userSelection = (e) => {
        // we were told to save this "categorySelected" variable within state 
        const categorySelected = e.target.value
        setUserSelectedCategory(categorySelected)
        console.log("The ID for this category is:", categorySelected)
    }

    return (
        <section>
            <h2>This component is linked to Dropdown.js (and Dropdown.js) is a component that links to parent "App.js"</h2>
            <form>
                <select 
                    defaultValue="gameCategory" 
                    name="category" 
                    id="category"
                    onChange={userSelection}
                >
                    <option value="gameCategory" id="gameCategory" key="gameCategory" disabled>Pick a game category!</option>
                        {getCategory.map(category => {
                                const { name, id } = category;
                                return <option value={id} id={id} key={id}>{name}</option>
                            })
                        }
                </select>
            </form>
            <p>the category id is <span>{userSelectedCategory}</span> to be used for the API endpoint for the questions</p>
        </section>
    )
}

export default DisplayDropdown