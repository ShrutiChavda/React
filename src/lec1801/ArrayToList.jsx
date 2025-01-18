import { useState, useEffect } from "react";

function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState(300); 

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer); 
    }, []);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    };

    return (
        <div>
            Time Left: {formatTime(timeLeft)}
        </div>
    );
}

export default CountdownTimer;
