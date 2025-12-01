function updateStoryToIndex(obj) {
    if (Array.isArray(obj)) {
      for (let i = 0; i < obj.length; i++) {
        if (typeof obj[i] === "string" && obj[i].includes("story.html")) {
          console.log(`Updating: ${obj[i]} to index.html`);
          obj[i] = obj[i].replace("story.html", "index.html");
        } else {
          updateStoryToIndex(obj[i]);
        }
      }
    } else if (typeof obj === "object" && obj !== null) {
      for (let key in obj) {
        if (typeof obj[key] === "string" && obj[key].includes("story.html")) {
          console.log(`Updating: ${obj[key]} to index.html`);
          obj[key] = obj[key].replace("story.html", "index.html");
        } else {
          updateStoryToIndex(obj[key]);
        }
      }
    }
  }