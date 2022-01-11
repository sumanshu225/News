// Class of News

class news {
  constructor(category, country, source, link) {
    this.category = category;
    this.country = country;
    this.source = source;
    this.link = link;
  }

  // For generating link
  setLink() {
    if (this.category == "") {
      if (this.country == "") {
        if (this.source == "") {
          this.link = `https://newsapi.org/v2/top-headlines?language=en&apiKey=${apiKey}`;
        } else {
          this.link = `https://newsapi.org/v2/top-headlines?language=en&sources=${this.source}&apiKey=${apiKey}`;
        }
      } else {
        this.link = `https://newsapi.org/v2/top-headlines?language=en&country=${this.country}&apiKey=${apiKey}`;
      }
    } else {
      this.link = `https://newsapi.org/v2/top-headlines?language=en&category=${this.category}&apiKey=${apiKey}`;
    }
    console.log(this.link);
  }

  setNews() {
    console.log(this.link);
    const xhr = new XMLHttpRequest();

    xhr.open("GET", this.link, true);
    // console.log(`Request sent`);

    xhr.onprogress = function () {
      // console.log(`on progess`);
      document.getElementById(`newscointainer`).innerHTML = `
                                                                  <div class="loader">
                                                                    <header>Loading</header>
                                                                    <div class="linesBox">
                                                                      <div class="line"></div>
                                                                      <div class="line"></div>
                                                                      <div class="line"></div>
                                                                      <div class="line"></div>
                                                                      <div class="line"></div>
                                                                      <div class="line"></div>
                                                                      <div class="line"></div>
                                                                      <div class="line"></div>
                                                                      <div class="line"></div>
                                                                      <div class="line"></div>
                                                                      <div class="line"></div>
                                                                      <div class="line"></div>
                                                                      <div class="line"></div>
                                                                      <div class="line"></div>
                                                                      <div class="line"></div>
                                                                      <div class="line"></div>
                                                                    </div>
                                                                  </div>
                                                            `;
    };

    xhr.onload = function () {
      if (xhr.status == 200) {
        let article = JSON.parse(xhr.responseText).articles;

        let newsBox = "<header><b>BREAKING NEWS : </b> </header>";

        for (let i in article) {
          newsBox += `
                                  <div class="newsBox">
                                        <div class="newsHeading">
                                          <header>
                                            <span>${article[i].title}</span>
                                          </header>
                                          <i class="fas fa-caret-down down"></i>
                                        </div>
                                        <div class="newsContent">
                                          <div class="content">
                                            <p>
                                              ${article[i].description}
                                            </p>
                                            <a href="${article[i].url}" target="_blank">Read More</a>
                                            <hr />
                                            <div class="date"><b>Published At :</b>${article[i].publishedAt} </div>
                                          </div>
                                          <div class="image">
                                            <img
                                              src="${article[i].urlToImage}"
                                              alt="Image Unavailable"
                                            />
                                          </div>
                                        </div>
                                  </div>
                       `;
        }

        // Adding to innerHTml
        document.getElementById(`newscointainer`).innerHTML = newsBox;

        // For Clicking Button
        let btn = document.querySelectorAll(`.down`);

        btn.forEach(function (element, index) {
          // console.log(`Button clicked at ${index}`);

          element.addEventListener(`click`, function () {
            let newsContent = element.parentNode.nextElementSibling;
            if (JSON.stringify(element.classList).includes("active")) {
              element.classList.remove(`active`);
              newsContent.style.maxHeight = "0px";
              newsContent.style.backgroundColor = "rgba(6, 49, 70, 0.4)";
              newsContent.children[0].style.opacity = "0";
              newsContent.children[1].style.opacity = "0";
            } else {
              element.classList.add(`active`);
              newsContent.style.maxHeight = "20rem";
              newsContent.style.backgroundColor = " var(--txtColor)";
              newsContent.children[0].style.opacity = "1";
              newsContent.children[1].style.opacity = "1";
            }
          });
        });
      } else {
        document.getElementsByTagName(
          "body"
        )[0].innerHTML = `<b>Error occured Status ${xhr.status}</b>`;
      }
    };

    xhr.send();
  }
}

// Default link
let link = `https://newsapi.org/v2/top-headlines?language=en&apiKey=${apiKey}`;

// Creating a news obj
var newsObj = new news(``, ``, ``, link);
newsObj.setNews();

// on selecting categories updating the class object
function selectChoice(choice, type, callback) {
  if (type == "category") {
    newsObj.category = choice;
  } else if (type == "country") {
    newsObj.country = choice;
  } else {
    newsObj.source = choice;
  }

  let checkBox = document.getElementById(`checkBox`);
  checkBox.checked = false;
  show();
  callback();
  newsObj.setNews();
}

// callback function to generate link
function generateLink() {
  newsObj.setLink();
}
