let countEl = document.getElementById('count-el');
console.log(countEl);

let count = 0;

function increment() {
  count++;
  console.log('increment() called: count = ' + count);
}
