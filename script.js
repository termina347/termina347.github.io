function redirectIfWiiU() {
  const ua = navigator.userAgent;
  if (ua.includes("Nintendo WiiU")) {
    window.location.href = "wiiu-test.html";
  } else {
    alert("Cette page est uniquement accessible depuis une Wii U.");
  }
}
