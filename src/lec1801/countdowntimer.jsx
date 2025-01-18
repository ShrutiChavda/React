import { useState, useEffect } from "react";

function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState(300);

    useEffect(() => {
        const timer = timeLeft > 0 && setInterval(() => setTimeLeft((t) => t - 1), 1000);
        return () => clearInterval(timer);
    }, [timeLeft]);

    const formatTime = (time) =>
        `${String(Math.floor(time / 60)).padStart(2, "0")}:${String(time % 60).padStart(2, "0")}`;

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", fontSize: "2rem" }}>
            {formatTime(timeLeft)}
        </div>
    );
}

export default CountdownTimer;
