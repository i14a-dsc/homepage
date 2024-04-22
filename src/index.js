document.addEventListener("DOMContentLoaded", () => {
  const fullscreen = document.getElementById("fullscreen");
  const input = document.getElementById("search");
  const searchButton = document.getElementById("search-button");
  const dialog = document.getElementById("dialog");
  const dialogClose = document.getElementById("dialog-close");

  input.addEventListener("keydown", (event) => {
    if (event.key == "Enter") searchButton.click();
  });
  searchButton.addEventListener("click", () => {
    if (input.value)
      return window.open(`https://www.google.com/search?q=${input.value}`);
    return (dialog.open = true);
  });
  dialogClose.addEventListener("click", () => (dialog.open = false));
  fullscreen.addEventListener("click", () => {
    if (document.fullscreenElement) return document.exitFullscreen();
    document.documentElement.requestFullscreen();
  });
});
