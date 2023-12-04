let bookDetail = JSON.parse(localStorage.getItem("bookDetails")) || [];
let detailsSection = document.querySelector(".detailsSection .container");
function displayDetails() {
  let bookCover = document.createElement("div");
  bookCover.className="bookCover"
  let bookCoverImg = document.createElement("img");
  bookCoverImg.setAttribute(
    "src",
    `${bookDetail["volumeInfo"]["imageLinks"]["thumbnail"]}`
  );
  bookCoverImg.className = "bookCoverImg";
  let describtionDetails = document.createElement("div");
  describtionDetails.className = "describtionDetails";
  let bookTitle = document.createElement("h1");
  bookTitle.className = "bookTitle";
  bookTitle.innerHTML = `${bookDetail["volumeInfo"]["title"]}`;
  let bookAuthor = document.createElement("p");
  bookAuthor.className = "bookAuthor";
  bookAuthor.innerHTML = `Written By: ${bookDetail["volumeInfo"]["authors"]}` || "Not Available";
  let bookDescribtion = document.createElement("p");
  bookDescribtion.className = "bookDescribtion";
  bookDescribtion.innerHTML = `${
    bookDetail["volumeInfo"]["description"] || "Not Available"
  }`;
  let bookCategorie = document.createElement("h4");
  bookCategorie.className = "bookCategorie";
  bookCategorie.innerHTML = `Book Categorie: ${bookDetail["volumeInfo"]["categories"]}` || "Not Available";
  let publishedDate= document.createElement("h4");
  publishedDate.className = "publishedDate";
  publishedDate.innerHTML = `Published Date: ${bookDetail["volumeInfo"]["publishedDate"]}` || "Not Available";
  let pageCount= document.createElement("h4");
  pageCount.className = "pageCount";
  pageCount.innerHTML = `Page Count: ${bookDetail["volumeInfo"]["pageCount"]}` || "Not Available";
  let purchaseButton = document.createElement("a");
  purchaseButton.className = "purchaseButton";
  purchaseButton.innerHTML = "Buy Now";
  detailsSection.append(bookCover, describtionDetails);
  bookCover.append(bookCoverImg);
  describtionDetails.append(
    bookTitle,
    bookAuthor,
    bookDescribtion,
    bookCategorie,
    publishedDate,
    pageCount,
    purchaseButton
  );
}
displayDetails();
