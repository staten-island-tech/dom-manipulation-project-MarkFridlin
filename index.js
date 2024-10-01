const DOMSelctors = {
  header: document.querySelector("h1"),
  description: document.querySelector(".card-desc"),
};
const stuudent = {
  name: "Mark",
  age: 15,
};
console.log(DOMSelctors.descriptions);
function changeColor() {
  let form = document.querySelector("form");
  form.addEventListene("submit", function (event) {
    event.preventDefault();
    //Listens for a click
    console.log(event.target);
    button.style.backgroundColor = "red";
  });
}
changeColor();
