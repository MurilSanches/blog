const authEndpoint = "https://accounts.spotify.com/authorize?"
const clientId = "50918368ce594d029c3a4465e84d1c52"
const redirectUri = "https://localhost:3000"
const scopes = ['user-library-read', 'playlist-read-private']

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scopes=${scopes.join("%20")}&response_type=token&show_dialog=true` 