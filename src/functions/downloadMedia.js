const proxy = "https://proxy-delta-blush.vercel.app/?url=";

export async function download(url) {
  return new Promise((res, rej) => {
    fetch(proxy + url)
      .then((res) => res.blob())
      .then((file) => {
        const tempUrl = URL.createObjectURL(file);
        const aTag = document.createElement("a");
        aTag.href = tempUrl;
        aTag.download = url.replace(/^.*[\\\/]/, "");
        document.body.appendChild(aTag);
        aTag.click();
        URL.revokeObjectURL(tempUrl);
        aTag.remove();
        res();
      })
      .catch((err) => {
        rej(err);
      });
  });
}
