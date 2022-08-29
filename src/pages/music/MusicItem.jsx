import { Container, Content } from './MusicItem.style'
import dynamic from 'next/dynamic'

const DynamicMusicPlayer = dynamic(() => import('./MusicPlayer'), {
    ssr: false,
  })
  
const MusicItem = () => {

    return(
        <Container>
            <Content>
                MusicItem
                <DynamicMusicPlayer />
            </Content>            
        </Container>
    )
}

export default MusicItem