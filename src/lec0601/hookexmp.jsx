import * as React from "react";
function StateExample()
{
    const [name] = React.useState("RKU");
    return <div>{name}</div>;
}
export default StateExample;