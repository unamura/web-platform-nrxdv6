function saveLead() {
  console.log('save');
}

let myLeads = [];
let inputEl = document.querySelector('#input-el');

let inputBtn = document.querySelector('#input-btn');
const ulEl = document.querySelector('#ul-el');

inputBtn.addEventListener('click', function btt() {
  myLeads.push(inputEl.value);
  rendeLeads();
  inputEl.value = '';
});

function rendeLeads() {
  var a = document.createElement('a');
  let liEl = document.createElement('li');
  //liEl.textContent = inputEl.value;
  a.textContent = inputEl.value;
  a.setAttribute('href', inputEl.value);
  a.setAttribute('target', '_blank');
  liEl.appendChild(a);
  ulEl.append(liEl);
}

localStorage.setItem('myLd', JSON.stringify(myLeads));
//console.log(localStorage.getItem(JSON.parse('myLd')));
