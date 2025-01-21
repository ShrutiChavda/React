import {useState, useEffect} from "react";
import {Promise} from "bluebird";
function fetchUserData()
{
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve({id: "1", name: "RKU"});
        }, 3000);
    });
}
function UserComp1()
{
    const [id, setId] = useState("loading...");
    const [name, setNamed] = useState("loading...");
    useEffect(()=>{
        const promise = fetchUserData().then((user)=>{
            setId(user.id);
            setNamed(user.name);
        });
        return ()=>{
            promise.cancel();
        };
    });
    // return <div>ID: {id}, Name: {name}</div>;
    return(
        <div>
            <p>ID: {id}</p>
            <p>Name: {name}</p>
        </div>
    );
}
export default UserComp1;


//create a reg form wiht following details:
//when use enter deatils it should be visible under the reg form.
// 1. Cricketer Name (Textbox) min: 10 char of name
// 2. Gender (Radio Button)
// 3. Email (Textbox) format validation
// 4. Types of matches played (checkbox)
// ODI, TEST, T20, Dometic 
// 5. State (Dropdown)
// 6. Date of Birth