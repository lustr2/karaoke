import { useEffect, useRef, useState } from "react";
import './style.css';
import lyricsLines from "../../lyrics-lines";

const Player = ({ src } : {src : string}) => {
    const [playing, setPlaying] = useState<boolean>(false);
    const audioRef = useRef<HTMLAudioElement>(null!);

    useEffect (() => {
        if (!playing) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
    }, [playing]);

    const handlePlay = () => {
        setPlaying(!playing);
    }

    return (
        <>
          <div className="player-controls">
            <audio ref={audioRef} src={src} />
            <button className={playing ? 'play-button pause' : 'play-button play'} onClick={handlePlay}> </button>
          </div>
        </>
    )
}

export default Player;