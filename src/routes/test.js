const { getJson } = require("serpapi");

getJson({   
  api_key: "68fa4ec3518075d6ca9508634fa18471d49c38a6de47f535d7e8112516999142",
  engine: "google",
  q: "Sacramento Volunteering",
  google_domain: "google.com",
  gl: "us",
  hl: "en"
}, (json) => {
  console.log(json);
});