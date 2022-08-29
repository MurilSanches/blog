import { loginEndpoint } from "../../../spotify";
import { Container, Button, Link, Logo } from './Login.style'

const Login = () => {
  return (
    <Container>
      <Logo
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="logo-spotify"
      />
      <Link href={loginEndpoint}>
        <Button>LOG IN</Button>
      </Link>
    </Container>
  );
}

export default Login