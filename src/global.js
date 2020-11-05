if ('serviceWorker' in navigator) {
  // eslint-disable-next-line compat/compat
  navigator.serviceWorker.ready.then(registration => {
    registration.unregister();
  });
}