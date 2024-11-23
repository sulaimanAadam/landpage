import { useState, useEffect } from "react";
import AppBackground from "./components/Background/background";
import AppNavbar from "./components/Navbar/navbar";
import Apphero from "./components/Hero/hero";

// Static data defined outside the component to prevent re-initialization
const heroData = [
    { text1: "Dive into", text2: "what you love" },
    { text1: "Indulge", text2: "your passion" },
    { text1: "Dive into", text2: "your passions" },
];

const App = () => {
    const [heroCount, setHeroCount] = useState(2);
    const [playStatus, setPlayStatus] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setHeroCount((count) => (count === 2 ? 0 : count + 1));
        }, 3000);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <AppBackground playStatus={playStatus} heroCount={heroCount} />
            <AppNavbar />
            <Apphero
                setPlayStatus={setPlayStatus}
                heroData={heroData[heroCount]}
                heroCount={heroCount}
                setHeroCount={setHeroCount}
                playStatus={playStatus}
            />
        </div>
    );
};

export default App;
