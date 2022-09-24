console.log("Started youtube ad auto skip");

let adCount = 0;
const skipAd = () => {
  const btns = document.getElementsByClassName("ytp-ad-skip-button");
  if (btns && btns.length) {
    adCount += 1;
    console.log(`${adCount} ad skipped`);
    btns[0].click();
  }
};

setInterval(function () {
  skipAd();
}, 100);
