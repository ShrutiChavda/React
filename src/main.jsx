import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Purefunc from './test/purefunc';
// import MyComponent from './test/combined';
// import Component1 from './test/Component1'
// import InputTest from './test/Component3'
// import Timetable from './test/timetable';
// import StateABC from './test/Statemgmt';
// import StateXYZ from './test/Statemgmt2';
// import StateMerge from './test/Statemgmt3';
// import MyButton3 from "./test/purefunc2";
import FuncComp1 from "./test/hookcomp1";

// import './index.css'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Component1/> */}
    {/* <InputTest/> */}
    {/* <Timetable/> */}
    {/* <StateABC/> */}
    {/* <StateXYZ/> */}
    {/* <StateMerge/> */}
    {/* <MyComponent/> */}
    {/* <Purefunc abc={true} xyz={"Hello"}/>
    <Purefunc abc={false} xyz={"How"}/>
    <Purefunc abc={true} xyz={"Are you"}/> */}
    {/* <MyButton3/>
    <MyButton3 abc={true} def={"hello"}/>
    <MyButton3 abc={true}/>
    <MyButton3 def={"xyzzzz"}/>  */}
    <FuncComp1/>
  </StrictMode>,
);
