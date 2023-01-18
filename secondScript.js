let myLeads = [];
let oldLeads = [];
const inputEl = document.querySelector('#input-el');
const inputBtn = document.querySelector('#input-btn');
const ulEl = document.querySelector('#ul-el');
const deleteEl = document.querySelector('#delete-btn');
const tabBtn = document.querySelector('#tab-btn');
const leadFromLocalStorage = JSON.parse(localStorage.getItem('myLd'));

inputBtn.addEventListener('click', function btt() {
  if (inputEl.value != '' && inputEl.value != null) {
    myLeads.push(inputEl.value);
  }
  render(myLeads);
  inputEl.value = '';
});

function render(leads) {
  if (inputEl.value != '') {
    var a = document.createElement('a');
    let liEl = document.createElement('li');
    //liEl.textContent = inputEl.value;
    a.textContent = inputEl.value;
    a.setAttribute('href', inputEl.value);
    a.setAttribute('target', '_blank');
    liEl.appendChild(a);
    ulEl.append(liEl);

    localStorage.setItem('myLd', JSON.stringify(leads));
  }
}

if (leadFromLocalStorage) {
  myLeads = leadFromLocalStorage;
  render(myLeads);
  console.log('aft: ' + myLeads);
}

deleteEl.addEventListener('dblclick', function deleteAll() {
  console.log('double');
  localStorage.clear();
  myLeads = [];
  ulEl.remove();
  render(myLeads);
});

tabBtn.addEventListener('click', function saveTab() {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem('myLd', JSON.stringify(myLeads));
    render(myLeads);
  });
});
