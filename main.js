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

//////////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.cards .card');

  const itemsPerPage = 6;
  let currentPage = 1;

      // Implement pagination controls (numbered pages)
      const numberedPages = document.querySelectorAll('.pagination [data-page]');
      numberedPages.forEach(function (page) {
          page.addEventListener('click', function () {
              const pageNumber = parseInt(page.getAttribute('data-page'));
              if (pageNumber) {
                  currentPage = pageNumber;
                  updatePagination();
                  updatePageNumberClass();
                  updateButtonVisibility();
              }
          });
      });

  function updatePagination() {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;


      cards.forEach(function (card, index) {
          if (index >= startIndex && index < endIndex) {
              card.style.display = 'block';
          } else {
              card.style.display = 'none';
          }
      });
  }



  const nextPageButton = document.getElementById('nextPage');
  const prevPageButton = document.getElementById('prevPage');

  nextPageButton.addEventListener('click', function () {
      if (currentPage < numberedPages.length) {
          currentPage++;
          updatePagination();
          updatePageNumberClass();
          updateButtonVisibility();
      }
  });

  prevPageButton.addEventListener('click', function () {
      if (currentPage > 1) {
          currentPage--;
          updatePagination();
          updatePageNumberClass();
          updateButtonVisibility();
      }
  });

  // Function to update page number classes
  function updatePageNumberClass() {
      numberedPages.forEach(function (page) {
          const pageNumber = parseInt(page.getAttribute('data-page'));
          if (pageNumber === currentPage) {
              page.classList.add('bg-green-100');
          } else {
              page.classList.remove('bg-green-100');
          }
      });
  }
  // Function to update button visibility
  function updateButtonVisibility() {
      if (currentPage === 1) {
          prevPageButton.style.display = 'none';
      } else {
          prevPageButton.style.display = 'inline';
      }

      if (currentPage === numberedPages.length) {
          nextPageButton.style.display = 'none';
      } else {
          nextPageButton.style.display = 'inline';
      }
  }



  // Initial pagination setup
  updatePagination();
  updatePageNumberClass();
  updateButtonVisibility();
});

///////////////////////////////////////////

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



  






 

  
