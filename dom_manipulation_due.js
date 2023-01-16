console.log('File dom_manipulation_due');
var buttonAvanti = document.querySelector('button#yes-avanti');
var buttonConfirm = document.querySelector('button#button-confirm');
var buttonDischarge = document.querySelector('button#button-discharge');
var bolvar = false;

buttonAvanti.addEventListener('click', showConferma);
buttonConfirm.addEventListener('click', definitiveConfirm);
buttonDischarge.disabled = true;

function showConferma() {
  var divConferma = document.getElementById('conferma');
  var divAfterConfirm = document.getElementById('after-confirm');
  //const buttonText = document.getElementById('button#yes-avanti');
  if (divConferma.style.display) {
    if (divConferma.style.display == 'none') {
      divConferma.style.display = 'block';
      //console.log('Set to block');
      if (bolvar == true) {
        divAfterConfirm.style.display = 'block';
      }
      buttonAvanti.innerText = 'Hide';
    } else {
      divConferma.style.display = 'none';
      buttonAvanti.innerText = 'Show';
      if (bolvar == true) {
        divAfterConfirm.style.display = 'none';
      }
      //console.log('set to None');
    }
  } else {
    divConferma.style.display = 'block';
    buttonAvanti.innerText = 'Hide';
  }
}

function definitiveConfirm() {
  var divAfterConfirm = document.getElementById('after-confirm');
  console.log('function definitiveConfirm()');
  //window.confirm('Stai per confermare definitivamente');
  if (bolvar == false && confirm('Stai per confermare definitivamente')) {
    console.log('prima');
    bolvar = true;
    buttonDischarge.disabled = false;
    if (divAfterConfirm.style.display) {
    } else {
      divAfterConfirm.style.display = 'block';
    }
  } else {
    window.alert('You have already confirmed!');
    bolvar = false;
    console.log('else');
  }
}
