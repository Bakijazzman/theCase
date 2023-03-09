const data1 = document.getElementById("collectData");
const mother = document.querySelector("ul");
const button = document.getElementById("add");
function dataLength() {
  return data1.value.length;
}
function clicking() {
  if (dataLength() > 0) {
    addData();
  }
}
function onEnter(event) {
  if (dataLength() > 0 && event.keyCode === 13) {
    addData();
  }
}
const addData = function () {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(data1.value));
  mother.appendChild(li);
  data1.value = "";
};
button.addEventListener("click", clicking);
data1.addEventListener("keypress", onEnter);
