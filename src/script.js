document.addEventListener("DOMContentLoaded", () => {
  const transgender = document.getElementById("transgender");
  const menu = document.getElementById("menu");
  const drawer = document.getElementById("drawer");
  const fullscreen = document.getElementById("fullscreen");
  transgender.addEventListener("click", () => {
    window.open("https://onimai.jp", "_blank");
  });
  menu.addEventListener("click", () => {
    if (drawer.open) return (drawer.open = false);
    drawer.open = true;
  });
  fullscreen.addEventListener("click", () => {
    if (document.fullscreenElement) return document.exitFullscreen();
    document.documentElement.requestFullscreen();
  });
});
