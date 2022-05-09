const DisplayDropdown = ({getCategory}) => {
    // const categoryName = (getCategory) => {
    //     getCategory.map
    // }

    return (
        <section>
            <h2>This component is linked to Dropdown.js (and Dropdown.js) is a component that links to parent "App.js"</h2>
            {
                getCategory.map(getCategory => {
                    // const categoryName = getCategory.name

                    return(
                        // step 1: dynamically add categories to dropdown
                        <div>
                            <select name="category" id="category">
                                <option value="placeholder" disabled>placeholder</option>
                                <option value={getCategory.name}>{getCategory.name}</option>
                            </select>
                        </div>

                        // step 2: save whatever the user selects for Kyler's component
                    )
                })
            }
        </section>
            
    )
}

export default DisplayDropdown