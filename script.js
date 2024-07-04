let divRow;
let divColumn;

const mainContainer = document.querySelector(".mainContainer");
const dimensionButton = document.querySelector(".dimensionButton");

dimensionButton.addEventListener("click", function() {
  let width;

  do {
    width = prompt("Enter the width of the square:");
  } 
  while (width > 100);

  let boxDimensions = 1000 / width;

  mainContainer.innerHTML = "";

  for (let i = 0; i < width; i++) {
    divRow = document.createElement("div");
    divRow.className = "divRow";
    divRow.style.height = `${boxDimensions}px`;
    
    for (let j = 0; j < width; j++) {
      divColumn = document.createElement("div");
      divColumn.className = "divColumn";
      divColumn.style.width = `${boxDimensions}px`;
      divRow.appendChild(divColumn);
  
      divColumn.addEventListener("mouseover", function() {
        this.style.backgroundColor = "black";
      });
    }
  
    mainContainer.appendChild(divRow);
  };
  
});


