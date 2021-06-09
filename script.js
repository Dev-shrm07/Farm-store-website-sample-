let menu = document.getElementById("menu");
menu.addEventListener("click", function () {
  let ul = document.getElementById("navbar").getElementsByTagName("UL")[0];
  ul.style.display = "flex";
  ul.style.flexDirection = "column";
  let cross = document.getElementById("cross");
  cross.style.display = "block";
});
function cancel() {
  document
    .getElementById("navbar")
    .getElementsByTagName("UL")[0].style.display = "none";
  let cross = document.getElementById("cross");
  cross.style.display = "none";
}

for (let i = 0; i < 4; i++) {
  let btn = document.getElementById(`ar${i}`);
  console.log(btn);
  btn.addEventListener("click", function () {
    if (btn.src == "arrow.svg") {
      let div = btn.parentElement;
      let div1 = div.parentElement;
      let ans = div1.childNodes[2];
      ans.style.display = "block";
      btn.src = "arrowup.svg";
    } else {
      let div = btn.parentElement;
      let div1 = div.parentElement;
      let ans = div1.childNodes[2];
      ans.style.display = "none";
      btn.src = "arrow.svg";
    }
  });
}

function show1() {
  let btn = document.getElementById("ar1");
  let ans = document.getElementById("a-1");
  let btn1 = document.getElementById('ar01');
  btn.style.display = 'none';
  ans.style.display = 'block';
  btn1.style.display = 'block';

}
function show01() {
  let btn = document.getElementById("ar1");
  let ans = document.getElementById("a-1");
  let btn1 = document.getElementById('ar01');
  btn.style.display = 'block';
  ans.style.display = 'none';
  btn1.style.display = 'none';

}
function show2() {
  let btn = document.getElementById("ar2");
  let ans = document.getElementById("a-2");
  let btn1 = document.getElementById('ar02');
  btn.style.display = 'none';
  ans.style.display = 'block';
  btn1.style.display = 'block';

}
function show02() {
  let btn = document.getElementById("ar2");
  let ans = document.getElementById("a-2");
  let btn1 = document.getElementById('ar02');
  btn.style.display = 'block';
  ans.style.display = 'none';
  btn1.style.display = 'none';

}
function show3() {
  let btn = document.getElementById("ar3");
  let ans = document.getElementById("a-3");
  let btn1 = document.getElementById('ar03');
  btn.style.display = 'none';
  ans.style.display = 'block';
  btn1.style.display = 'block';

}
function show03() {
  let btn = document.getElementById("ar3");
  let ans = document.getElementById("a-3");
  let btn1 = document.getElementById('ar03');
  btn.style.display = 'block';
  ans.style.display = 'none';
  btn1.style.display = 'none';

}