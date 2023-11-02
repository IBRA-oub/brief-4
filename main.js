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

  //===============burger-menu====================
  const burger=document.querySelector('.nav');
  const burgerMenu=document.querySelector('.burgerMenu');

  burgerMenu.addEventListener('click', ()=>{

    burger.classList.toggle('left-0');
  });

  //====================drop-categorie=================
  const categorie=document.querySelector('.categorie');
  const allCaegorie=document.querySelector('.allCategorie');

  categorie.addEventListener('click', ()=>{

    allCaegorie.classList.toggle('left-0');
  });

  //===================more-drop===================
  const more=document.querySelector('.more');
  const moreChose=document.querySelector('.moreChose');

  more.addEventListener('click', ()=>{

    moreChose.classList.toggle('-left-full');
  });

 
  
 

  
