console.log("Started youtube ad auto skip");

let adVideoCount = 0;
let adOverlayCount = 0;
const skipAd = () => {
  const adSkipButtons = document.getElementsByClassName("ytp-ad-skip-button");
  if (adSkipButtons && adSkipButtons.length) {
    adSkipButtons[0].click();
    adVideoCount += 1;
    console.log(`${adVideoCount} ad video skipped`);
  }

  const adOverlayButtons = document.getElementsByClassName(
    "ytp-ad-overlay-close-button"
  );
  if (adOverlayButtons && adOverlayButtons.length) {
    adOverlayButtons[0].click();
    adOverlayCount += 1;
    console.log(`${adOverlayCount} ad overlay skipped`);
  }
};

setInterval(function () {
  skipAd();
}, 100);
