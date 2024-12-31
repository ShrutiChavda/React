import MyButton from "./mybtn";
import MyList from "./mylist";
import * as React from "react";

class MyComponent extends React.Component {
    state = {
        abc: "My button",
        xyz: true,
        items: ["a", "b", "c", "d"],
    };

    constructor(props) {
        super(props);
        setTimeout(() => {
            this.setState({
                abc: "Updated button",
                xyz: false,
                items: ["e", "f", "g", "h"],
            });
        }, 3000);
    }

    render() {
        const { abc, xyz, items } = this.state;
        return (
            <div>
                <MyButton abc={abc} xyz={xyz} />
                <MyList items={items} />
            </div>
        );
    }
}

export default MyComponent;
