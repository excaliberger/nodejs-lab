const path = require("path");
const fs = require("fs");
const rp = require("request-promise");
const fetch = require("isomorphic-fetch");

const redditImageDownload = async () => {
  const res = await fetch ("https://reddit.com/r/programmingHumor.json")
  const arrayBuffer = await res.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  JSON.parse(Buffer.from(arrayBuffer).toString()).data.children.forEach(article => {
    if (
      path.extname(article.data.url) === ".png" ||
      path.extname(article.data.url) === ".jpg" ||
      path.extname(article.data.url) === ".gif"
    ) {
      fs.writeFileSync(
        path.join(__dirname, `./downloads/${article.data.id}`),
        article.data.url
      );
    }
  });
};

redditImageDownload();