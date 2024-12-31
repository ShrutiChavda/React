import * as React from "react";
// import { useState } from "react";
function FuncComp1(){
    const [name] = React.useState("Hello");
    return <h1>Hello {name}</h1>;
}
export default FuncComp1;