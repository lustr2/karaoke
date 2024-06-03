import './App.css';
import Player from './components/player/Player';
import song from '../public/fools-garden-lemon-tree.mp3'
import textSong from './lyrics-lines';
import Lyrics from './components/lyrics/Lyrics';
import { useEffect, useState } from 'react';


function App() {
  const [activeRow, setActiveRow] = useState<number>(8);

  useEffect (() => {

  }, [activeRow]);

  return (
    <>
      <div className="container">
        <h3>Fools Garden: Lemon Tree</h3>
      </div>
      <Player src={song} />
      <div className='lyrics'>
        {textSong.map((t, index) => <Lyrics key={index} time={index} text={t.text} currentLineIndex={activeRow}/>)}
        </div>
    </>
  )
}

export default App;
