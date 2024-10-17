const DOMSelctors = {
  parentdiv: document.querySelector(".parent"),
  submitButton: document.querySelector("button"),
  title: document.querySelector("#title"),
  desc: document.querySelector("#desc"),
};
function clearInput() {
  DOMSelctors.title.value = "";
  DOMSelctors.desc.value = "";
}
function removePrompt(num) {
  DOMSelctors.parentdiv.removeChild(`p${num}`);
}
function addElement(num) {
  DOMSelctors.parentdiv.insertAdjacentHTML(
    "beforeend",
    `<div class="card" id="p${num}"><h4>${DOMSelctors.title.value}</h4><img src="${DOMSelctors.desc.value}"><button id="b${num}>Delete</button></div>`
  );
  document
    .querySelector(`#b${num}`)
    .addEventListener("click", function (event) {
      event.preventDefault();
      document.querySelector(`#p${num}`).remove();
    });
  function run() {
    let n = 0;
    DOMSelctors.submitButton.addEventListener("click", function (event) {
      if (!(DOMSelctors.title.value === "" || DOMSelctors.desc.value === "")) {
        event.preventDefault();
        addElement(n);
        clearInput();
        n += 1;
      }
    });
  }
}
[title, desc].forEach((input) => {
  input.addEventListener("keypress", function (event) {
    if (
      !(DOMSelctors.title.value === "" || DOMSelctors.desc.value === "") &
      (event.key === "enter")
    ) {
      event.preventDefault();
      addElement(n);
      clearInput();
      n += 1;
    }
  });
});

run();
