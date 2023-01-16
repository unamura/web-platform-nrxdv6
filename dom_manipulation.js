console.log('File dom_manipulation');
var count = 0;
var b = document.querySelector('button#visualizza');
//b.addEventListener('click', manipolaDiv);
var disattivaButton = document.querySelector('button#disattiva');
var abilitaButton = document.querySelector('button#abilita');
var linkGoogle = document.querySelector('#link-to-google');
var body = document.querySelector('body');

disattivaButton.addEventListener('click', function() {
  b.removeEventListener('click', manipolaDiv);
});

abilitaButton.addEventListener('click', abilitaFunction);

linkGoogle.addEventListener('click', function(evento) {
  console.log('click su link vai a google');
  evento.preventDefault();
  // evento.stopPropagation();
  evento.stopImmediatePropagation();
});

linkGoogle.addEventListener('click', evento => {
  console.log('altro evento di click registrato su link vai a google');
});

body.addEventListener('click', bodyCallback, true);

function abilitaFunction() {
  //var b = document.querySelector('button#visualizza');

  // sbagliata: registra piu volte/multiple il listener ad ogni click del pulsante abilita
  // b.addEventListener('click', function() {
  //   count = count + 1;
  //   var d = document.getElementById('div-da-manipolare');
  //   d.innerHTML =
  //     'Questo <strong>div</strong> è stato manipolato.<br> <a href="/index.html">Index</a> <br> contatore: ' +
  //     count;
  //   if (d.getAttribute('style') == null) {
  //     d.setAttribute('style', 'background-color: #ddd;');
  //   } else {
  //     d.removeAttribute('style');
  //   }
  //   console.log('div selezionato: typeof', typeof d, d);
  // });
  b.addEventListener('click', manipolaDiv);
  // b.addEventListener('mousedown', manipolaDiv);
  // b.addEventListener('mouseup', manipolaDiv);
}

// var isGrigio = true;
// if (isGrigio) {
//   manipolaDiv();
// }
function manipolaDiv(evento) {
  count = count + 1;
  var d = document.getElementById('div-da-manipolare');
  d.innerHTML =
    'Questo <strong>div</strong> è stato manipolato.<br> <a href="/index.html">Index</a> <br> contatore: ' +
    count;
  if (d.getAttribute('style') == null) {
    d.setAttribute('style', 'background-color: #ddd;');
  } else {
    d.removeAttribute('style');
  }
  console.log('div selezionato: typeof', typeof d, d);
}

function clickInterno(e) {
  console.log("clickInterno target dell'evento: ", e.target);
  console.log("clickIntrno currentTarget dell'evento: ", e.currentTarget);
  e.stopPropagation();
  e.preventDefault();
  console.log('clickInterno', e);
}

function bodyCallback(evento) {
  console.log("body target dell'evento: ", evento.target);
  console.log("body currentTarget dell'evento: ", evento.currentTarget);
  // evento.stopPropagation();
  console.log('bodyCallback');
}

document.addEventListener(
  'click',
  evento => {
    console.log('evento del document', evento);
  },
  true
);
