const btn = document.querySelector("button");
//step1.
const message = document.getElementById("message");
const output = document.querySelector(".output");
const myInput = document.querySelector("input");
const closebtn = document.querySelector("closebtn");
//step2.

myInput.addEventListener("change", uploadAndReadFile);
//step3.
function uploadAndReadFile(e) {
  //step4.
  const files = e.target.files;
  //step5.
  for (let i = 0; i < files.length; i++) {
    //step6
    const file = files[i];
    const img = document.createElement("img");
    img.classList.add("thumb");
    img.file = file;
    output.appendChild(img);
    const reader = new FileReader();
    reader.onload = (function (myImg) {
      return function (e) {
        myImg.src = e.target.result;
      };
    })(img);
    reader.readAsDataURL(file);
  }
}
