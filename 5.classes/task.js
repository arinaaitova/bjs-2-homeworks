class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
       this.name = name;
       this.releaseDate = releaseDate;
       this.pagesCount = pagesCount;
       this.state = 100;
       this.type = null;
   }

fix() {
   this.state = this.state * 1.5;
}

set state(newState) {
 if(newState < 0) {
 this._state = 0;
 } else if(newState > 100) {
 this._state = 100;
 } else {
 this._state = newState;
 }
}

get state() {
   return this._state; 
}
}

class Magazine extends PrintEditionItem {
   constructor(name, releaseDate, pagesCount) {
       super(name, releaseDate, pagesCount);
       this.type = "magazine";
   }
}
class Book extends PrintEditionItem {
   constructor(name, releaseDate, pagesCount, author ) {
       super(name, releaseDate, pagesCount);
       this.type = "book"; 
       this.author = author;
}
}
class NovelBook extends Book {

   constructor(author, name, releaseDate, pagesCount) {
       super(author, name, releaseDate, pagesCount);
       this.type = "novel";
   }
};

class FantasticBook extends Book {

   constructor(author, name, releaseDate, pagesCount) {
       super(author, name, releaseDate, pagesCount);
       this.type = "fantastic";
   }
};

class DetectiveBook extends Book {

   constructor(author, name, releaseDate, pagesCount) {
       super(author, name, releaseDate, pagesCount);
       this.type = "detective";
   }
};

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (this.state > 30) {
        this.books.push(book)
        }
    }

    findBookBy(type, value) { 
        const findResult = this.books 
        .find(book => book[type] === value) 
        if (findResult === undefined) return null; 
        return findResult; 
}

giveBookByName(bookName) {
    const giveResult = this.books 
        .find((book) => book.name === bookName) 
        const indexResult = this.books.findIndex((book) => book.name === bookName); 
        if (giveResult === undefined) return null; 
        else this.books.splice(indexResult, 1); 
        return giveResult; 