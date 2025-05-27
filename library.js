/* 
You are tasked with designing a library management system. The library lends out various types of items such as books, DVDs, and magazines. While all items share some common properties (e.g., title, id, isAvailable), each type has unique properties and behaviors. For example:
● Books have an author and a genre.
● DVDs have a director and duration.
● Magazines have an issueNumber and pub

Step 1: Create a Base Class
○ Define a class LibraryItem to represent shared properties (title, id, isAvailable) and methods (e.g., checkOut() and returnItem()).

Step 2: Extend the Base Class
○ Create child classes Book, DVD, and Magazine that inherit from LibraryItem.
○ Add unique properties and methods for each child class:
■ Book: Add properties like author and genre.
■ DVD: Add properties like director and duration.
■ Magazine: Add properties like issueNumber and publisher.

Step 3: Instantiate Objects
○ Create instances of each class and test the shared and unique methods.

. Step 4: Test the Inheritance
○ Use inherited methods like checkOut() and returnItem() to manage the availability of items.
○ Test accessing and displaying unique properties of each child class.
*/

// Code here - define the base class, and shared properties (title, is, isAvailable)
/*
class LibraryItem {

    constructor(title, id, isAvailable = true) {
        this.title = title;
        this.id = this.id;
        this.isAvailable = isAvailable;
    }
}

checkout() {
    if (this.isAvailable) {
        console.log(`This is available for checkout`);
    } else {
        console.log(`Sorry ${this.title} is not availalbe`);
    }
        
}


//returnItem();

let bookA = new LibraryItem("The Hobbit", 123456);

console.log("Initial availablility: " + bookA.isAvailable);
*/

class LibraryItem {

  constructor(title, id) {
    this.title = title;
    this.id = id;
    this.isAvailable = true;
  }

  checkout() {
    if (this.isAvailable) {
      console.log(`Thank you for checking out ${this.title}.`);
      this.isAvailable = false;
    } else {
      console.log(`Sorry, ${this.title} is not available at this time.`);
    }
  }

  returnItem() {
    console.log(`Thank you for returning ${this.title}!`);
    this.isAvailable = true;
  }
  
}

// let bookA = new LibraryItem("The Hobbit", 123456);
//console.log("Initial availablility: " + bookA.isAvailable);

class Book extends LibraryItem {
    constructor(title, id, isAvailable, author, genre) {
        super(title, id);
        this.author = author;
        this.genre = genre;
    }

    displayAuthor() {
        console.log(`This book is written by $(this.author}.`);
    }
}

class Dvd extends LibraryItem {
    constructor(title, id, director, duration, mpaaRating) {
        super(title, id);
        this.director = director;
        this.duration = duration;
        this.mpaaRating = mpaaRating;
    }

    displayMovieRating() {
        console.log(`This movie is rated ${this.mpaaRating}.`);
    }
}

class Magazine extends LibraryItem {
    constructor(title, id, issueNumber, publisher) {
        super(title, id);
        this.issueNumber = issueNumber;
        this.publisher = publisher;
    }

    displayPublisher() {
        console.log(`This publisher is: ${this.publisher}. `);
    }
}

const myDvd = new Dvd("Diary of a Whimpy Kid", 456, "John Doe", 2, "PG-13");

console.log(myDvd);

myDvd.displayMovieRating();  