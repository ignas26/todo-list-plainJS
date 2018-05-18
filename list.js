var days = document.querySelectorAll('.day');
var todos = document.querySelectorAll('input');
var checks = document.querySelectorAll('.checked');

var data = [];
for (x=0;x<7; x++){
  let obj = {
    day:days[x].textContent,
    todo:'',
    check:false
  };
  data.push(obj);
}

todos.forEach((todo, i)=>{
  todo.addEventListener('input',function() {
  data[i].todo = todos[i].value;
  localStorage.setItem('todo',JSON.stringify(data))
})
})

var savedData = localStorage.getItem('todo');
if (savedData){
  savedData = JSON.parse(savedData);

  todos.forEach((todo,i)=>{
    data = savedData;
  todo.value = savedData[i].todo
})
  data.forEach((day, i)=>{
    day.check? getCheck(i):null;
})
}

function checkDay(cell) {
  var date = new Date();
  date.getDay()===0? cell[6].style.backgroundColor = '#AAAAAA': cell[date.getDay()-1].style.backgroundColor = '#AAAAAA';
}

checkDay(days);
checkDay(todos);
checkDay(checks);


checks.forEach((check,i)=>{
  check.addEventListener('click',function () {
  getCheck(i);
  data[i].check = true;
  localStorage.setItem('todo',JSON.stringify(data));
})
});

function getCheck(i) {
  checks[i].textContent = "Check";
  checks[i].classList.add('finished');
  todos[i].disabled=true;
  todos[i].classList.add('finished');
}

var addInput = document.querySelectorAll('.fa-plus-circle')
addInput.forEach((plus,i)=>{
  if (data[i] !=='')  plus.style.display = 'none';
})