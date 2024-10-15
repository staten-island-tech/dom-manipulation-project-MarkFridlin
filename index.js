const DOMSelctors = {
  header: document.querySelector(".parent"),
  description: document.querySelector("button"),
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
    "befreend",
    `<div class="card" id="p${num}"><h4>${DOMSelctors.title.value}</h4><img src="${DOMSelctors.desc.value}"<button id="b${num}>Delete</div>`
  );
}
