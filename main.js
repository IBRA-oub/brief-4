console.log("first test");
//=================recherche================
const boxes = document.querySelectorAll('#box');
document.addEventListener('DOMContentLoaded', function() {
   
   const searchInput = document.getElementById('searchInput');
   
   console.log("s")

   searchInput.addEventListener('input', function() {
       const searchTerm = searchInput.value.toLowerCase();

       boxes.forEach(box => {
           box.classList.add('hidden');
       
       });

       
       boxes.forEach(box => {

           const title = box.querySelector('h2').textContent.toLowerCase();
           if (title.includes(searchTerm)) {
               box.classList.remove('hidden');
               console.log(title);
               console.log(searchTerm);
           } else {
               
               box.classList.add('hidden');
               
           }
       });
   });
});

//========================fin-recherche=================

/* CRUD ---- BOOK*/



const bookesWrapper = document.getElementById("bookes-wrapper");
const titlee = document.getElementById("grid-title");
const desc = document.getElementById("grid-desc");
const prix = document.getElementById("grid-prix");
const isbn = document.getElementById("grid-isbn");
const dispo = document.getElementById("grid-dispo");


let booksData = [];

const createBook = (uid, titlee, desc, prix, isbn ,dispo) => {
  const book = document.createElement("div");
  book.className = "book";
  book.id = uid;
  book.innerHTML = `
  <div class="relative bg-white shadow-lg rounded-lg overflow-hidden">
  <img src="../photo/c1.jpg" alt="Book 1" class=" px-20 py-3 h-50 w-100  object-cover">
  <div class="p-4">
  <div class="book-controls">
  <button type="button" class="book-edit text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 " onclick="editBook(${uid})">Editer</button>

  <button type="button" class="book-save text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" style="display:none" onclick="saveBook(${uid})" >Save</button>




  <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onclick="deleteBook(${uid})">Delete</button>

    </div>
    <h2 class="book-title text-xl font-semibold text-gray-800 mb-2">${titlee}</h2>
    <p class="book-desc text-lg text-gray-900">${desc}</p>
    <p class="book-prix text-gray-900">Prix: ${prix}</p>
    <p class="book-isbn text-gray-900">ID :${isbn}</p>
    <p class="book-dispo text-lg text-gray-900">Disponibilite: ${dispo}</p>
  </div>
  <div class="absolute bottom-0 right-0 p-2">
    <button class="bg-[#A29758] text-white font-semibold px-4 py-2 rounded-lg  hover:border-[#A29758] hover:border-2 hover:bg-white hover:text-[#A29758]">Add to Panel</button>
  </div>
</div>
  `;

  bookesWrapper.insertBefore(book, bookesWrapper.firstChild);
};

const addBook = () => {
  if (titlee.value.trim().length == 0 && content.value.trim().length == 0) {
    error.innerHTML = "Book cannot be empty";
    return;
  }

  console.log("hello");
  console.log(titlee.value);
  console.log(desc.value);
  console.log(prix.value);
  console.log(isbn.value);
  console.log(dispo.value);

  const uid = new Date().getTime().toString();

  const bookObj = {
    uid: uid,
    titlee: titlee.value,
    desc: desc.value,
    prix: prix.value,
    isbn: isbn.value,
    dispo: dispo.value,
  };

  booksData.push(bookObj);
  localStorage.setItem("books", JSON.stringify(booksData));
  
  createBook(bookObj.uid, bookObj.titlee, bookObj.desc, bookObj.prix,bookObj.isbn,bookObj.dispo);

  content.value = "";
  titlee.value = "";
};








const editBook = (uid) => {
  const book = document.getElementById(uid);

  const booktitle = book.querySelector(".book-title");
  const bookdesc = book.querySelector(".book-desc");
  const bookprix = book.querySelector(".book-prix");
  const bookisbn = book.querySelector(".book-isbn");
  const bookdispo = book.querySelector(".book-dispo");
  const bookSave = book.querySelector(".book-save");
  const bookEdit = book.querySelector(".book-edit");

  booktitle.contentEditable = "true";
  bookdesc.contentEditable = "true";
  bookprix.contentEditable = "true";
  bookisbn.contentEditable = "true";
  bookdispo.contentEditable = "true";
  bookEdit.style.display = "none";
  bookSave.style.display = "block";
  booktitle.focus();
};








const saveBook = (uid) => {
  const book = document.getElementById(uid);

  const booktitle = book.querySelector(".book-title");
  const bookdesc = book.querySelector(".book-desc");
  const bookprix = book.querySelector(".book-prix");
  const bookisbn = book.querySelector(".book-isbn");
  const bookdispo = book.querySelector(".book-dispo");
  const bookSave = book.querySelector(".book-save");
  const bookEdit = book.querySelector(".book-edit");

  if (
    booktitle.innerText.trim().length == 0
  ) {
    error.innerHTML = "title cannot be empty";
    return;
  }

  booksData.forEach((book) => {
    if (book.uid == uid) {
      book.title = booktitle.innerText;
      book.desc = bookdesc.innerText;
      book.prix = bookprix.innerText;
      book.isbn = bookisbn.innerText;
      book.disp = bookdispo.innerText;
    }
  });

  localStorage.setItem("books", JSON.stringify(booksData));

  booktitle.contentEditable = "false";
  bookdesc.contentEditable = "false";
  bookprix.contentEditable = "false";
  bookisbn.contentEditable = "false";
  bookdispo.contentEditable = "false";
  bookEdit.style.display = "block";
  bookSave.style.display = "none";
  error.innerText = "";
};



const deleteBook = (uid) => {
  let confirmDelete = confirm("Are you sure you want to delete this book?");
  if (!confirmDelete) {
    return;
  }

  const book = document.getElementById(uid);
  book.parentNode.removeChild(book);
  booksData = booksData.filter((book) => {
    return book.uid != uid;
  });
  localStorage.setItem("books", JSON.stringify(booksData));
};

window.addEventListener("load", () => {
  booksData = localStorage.getItem("books")
    ? JSON.parse(localStorage.getItem("books"))
    : [];
  booksData.forEach((book) => {
    createBook(book.uid, book.title, book.desc, book.prix ,book.isbn, book.dispo);
  });
});


/* CRUD ---- BOOK*/



/*const regex = {
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
    validate(event.target, regex[event.target.attributes.name])
  }
));*/

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
              //card.style.display = 'block';
              card.classList.remove("hidden");
          } else {
             // card.style.display = 'none';
              card.classList.add("hidden");
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
  //=========================ajout-drop-descktop=================
  const ajoutBtn=document.querySelector('.ajoutBtn');
  const ajoutCategorie=document.querySelector('.ajouteCategorie');

  ajoutBtn.addEventListener('click', ()=>{

    
    ajoutCategorie.classList.toggle('absolute');
    ajoutCategorie.classList.toggle('relative');
    ajoutCategorie.classList.toggle('left-0');

  });
  //=========================ajout-drop-mobil=================
  const ajoutBtnMobile=document.querySelector('.ajoutBtnMobile');
  const jouteCategorieMobile=document.querySelector('.jouteCategorieMobile');

  ajoutBtnMobile.addEventListener('click', ()=>{

    
    jouteCategorieMobile.classList.toggle('absolute');
    jouteCategorieMobile.classList.toggle('relative');
    jouteCategorieMobile.classList.toggle('left-0');

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



  // console.log("first test");





/* CRUD ---- CATEGORY*/










/* CRUD ---- CATEGORY*/


  






 

  
