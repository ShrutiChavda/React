import { useState } from "react";

function StateExample3() {
    const [color, setColor] = useState("green");
    const [styles, setStyles] = useState({ underline: false, bold: false, italic: false });

    return (
        <div>
            <input type="radio" name="color" onChange={() => setColor("Yellow")} />
            {"Yellow"}
            <br />
            <input type="radio" name="color" onChange={() => setColor("Red")} />
            {"Red"}
            <br />
            <input type="radio" name="color" onChange={() => setColor("Blue")} />
            {"Blue"}
            <br />
            <input type="checkbox" name="Underline" onChange={(e) => setStyles({ ...styles, underline: e.target.checked })} />{"Underline"}<br />
            <input type="checkbox" name="Bold" onChange={(e) => setStyles({ ...styles, bold: e.target.checked })} />{"Bold"}<br />
            <input type="checkbox" name="Italic" onChange={(e) => setStyles({ ...styles, italic: e.target.checked })} />{"Italic"}<br />

            <p
                style={{
                    color: color,
                    textDecoration: styles.underline ? "underline" : "none",
                    fontWeight: styles.bold ? "bold" : "normal",
                    fontStyle: styles.italic ? "italic" : "normal",
                }}
            >
                This is text content for display.
            </p>
        </div>
    );
}

export default StateExample3;
