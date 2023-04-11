'use strict';
{
const bookTitles = [      
    'harry_potter_chamber_secrets',
    'Madame_Bovary',
    'Ulysses',
    'Don_Quixote',
    'One_Hundred_Years_of_Solitude',
    'The_Great_Gatsby',
    'Moby_Dick',
    'War_and_Peace',
    'Hamlet',
    'The_Odyssey',
    ];
  
    //console.log(bookTitles);

    //function createBookList(myArray) {
       // const bookUl = document.createElement("ul");
       //   bookUl.setAttribute("Id", "book-list");
        //  document.body.appendChild(bookUl);
      
         //for (let i = 0; i <myArray.length ; i++) {
          //  const liItems = document.createElement("li");
          //   liItems.setAttribute("id", "book" + i);
           //  document.getElementById("book-list").appendChild(liItems);
           //  document.getElementById("book" + i).innerHTML = myArray[i];
       //   }

   // };
   // createBookList(BookDetails); 
  
const BookDetails = {
    harry_potter_chamber_secrets  :{
        title: "the_hobbit",
        language: "English",
        author: "J.K.Rowling",   
    },
    Madame_Bovary: {
        title:  "Madame Bovary",
        language: "English",
        author: "Gustave Flaubert",
},
    Ulysses: {
        title: " Ulysses ",
        language: "english",
        author:  "James Joyce",
    },
    Don_Quixote: {
        title: "Don Quixote",
        language: "English",
        author: "Miguel de Cervantes",
    },
     One_Hundred_Years_of_Solitude: {
        title: " One Hundred Years of Solitude",
        language: "English",
        author: "Gabriel Garcia Marquez",
    },
    The_Great_Gatsby: {
        title: " The Great Gatsby",
        language: "English",
        author: "F. Scott Fitzgerald"
    },
    Moby_Dick: {
        title:  "Moby Dick",
        language: "English",
        author:  "Herman Melvillen",
    },
    War_and_Peace: {
        title: " War and Peace",
        language: "English",
        author: " Leo Tolstoy",
    },
    Hamlet: {
        title: "Hamlet",
        language:"English",
        author: "William Shakespeare",
    },
    The_Odyssey: {
        title: "The Odyssey",
        language:"English",
        author: "Homer",
    }
};

const coverImg = {    
    Harry_potter_chamber_secrets: "./img/Harry_potter_chamber_secrets.jpg",
    Madame_Bovary: "./img/Madame_Bovary.jpg",
    Ulysses: "./img/Ulysses.jpg",
    Don_Quixote: "./img/Don_Quixote.jpg",
    One_Hundred_Years_of_Solitude: "./img/One Hundred Years of Solitude.jpg",
    The_Great_Gatsby: "./img/The Great Gatsby.jpg",
    Moby_Dick: "./img/Moby Dick.jpg",
    War_and_Peace: "./img/War and Peace.jpg",
    Hamlet: "./img/Hamlet.jpg",
    The_Odyssey: "./img/The Odyssey.jpg",
};
console.log(coverImg);
}
