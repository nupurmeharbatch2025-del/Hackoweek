const capacity = 10;

let books = JSON.parse(localStorage.getItem("books")) || [];

const grid = document.getElementById("bookGrid");
const toast = document.getElementById("toast");
const capacityDisplay = document.getElementById("capacityDisplay");
const emptyState = document.getElementById("emptyState");

const totalBooks = document.getElementById("totalBooks");
const topGenre = document.getElementById("topGenre");

function saveBooks(){
localStorage.setItem("books",JSON.stringify(books));
}

function showToast(msg){

toast.innerText = msg;
toast.style.opacity = 1;

setTimeout(()=>{
toast.style.opacity = 0;
},2000);

}

function updateCapacity(){

capacityDisplay.innerText = books.length + " / " + capacity;

}

function updateStats(){

totalBooks.innerText = books.length;

let genreCount = {};

books.forEach(book=>{
genreCount[book.genre] = (genreCount[book.genre] || 0) + 1;
});

let top = "-";
let max = 0;

for(let g in genreCount){
if(genreCount[g] > max){
max = genreCount[g];
top = g;
}
}

topGenre.innerText = top;

}

function renderBooks(){

grid.innerHTML="";

if(books.length===0){

emptyState.style.display="block";
grid.style.display="none";
return;

}

emptyState.style.display="none";
grid.style.display="grid";

books.forEach((book,index)=>{

const stars = "⭐".repeat(book.rating);

const card = document.createElement("div");

card.className="card";

card.innerHTML=`
<img src="${book.image}">
<div class="card-content">
<h3>${book.title}</h3>
<p>${book.author}</p>
<p>${book.genre} • ${book.year}</p>
<p class="rating">${stars}</p>
<button class="remove-btn" onclick="removeBook(${index})">Remove</button>
</div>
`;

grid.appendChild(card);

});

}

function addBook(){

const title=document.getElementById("title").value;
const author=document.getElementById("author").value;
const genre=document.getElementById("genre").value;
const year=document.getElementById("year").value;
const rating=document.getElementById("rating").value;
const image=document.getElementById("image").value;

if(!title || !author || !genre || !year || !rating || !image){

showToast("Fill all fields");
return;

}

if(books.length>=capacity){

showToast("Library capacity reached");
return;

}

books.push({
title,
author,
genre,
year,
rating,
image
});

saveBooks();
updateCapacity();
updateStats();
renderBooks();

showToast("Book added");

document.querySelectorAll(".form input").forEach(i=>i.value="");

}

function removeBook(index){

books.splice(index,1);

saveBooks();
updateCapacity();
updateStats();
renderBooks();

showToast("Book removed");

}

document.getElementById("searchBar").addEventListener("input",function(){

const text=this.value.toLowerCase();

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

let title=card.querySelector("h3").innerText.toLowerCase();

card.style.display = title.includes(text) ? "block":"none";

});

});

updateCapacity();
updateStats();
renderBooks();