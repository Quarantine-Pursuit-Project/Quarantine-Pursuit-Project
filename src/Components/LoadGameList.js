// Config
import firebase from '../firebase';
// Modules
import { getDatabase, ref, push, onValue } from 'firebase/database';
import React, { useEffect, useState } from "react";

const LoadGameList = (props) => {
    console.log("loadgamelist", props.loadGame)

    props.loadGame.forEach((test) => {
        console.log("hello", test[1])
    })

    return(
        <button>Load</button>
    )

    // for each data point saved (aka each saved game in firebase) create a button that:
        // WHEN CLICKED is able to re-render the page based on the score and # of question paramters
}

export default LoadGameList