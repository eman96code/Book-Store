let searchBox = document.querySelector(".searchBox");
let inputSearch = document.querySelector(".inputSearch");
let SearchBtn = document.querySelector(".searchBtn");
let booksCard = document.querySelector(".booksCard");
let requestResponse;
let books;
// -----------------------------software Request--------------------------------------
let inputWord = "frontend development";
function getData(inputWord) {
  let xhr = new XMLHttpRequest();
  let word = encodeURIComponent(inputWord);
  const URL = `https://www.googleapis.com/books/v1/volumes?q=${word}`;
  xhr.open("GET", URL);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      requestResponse = xhr.responseText;
      books = JSON.parse(requestResponse);
      let items = books.items;
      console.log(items);
      retriveBooks(items);
    } else {
      booksCard.innerHTML = " Failed to load this Content";
    }
  };
  xhr.send();
}

getData(inputWord);
// ////////////////////////////////////Retrive Function/////////////////////////////////////
function retriveBooks(items) {
  booksCard.innerHTML = "";
  for (let i = 0; i < items.length; i++) {
    let bookCard;
    let imageThumNail;
    let imageCard;
    let imageDetails;
    let headingCard;
    let paragraphCard;
    let bookAuther;
    let detailsBtn;
    let detailsBtnLink;
    bookCard = document.createElement("div");
    bookCard.setAttribute("class", "bookCard");
    imageThumNail = document.createElement("div");
    imageThumNail.setAttribute("class", "imageThumNail");
    imageCard = document.createElement("img");
    imageCard.setAttribute("class", "imageCard");
    imageCard.setAttribute(
      "src",
      items[i]["volumeInfo"]["imageLinks"]["thumbnail"]
    );
    imageDetails = document.createElement("div");
    imageDetails.setAttribute("class", "imageDetails");
    headingCard = document.createElement("h4");
    headingCard.setAttribute("class", "headingCard");
    headingCard.innerHTML = items[i]["volumeInfo"]["title"];
    paragraphCard = document.createElement("p");
    paragraphCard.setAttribute("class", "paragraphCard");
    paragraphCard.innerHTML =
      items[i]["volumeInfo"]["description"] || "NO Available Describtion";
    bookAuther = document.createElement("span");
    bookAuther.setAttribute("class", "bookAuther");
    bookAuther.innerHTML = items[i]["volumeInfo"]["authors"];
    detailsBtn = document.createElement("button");
    detailsBtn.classList.add("details", "btn");
    detailsBtnLink = document.createElement("a");
    detailsBtnLink.setAttribute("class", "#");
    detailsBtnLink.innerHTML = "View Details";
    booksCard.append(bookCard);
    bookCard.append(imageThumNail, imageDetails);
    imageThumNail.append(imageCard);
    imageDetails.append(headingCard, paragraphCard, bookAuther, detailsBtn);
    detailsBtn.append(detailsBtnLink);
    detailsBtn.addEventListener("click", (e) => {
      e.preventDefault();
      showDetails(items[i]);
    });
  }
}
// ////////////////////////////////////Display Books Function/////////////////////////////////////
SearchBtn.addEventListener("click", displayBooks);
function displayBooks() {
  if (inputSearch.value.trim() !== "") {
    getData(inputSearch.value);
  } else {
    console.log("Error");
  }
}
// ////////////////////////////////////showDetails Function/////////////////////////////////////
function showDetails(ele) {
  localStorage.setItem("bookDetails", JSON.stringify(ele));
  window.location.href = "./bookDetails.html";
}
