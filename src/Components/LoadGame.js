// Config
import firebase from '../firebase';
// Modules
import { getDatabase, ref, push, onValue } from 'firebase/database';
import React, { useEffect, useState } from "react";
// import loadgameList ()
    // iterate the response data to form a list -> its getting the data from the loadGame component
    // this component will be passed within the onValue 
    // return a list with a button attached to each list item -> onClick on that button === load previous game 

/* - How does it load the save?
1) Assign the selected saves to the display game component.
2) Optional: Remove the selected save from the save game list.
2a) Automatically 
2b) Provide an option for the user */

const LoadGame = ()=>{
    const [data, setData] = useState([])
    const [loadList, setLoadList] = useState()

    useEffect(() => {
        const database = getDatabase(firebase)
        const dbRef = ref(database)

        onValue(dbRef, (response) => {
            // < list of saved games components />
            console.log(response.val())
        })
    }, [loadList])

    const handleSaveListDisplay = (e)=>{
        e.preventDefault()

        return(
            setLoadList(true)
        )
    }

    return (
        <div className='loadGameSection'>
            <div>
                <div className='loadGame'>
                    <button onClick={(e)=>{handleSaveListDisplay(e)}}>LOAD GAME</button>
                </div>
            </div>
            <ul>

            </ul>
        </div>
    );
}

export default LoadGame;