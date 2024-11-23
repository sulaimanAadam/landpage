import './background.css';
import nature from '../../assets/nature.mp4'
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpeg';
import image3 from '../../assets/image3.jpeg';

const AppBackground = ({ playStatus, heroCount }) => {
    if (playStatus) {
        return (
            <video className="background" autoPlay loop muted>
                <source src={nature} type="video/mp4" />
            </video>
        );
    } else if (heroCount === 0) {
        return <img src={image1} alt="Background 1" className="background fade-in" />;
    } else if (heroCount === 1) {
        return <img src={image2} alt="Background 2" className="background fade-in" />;
    } else if (heroCount === 2) {
        return <img src={image3} alt="Background 3" className="background fade-in" />;
    }

    return <div className="background"></div>;
};

export default AppBackground;
