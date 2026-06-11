let slides=document.querySelector(".slides")
let images=document.querySelectorAll(".slides img")
let prevBtn=document.querySelector(".prev")
let nextBtn=document.querySelector(".next")

let index=0

function showSlide(){
    slides.style.transform=`translateX(-${index * 100}%)`
}

prevBtn.addEventListener("click",()=>{
    index--;
    if(index<0){
        index=images.length-1;
    }
    showSlide();
})


nextBtn.addEventListener("click",()=>{
    index++;
    console.log("clicked")
    if(index>=images.length){
        index=0
    }
    showSlide();
})

setInterval(()=>{
    index++;
    if(index>=images.length){
        index=0;
    }
    showSlide();
},4000)

const searchvalue = document.querySelector("#searchinput");
const searchbtn = document.querySelector("#searchbtn");

searchbtn.addEventListener("click", searchlist);

function searchlist() {
    let Searchdata = searchvalue.value.trim().toLowerCase();
    if (Searchdata == "") {
        alert("Please enter what to search for");
        return;
    }

    // Get all list items
    let items = document.querySelectorAll("#fullbody .the");

    items.forEach((element) => {
        if (element.innerText.toLowerCase().includes(Searchdata)) {
            element.style.display = "";   // show matching
        } else {
            element.style.display = "none"; // hide non-matching
        }
    });
}

//searchvalue.addEventListener("input", searchlist2);

//this is a debounce function that will delay the search request
function debounce(func, delay){
    let timer;
    return function(...arg){ //this is a spread operator
        clearTimeout(timer);
        timer=setTimeout(()=>{
            func(...arg)
        },delay)
    }
}

let Searchdata = searchvalue.value.trim().toLowerCase();

function searchlist2(Searchdata) {
    // Get all list items
    let items = document.querySelectorAll("#fullbody .the");

    items.forEach((element) => {
        if (element.innerText.toLowerCase().includes(Searchdata)) {
            element.style.display = "";   // show matching
        } else {
            element.style.display = "none"; // hide non-matching
        }
    });
}

let debouncesearch=debounce(searchlist2,3000)
searchvalue.addEventListener("input",(e)=>{
    debouncesearch(e.target.value);
})