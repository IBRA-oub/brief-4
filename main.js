console.log("first test");


const regex = {
    email: /^([a-z\d.-]+)@([a-z-]+).([a-z]{1,3}).([a-z]{1,3})?$/,
}

let inputs = document.querySelectorAll('input');

function validate(input, regex) {
    if(regex.test(input.value)){
        input.className = 'valid';
    } else {
        input.className = 'invalid';
        input.nextElementSibling.style.display = "block";
    }
}

inputs.forEach(input => input.addEventListener(
  'focusout', function(event) {
    validate(event.target, regex[event.target.attributes.name.value])
  }
));



function ajoutLivre() {
  document.getElementById("popupForm").style.display = "block";
}

function modLivre() {
  document.getElementById("popupFormmod").style.display = "block";
}

function closeForm() {
  document.getElementById("popupFormmod").style.display = "none";
  
}

function closeFormaj() {
  document.getElementById("popupForm").style.display = "none";
  
}

ajouterLivre.addEventListener("click",function(){
  document.getElementById("popupForm").style.display = "block";
});




