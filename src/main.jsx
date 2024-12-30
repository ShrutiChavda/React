import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Component1 from './test/Component1'
// import InputTest from './test/Component3'
// import Timetable from './test/timetable';
// import StateABC from './test/Statemgmt';
// import StateXYZ from './test/Statemgmt2';
import StateMerge from './test/Statemgmt3';

// import './index.css'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Component1/> */}
    {/* <InputTest/> */}
    {/* <Timetable/> */}
    {/* <StateABC/> */}
    {/* <StateXYZ/> */}
    <StateMerge/>
  </StrictMode>,
);
