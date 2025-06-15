// Hardcoded list of YouTube channel handles to block
const blockedHandles = [
  "@placeholder",
  "@usb-c-port",
  "@placeholer"
];

function blockVideosByHandle() {
  document.querySelectorAll('ytd-video-renderer, ytd-grid-video-renderer, ytd-rich-item-renderer')
    .forEach(video => {
      const channelLink = video.querySelector('a[href^="/@"]');
      if (channelLink) {
        const handle = channelLink.getAttribute("href").split("/")[1]; // e.g. "@MrBeast"
        if (blockedHandles.includes(handle)) {
          video.style.display = "none";
        }
      }
    });
}

// Observe dynamic page changes (YouTube lazy loads)
const observer = new MutationObserver(blockVideosByHandle);
observer.observe(document.body, { childList: true, subtree: true });

// Initial run
blockVideosByHandle();
