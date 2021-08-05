const TOKEN_KEY = 'token'

function clearToken() {
  localStorage.removeItem(TOKEN_KEY)
}

function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token)
}

function getToken() {
  return localStorage.getItem(TOKEN_KEY)
}

export const storage = {
  setToken,
  getToken,
  clearToken,
}
