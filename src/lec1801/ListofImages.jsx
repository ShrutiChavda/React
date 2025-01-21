import { useState, useEffect } from "react";
import img1 from "../../public/images/1.jpg";
import img2 from "../../public/images/2.jpg";
import img3 from "../../public/images/3.jpg";
import img4 from "../../public/images/4.jpg";

function ImageSlider() {
    const images = [img1, img2, img3, img4];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000); 

        return () => clearInterval(interval); 
    }, [images.length]);

    return (
        <div>
            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                style={{ width: "1350px", height: "500px", objectFit: "cover" }}
            />
        </div>
    );
}

export default ImageSlider;
