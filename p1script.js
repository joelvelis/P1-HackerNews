let url = "https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=8b034ef4ea8142cba494057618a796e2";

fetch(url)
  .then(r => {
    return r.json();
  })
  .then(data => {
    let results = data.articles; 
    let storyList = document.createElement("ol"); 
    let body = document.querySelector("body");
    body.appendChild(storyList); 
    results.map(story => {  
      let storyli = document.createElement("li");
      storyli.innerHTML =
        `<a img href= ${story.url}> ${story.content}</a>`; 
      storyList.appendChild(storyli);
    });
  })
  .catch(e => {
    console.log(`An error occurred: ${e}`);
});