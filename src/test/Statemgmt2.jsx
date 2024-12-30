import * as React from "react";
class StateXYZ extends React.Component 
{
    state=
    {
        first: false,
        second: 3.14,
        third: "Hello",
        fourth: "Red",
        fifth: "green",
    };

    constructor() {
        super();
        // setTimeout(() => {
        //     this.setState({
        //         first: true,
        //         second: 3.14,
        //         third: "World",
        //         fourth: "Blue",
        //         fifth: "purple",
        //         sixth: "2px solid black"
        //     });
        // }, 3000);
        setInterval(() => {
            this.setState({
                first: true,
                second: 3.14,
                third: "World",
                fourth: "Blue",
                fifth: "purple",
                sixth: "2px solid black"
            });
        }, 3000);

    }
    
    render()
    {
        const { first, second, third, fourth, fifth, sixth} = this.state;
        return(
            <div>
                <button disabled={first}>My Button</button>
                <p style={{color:fourth,border:sixth}}>
                    Value of Float variable is <strong>{second}</strong>
                </p>
                <p style={{color:fifth}}>
                    Value of String variable is <strong>{third}</strong>
                </p>
            </div>
        );
    }
}
export default StateXYZ;
