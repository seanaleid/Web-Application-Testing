import React from "react";


const Display =(props) =>{
    console.log(props);

    return(
        <div>
            <div>
                <div>
                    <h2>Balls:</h2>
                    <div>{props.ball}</div>
                </div>
                <div>
                    <h2>Strikes:</h2>
                    <div>{props.strike}</div>
                </div>
            </div>
        </div>
        
    )
}

export default Display;

// export const addFoul = currentFoul => {
//     return currentFoul + 1;
// };

// export const addStrike = currentStrike => {
//     return currentStrike + 1;
// };

// //
// export const addHit = currentHit => {
//     return currentHit + 1;
// };