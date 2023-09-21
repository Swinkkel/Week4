const searchShow = document.getElementById("input-show");

const submitBtn = document.getElementById("submit-data");
submitBtn.addEventListener("click", getShows);

async function getShows() {
  const show = searchShow.value;

  const url = "https://api.tvmaze.com/search/shows?q=" + show;

  const showsPromise = await fetch(url);
  const showsJSON = await showsPromise.json();

  console.log(showsJSON);

  showsJSON.forEach((element) => {
    let div1 = document.createElement("div");
    div1.className = "show-data";

    if (element.show.image) {
      let image = document.createElement("img");
      image.src = element.show.image.medium;

      div1.appendChild(image);
    }

    let div2 = document.createElement("div");
    div2.className = "show-info";

    let title = document.createElement("h1");
    title.innerText = element.show.name;

    let summary = document.createElement("p");
    summary.innerHTML = element.show.summary;

    div2.appendChild(title);
    div2.appendChild(summary);

    div1.appendChild(div2);

    document.body.appendChild(div1);
  });
}
