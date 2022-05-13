import { getDatabase, ref, onValue } from 'firebase/database';
import firebase from '../firebase';

/* - How does it load the save?
1) Assign the selected saves to the display game component.
2) Optional: Remove the selected save from the save game list.
2a) Automatically 
2b) Provide an option for the user */

const LoadGame = ()=>{

    const handleSaveListDisplay = ()=>{

    }

    return (
        <div className='loadGameSection'>
            <div>
                <div className='loadGame'>
                    <button onClick={()=>{handleSaveListDisplay()}}>LOAD GAME</button>
                </div>
            </div>
            <ul>

            </ul>
        </div>
    );
}

export default LoadGame;