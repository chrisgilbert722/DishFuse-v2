// app/lib/auth.js
export function fakeLogin(email) {
  if (typeof window !== "undefined") {
    sessionStorage.setItem("dishfuse_user", email);
  }
}

export function fakeLogout() {
  if (typeof window !== "undefined") {
    sessionStorage.removeItem("dishfuse_user");
  }
}

export function getUser() {
  if (typeof window !== "undefined") {
    return sessionStorage.getItem("dishfuse_user");
  }
  return null;
}
