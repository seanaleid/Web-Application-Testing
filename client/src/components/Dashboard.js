import React, {useState} from "react";
import Display from "./Display";

//version 1 --> WET code
// const addBall = currentBall => {
//     return currentBall + 1;
// };

// const addStrike = currentStrike => {
//     return currentStrike + 1;
// };

// const addHit = currentHit => {
//     return currentHit + 1;
// }

//DRY code below
export const addValue = currentValue => {
    return currentValue + 1;
  };
  

const Dashboard = () => {
    //set state for buttons
    const [ball, setBall] = useState(0);
    const [strike, setStrike]=useState(0);
    const [hit, setHit] =useState(0);
    

    //functions to add to set state
    //give it current data and how to set it 
    function newBall() {
        setBall(addValue(ball));
        if (ball === 4) {
            return setBall(0), setStrike(0);
        } 
    };

    function newStrike() {
        setStrike(addValue(strike));
        if (strike === 3) {
            return setBall(0), setStrike(0);
        } 
    };

    function newFoul() {
        setStrike(addValue(strike));
        if (strike === 2) {
            return setStrike(2);
        } 
    };

    function newHit() {
        setHit(addValue(hit));
        return setBall(0), setStrike(0);
    }

    return (
        <div>
            <div className={"container"}>
                <h1>Current Batter</h1>
                <Display ball={ball} strike={strike} />
                <button 
                        className="dashboard-button ball"
                        onClick={newBall}>
                        Ball
                </button>
                <button 
                        className="dashboard-button strike"
                        onClick={newStrike}>
                        Strike
                </button>
                <button 
                        className="dashboard-button hit"
                        onClick={newHit}>
                        Hit
                </button>
                <button 
                        className="dashboard-button hit"
                        onClick={newFoul}>
                        Foul
                </button>
            </div>
        </div>
    )
}

export default Dashboard;
