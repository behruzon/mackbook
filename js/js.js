let btn1 = document.querySelector(".btn-common1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");
let p = document.querySelector(".laptop_price");
let color = document.querySelector(".color");
let white_btn = document.querySelector(".btn-1");
let grey_btn = document.querySelector(".btn-2");
let img = document.querySelector("img");
let src1 = "./img/laptop.png";
let src2 = "./img/imp2.png";

let rem_gray = (btn) => {
  btn.classList.remove("white_back");
  btn.classList.add("blue_back");
  btn.style.color = "white";
};
let rem_white = (btn) => {
  btn.classList.remove("blue_back");
  btn.classList.add("white_back");
  btn.style.color = "gray";
};

grey_btn.onclick = () => {
  img.setAttribute("src", src1);
  rem_gray(grey_btn);
  rem_white(white_btn);
  color.innerHTML = "Space Gray";
};
white_btn.onclick = () => {
  img.setAttribute("src", src2);
  rem_gray(white_btn);
  rem_white(grey_btn);
  color.innerHTML = "White";
};

let rem = (btn) => {
  btn.classList.remove("btn-common1");
};

btn1.onclick = () => {
  p.innerHTML = "$1,999";
  btn1.classList.add("btn-common1");
  rem(btn2);
  rem(btn3);
  rem(btn4);
};
btn2.onclick = () => {
  p.innerHTML = "$2,199";
  btn2.classList.add("btn-common1");
  rem(btn1);
  rem(btn3);
  rem(btn4);
};
btn3.onclick = () => {
  p.innerHTML = "$2,599";
  btn3.classList.add("btn-common1");
  rem(btn1);
  rem(btn2);
  rem(btn4);
};
btn4.onclick = () => {
  p.innerHTML = "$3,199";
  btn4.classList.add("btn-common1");
  rem(btn1);
  rem(btn3);
  rem(btn2);
};


let checkbox = document.querySelector('.checkbox')
let link = document.querySelector('link')


checkbox.addEventListener('click',(event) => {
  if (checkbox.classList.contains('on')) {
    checkbox.setAttribute('aria-checked','false');
    link.href = "css/main.css"
  }else{
    checkbox.setAttribute('aria-checked', 'true');
    link.href = "css/style.css"
  }
  checkbox.classList.toggle('on')   
})



let w_height = window.innerWidth
if(w_height <= 700){
  grey_btn.style.backgroundColor = 'green'
} 


let height = grey_btn.offsetTop
let heeight = btn1.offsetTop
console.log(height,heeight);


