const image = document.querySelector("img");
function imageToggler() {
  let isTrue = false;
  setInterval(() => {
    if (isTrue) {
      image.setAttribute(
        "src",
        "https://tse2.mm.bing.net/th?id=OIP.xgelqBSUWgp4gbdbOEDTvQHaF9&pid=Api&P=0&h=180"
      );
    } else {
      image.setAttribute(
        "src",
        "https://tse4.mm.bing.net/th?id=OIP.HUwL6S9Hx_pkDJcM0pkP8wHaEK&pid=Api&P=0&h=180"
      );
    }
    isTrue = !isTrue;
  }, 1000);
}
imageToggler();