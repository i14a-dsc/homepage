document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('search');
  const dialog = document.getElementById('dialog');
  const dialogClose = document.getElementById('dialog-close');

  input.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
      if (input.value) return window.open(`https://www.google.com/search?q=${input.value}`);
      return (dialog.open = true);
    }
  });

  dialogClose.addEventListener('click', () => (dialog.open = false));
  /*
  fullscreen.addEventListener('click', () => {
    if (document.fullscreenElement) return document.exitFullscreen();
    document.documentElement.requestFullscreen();
  });*/
});
