import { useState } from "react";
import { FaStar } from "react-icons/fa";
import './styles.css';

export default function StarRating({ noOfStars = 10 }) {
    const [currentRating, setCurrentRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleIconClick(rating: number) {
        setCurrentRating(rating)
        console.log(rating);
    }

    function handleMouseEnter(rating: number) {
        setHover(rating);
    }

    function handleMouseLeave() {
        setHover(currentRating);
    }

    return <div>
        {
            [...Array(noOfStars)].map((_, index) => {
                index += 1
                return <FaStar
                    key={index}
                    className={index <= (hover || currentRating) ? 'active' : ''}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave()}
                    onClick={() => handleIconClick(index)}></FaStar>
            })
        }
    </div>
}