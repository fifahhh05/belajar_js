//console.log("hello world")
//alert("Notifikasi")
//prompt("Pinjam seratus")

//var Promnet = "Coding is Easy"
// console.log(Promnet)
// var Promnet = "Coding not Easy"
// console.log(Promnet)

// let Promnet = "Coding is Easy"
// console.log(Promnet)
// Promnet = "Coding not Easy"
// console.log(Promnet)

// const Promnet = "Coding is Easy"
// console.log(Promnet)
// Promnet = "Coding not Easy"
// console.log(Promnet)

// let totalPoin = prompt("Masukkan Poin Anda")
//     if(totalPoin > 100){
//         document.write("<h1>Cogratulation</h1>");
//     }
//     else{
//         document.write("<h1>Thank you</h1>");
//     }

// let x = 6;
// let y = 3;

// if (x < 10 && y > 1) {
//   console.log("a: true");
// } else {
//   console.log("a: false");
// }

// if (x < 10 && y < 1) {
//   console.log("b: true");
// } else {
//   console.log("b: false");
// }

// if (x == 5 || y == 5) {
//   console.log("c: true");
// } else {
//   console.log("c: false");
// }

// if (x == 6 || y == 5) {
//   console.log("d: true");
// } else {
//   console.log("d: false");
// }

// if (!(x == y)) {
//   console.log("e: true");
// } else {
//   console.log("e: false");
// } 

// let x = 6;
// let y = 3;

// console.log(x<10 && y > 1);
// console.log(x<10 && y < 1);
// console.log(x==5||y==5)
// console.log(x==6||y==5)
// console.log(!(x==y))

// let p = document.querySelector("p")
// let button = document.querySelector("button")
// let input =  document.querySelector("input")

// button.addEventListener('click', function(){
//     let isi = input.value
//     console.log(isi)
//     p.innerHTML = isi
// })
const inputBox = document.getElementById("inbox-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("Masukan list terlebih dahulu");
    } else {
        let li = document.createElement("li");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkbox";
        li.appendChild(checkbox);
        let taskText = document.createTextNode(inputBox.value);
        li.appendChild(taskText);
        
        let removeButton = document.createElement("button");
        removeButton.textContent = "X";
        removeButton.className = "remove-button";
        removeButton.style.marginLeft = "10px"
        li.appendChild(removeButton);
        listContainer.appendChild(li);
        
        inputBox.value = "";
        li.style.listStyleType = "none";
        
        removeButton.addEventListener("click", function () {
            li.remove();
        });
    }
}

listContainer.addEventListener("change", function (e) {
    if (e.target.tagName === "INPUT" && e.target.type === "checkbox") {
        if (e.target.checked) {
            e.target.parentElement.style.textDecoration = "line-through";
        } else {
            e.target.parentElement.style.textDecoration = "none";
        }
    }
});