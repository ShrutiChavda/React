import * as React from "react";

function fetchUserData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({x: "Rku Student", y: 1});
        }, 5000);
    })
}

function ApiSimulation(){
    const [name, setName] = React.useState("Loading...");
    const [id, setId] = React.useState("Loading...");

    React.useEffect(() => {
        fetchUserData().then((abc) => {
            setName(abc.x);
            setId(abc.y);
        });
    }, []);

    return (
        <div>
            User: {name} <br />
            Id: {id}
        </div>
    );
}

export default ApiSimulation;

//1. Implement countdown timer with useeffect
//  MM:SS  5:00 04:59 04:00 03:59
//2. Pass array of strings as arguments
// convert array to unordered list
