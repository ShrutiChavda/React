import * as React from "react";

class Timetable extends React.Component {
    render() {
        return (
            <div>
                <h2>Timetable of 6CEA</h2>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Monday</th>
                            <th>Tuesday</th>
                            <th>Wednesday</th>
                            <th>Thursday</th>
                            <th>Friday</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>8:00 to 8:55</td>
                            <td rowSpan={2}>React</td>
                            <td rowSpan={2}>React</td>
                            <td rowSpan={2}>AI/ML</td>
                            <td rowSpan={2}>React</td>
                            <td rowSpan={2}>PD</td>
                        </tr>
                        <tr>
                            <td>8:55 to 9:45</td>
                        </tr>
                        <tr>
                            <td>Class/Lab Location</td>
                            <td>LL1</td>
                            <td>LL5</td>
                            <td>LL1</td>
                            <td>LL1</td>
                            <td>118</td>
                        </tr>
                        <tr>
                            <td>9:45 to 10:00</td>
                            <td colSpan={5} align="center">TEA BREAK</td>
                        </tr>
                        <tr>
                            <td>10:00 to 10:50</td>
                            <td rowSpan={2}>.NET</td>
                            <td rowSpan={2}>.NET</td>
                            <td rowSpan={2}>TOC</td>
                            <td rowSpan={2}>AI/ML</td>
                            <td>AI/ML</td>
                        </tr>
                        <tr>
                            <td>10:50 to 11:40</td>
                            <td>TOC</td>
                        </tr>
                        <tr>
                            <td>Class/Lab Location</td>
                            <td>LL1</td>
                            <td>LL1</td>
                            <td>201</td>
                            <td>LL6</td>
                            <td>117</td>
                        </tr>
                        <tr>
                            <td>11:40 to 12:30</td>
                            <td colSpan={5} align="center">LUNCH BREAK</td>
                        </tr>
                        <tr>
                            <td>12:30 to 1:20</td>
                            <td rowSpan={2}>PD</td>
                            <td rowSpan={2}>PD</td>
                            <td rowSpan={2}>PD</td>
                            <td rowSpan={2}>.NET</td>
                            <td rowSpan={2}>.NET</td>
                        </tr>
                        <tr>
                            <td>1:20 to 2:10</td>
                        </tr>
                        <tr>
                            <td>Class/Lab Location</td>
                            <td>Library</td>
                            <td>118</td>
                            <td>Library</td>
                            <td>LL3</td>
                            <td>Library</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Timetable;