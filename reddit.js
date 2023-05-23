const path = require("path");
const fs = require("fs");
const rp = require("request-promise-any");
const fetch = require("isomorphic-fetch");

const dataPath = path.join(__dirname, "programming-humor.json");

const redditCall = async () => {
  const res = await fetch("https://reddit.com/r/programmingHumor.json");
  
  const arrayBuffer = await res.arrayBuffer();

    let articles = [];
    JSON.parse(Buffer.from(arrayBuffer).toString()).data.children.forEach(item => {
      articles.push({
        title: item.data.title,
        url: item.data.url,
        author: item.data.author
      });
    });
    console.log(articles);
    fs.writeFileSync(dataPath, JSON.stringify(articles)); 

  console.log(temp);
}

redditCall();


