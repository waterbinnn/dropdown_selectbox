// 자바스크립트로 버튼토글 구현하기 

const btn = document.querySelector(".toggle-btn");
const list = document.querySelector(".selectbox-option");

btn.addEventListener('click',() => {
  list.classList.toggle('on');
  btn.classList.toggle('on');
});

list.addEventListener('click',(event)=>{
  (event.target.nodeName === "BUTTON"); {
    btn.innerText = event.target.innerText;
    list.classList.remove('on');
}
});