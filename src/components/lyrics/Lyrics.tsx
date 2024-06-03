
import { useRef } from 'react';
import './style.css';

const Lyrics = ({time, text, currentLineIndex} : {time: number, text: string, currentLineIndex : number}) => {
    const aktRow = useRef<number>(7);

    return (
      <>
        {/*currentLineIndex === aktRow.current ? */}
        {currentLineIndex === time
            ?
            <div className='current-line'>{text}</div>
            :
            <div>{text}</div>
        }
      </>
    )
}

export default Lyrics;