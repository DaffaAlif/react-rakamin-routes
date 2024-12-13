function getCookie(name) {
  const cookieArr = document.cookie.split(";"); // Split all cookies into an array

  for (let cookie of cookieArr) {
    cookie = cookie.trim();
    if (cookie.startsWith(name + "=")) {
      return cookie.split("=")[1];
    }
  }

  return;
}

export default getCookie;
