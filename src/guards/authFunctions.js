export function setToken(token) {
  localStorage.setItem("token", token);
}

export function getToken() {
  return localStorage.getItem("token");
}

export function removeToken() {
  localStorage.removeItem("token");
}

export function removeRole() {
  localStorage.removeItem("role");
}

export function setRole(role) {
  localStorage.setItem("role", role);
}

export function getRole() {
  return localStorage.getItem("role");
}
