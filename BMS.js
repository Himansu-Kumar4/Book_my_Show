const searchvalue = document.querySelector("#searchinput");
const searchbtn = document.querySelector("#searchbtn");

searchbtn.addEventListener("click", searchlist);

function searchlist() {
    let Searchdata = searchvalue.value.trim().toLowerCase();
    if (Searchdata === "") {
        alert("Please enter what to search for");
        return;
    }
    // Get all list items
   let items = document.querySelectorAll("#fullbody *");

    items.forEach((element) => {
        if (element.innerText.toLowerCase().includes(Searchdata)) {
            element.style.display = "";   // show matching
        } else {
            element.style.display = "none"; // hide non-matching
        }
    });
}