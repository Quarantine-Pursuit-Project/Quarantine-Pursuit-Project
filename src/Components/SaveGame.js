// Config
import firebase from '../firebase';
// Modules
import { getDatabase, ref, push } from 'firebase/database';

/* Save game button:
I) What does it record?
1) The number of correct and/or wrong choices - counters. There are two ways to save this:
    1a) Save the number of correct answer only. If needed, the number of wrong answer = arrayOfGenerateQuestions.length - # of correct answer. This is the method used for the Save Game Component.
    1b) Record and save both of them in an arrayOfScore=[rightChoiceCounter, wrongChoiceCounter]
2) The array of question generated by the API.
3) The index of the question being played at the moment of saving.
II) How does it store it in the Firebase (data structure)?
1) In an array. This is the method used for the Save Game Component.
2) In an array of object (???) */

const SaveGame = (props)=>{

    const userSaveInfo = [
        props.score, 
        props.questionList
    ]
    const handleUserSave = ()=>{
        // Creating ref to the db
        const database = getDatabase(firebase);
        const dbRef = ref(database);
        
        if(props.score || props.questionList){
            // Adding new save to our firebase db
            push(dbRef, userSaveInfo);
        } else {
          alert("Please make a selection")
        }
    }
    // REMOVE TEST
    const handleTest = ()=>{
        props.testFunction();
    }

    return (
        <div className="saveButton">
            {/* REMOVE TEST */}
            <button onClick={()=>{handleTest()}}>TEST</button>
            <button onClick={()=>{handleUserSave()}}>SAVE GAME</button>
        </div>

    );
}

export default SaveGame;