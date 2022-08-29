import { useState, useRef } from 'react'

const MusicPlayer = () => {
    const [playing, setPlaying] = useState(false)
    const sound = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';  
    const musicPlayer = useRef(new Audio(sound));
    
    const togglePlay = () => {
        setPlaying(!playing)
        playing ? musicPlayer.current?.pause() : musicPlayer.current?.play()
    }

    return (
        <div>
            <button onClick={togglePlay}>{playing ? 'Pause' : 'Play'}</button>
        </div>
    )
}

export default MusicPlayer