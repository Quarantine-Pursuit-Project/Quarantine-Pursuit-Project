const DisplayDropdown = ({getCategory}) => {

    return (
        <section>
            <h2>This component is linked to Dropdown.js (and Dropdown.js) is a component that links to parent "App.js"</h2>
            <select name="category" id="category">
                <option value="placeholder" disabled>placeholder</option>
                    {getCategory.map(category => {
                            const { name, id } = category;
                            return <option value={id}>{name}</option>
                        })
                    }
            </select>
        </section>
            
    )
}

export default DisplayDropdown