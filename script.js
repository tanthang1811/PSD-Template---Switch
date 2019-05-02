var sortList = document.querySelector(".sort ul");
var sortItems = document.getElementsByClassName("sort-item");


for (let i = 0; i < sortItems.length; i++) {
    const element = sortItems[i];
    element.addEventListener("click", function(e) {
        removeActiveSort();
        element.classList.add("active");
    });
}



function removeActiveSort() {
    for (let i = 0; i < sortItems.length; i++) {
        const element = sortItems[i];
        element.classList.remove("active");
    }
}