import './hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';


import right_arrow from '../../assets/right_arrow.png';

const Apphero = ({ heroData, setHeroCount, heroCount, setPlayStatus, playStatus }) => {
    return ( 
        <div className="hero">
            <div className="hero-text">
                <p>{heroData.text1}</p>
                <p>{heroData.text2}</p>
            </div>
            
            <div className="hero-explore">
                <p>Explore the future</p>
                <img src={right_arrow} alt="Right arrow" style={{ width: 100 }} />
            </div>
            
            <div className="hero-dot-play">
                <ul className="hero-dots">
                    <li onClick={() => setHeroCount(0)} className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}></li>
                    <li onClick={() => setHeroCount(1)} className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}></li>
                    <li onClick={() => setHeroCount(2)} className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}></li>
                </ul>
            </div>
            
            <div className="hero-play">
                <FontAwesomeIcon 
                    icon={playStatus ? faPause : faPlay} 
                    onClick={() => setPlayStatus(!playStatus)} 
                    style={{ cursor: 'pointer', fontSize: '24px', marginRight: '8px' }} 
                />
                <p>See the video</p>
            </div>
        </div>
    );
}

export default Apphero;
