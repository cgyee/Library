let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.index = 0;
    this.info = function() {
        return title + " by " + author + " is " + pages + " and  " + read;
    };
    this.setIndex = function(number) {
        index = number;
    };
    this.getIndex = function() {
        return index;
    };
    this.toggleReadStatus = function() {
        if(read == "has read") {
            read = "has not read";
        }
        else {
            read = "has read";
        }
    };
}

function getLibrarySize() {
    return myLibrary.length;
}

function addBookToLibrary(book) {
    book.setIndex(getLibrarySize());
    myLibrary.push(book);
}

function addNewBookToLibrary(title, author, pages, read) {
    const newBook = Book(title, author, pages, read);
    addBookToLibrary(newBook);
}

function removeBookFromLibrary(index) {
    myLibrary = myLibrary.filter(book => book.getIndex() == index);
}

function viewCurrentLibrary() {
    const row = document.querySelector('.row');
    while(row.firstChild) {
        row.removeChild(row.firstChild);
    }
    myLibrary.forEach(book => {
        addBookToPage(book);
    });
   
}

function addBookToPage(book) {
    const row = document.querySelector('.row');
    bookDiv = document.createElement('div');
    cardDiv = document.createElement('div');
    imgDiv = document.createElement('img');
    rectangle = document.createElement('rect');
    cardBodyDiv = document.createElement('div');
    bookInfo = document.createElement('p');
    buttonsFlex = document.createElement('div');
    smallText = document.createElement('small');
    buttonGroup = document.createElement('div');
    buttonHasRead = document.createElement('button');
    
    bookDiv.className = "col-sm-3";
    cardDiv.className = "card mb-4 shadow-sm";
    imgDiv.className = "bd-placeholder-img card-img-top";
    cardBodyDiv.className = "card-body";
    bookInfo.className = "card-text";
    buttonsFlex.className = "d-flex justify-content-between align-items-center";
    buttonGroup.className = "btn-group";
    buttonHasRead.className = "btn btn-sm btn-outline-secondary";

    imgDiv.setAttribute("src", "css/open-book.png")
    imgDiv.setAttribute("width", "100%");
    imgDiv.setAttribute("height", "255");
    rectangle.setAttribute("width", "100%");
    rectangle.setAttribute("height", "100%");
    rectangle.setAttribute("fill", "#55595c");
    
    bookInfo.textContent = book.info();
    buttonHasRead.textContent = book.read;
    smallText.textContent = book.pages;

    buttonGroup.append(buttonHasRead);
    buttonsFlex.append(buttonGroup, smallText);
    //bookInfo.append(buttonsFlex);
    cardBodyDiv.append(bookInfo, buttonsFlex);
    imgDiv.append(rectangle);
    cardDiv.append(imgDiv, cardBodyDiv);
    //cardDiv.append(imgDiv);
    bookDiv.append(cardDiv);
    row.append(bookDiv);
}

const testBook = new Book("Lord of the Things", "Some Guy", "many", "has not");
addBookToLibrary(testBook);
console.log(myLibrary);