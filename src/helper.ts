type Resolve = () => void;

export const domReady = new Promise<void>((resolve: Resolve) => {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", resolve);
  } else {
    resolve();
  }
});

export const windowReady = new Promise<void>((resolve: Resolve) => {
  if (document.readyState === "complete") {
    resolve();
  } else {
    window.addEventListener("load", resolve);
  }
});
